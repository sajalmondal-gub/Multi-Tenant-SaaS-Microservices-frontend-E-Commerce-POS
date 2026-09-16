"use client";

import { useState, useRef, FormEvent, useEffect } from "react";
import Link from "next/link";
import { 
  Search, 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  CreditCard,
  Tag,
  Coffee,
  MonitorSmartphone,
  Shirt,
  MoreHorizontal,
  Barcode,
  UserPlus,
  User,
  ChevronDown,
  Banknote,
  Smartphone,
  ArrowLeft,
  Store,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";
import { InvoiceReceipt } from "./InvoiceReceipt";

// Mock Data
const categories = [
  { id: "all", name: "All Items", icon: Tag },
  { id: "food", name: "Food & Drinks", icon: Coffee },
  { id: "electronics", name: "Electronics", icon: MonitorSmartphone },
  { id: "clothing", name: "Apparel", icon: Shirt },
  { id: "other", name: "Miscellaneous", icon: MoreHorizontal },
];

const mockProducts = [
  { id: 1, name: "Artisan Coffee Beans", price: 18.99, category: "food", color: "bg-amber-100 text-amber-700 border-amber-200", stock: 24, sku: "FOD-001", barcode: "10001" },
  { id: 2, name: "Wireless Earbuds Pro", price: 129.50, category: "electronics", color: "bg-blue-100 text-blue-700 border-blue-200", stock: 15, sku: "ELE-002", barcode: "10002" },
  { id: 3, name: "Organic Green Tea", price: 12.00, category: "food", color: "bg-emerald-100 text-emerald-700 border-emerald-200", stock: 50, sku: "FOD-003", barcode: "10003" },
  { id: 4, name: "Cotton Crewneck Tee", price: 24.99, category: "clothing", color: "bg-slate-100 text-slate-700 border-slate-200", stock: 120, sku: "CLO-004", barcode: "10004" },
  { id: 5, name: "Smart Watch Series 5", price: 299.00, category: "electronics", color: "bg-zinc-100 text-zinc-700 border-zinc-200", stock: 8, sku: "ELE-005", barcode: "10005" },
  { id: 6, name: "Denim Jacket Classic", price: 89.99, category: "clothing", color: "bg-indigo-100 text-indigo-700 border-indigo-200", stock: 20, sku: "CLO-006", barcode: "10006" },
  { id: 7, name: "Vegan Protein Bar", price: 3.50, category: "food", color: "bg-lime-100 text-lime-700 border-lime-200", stock: 200, sku: "FOD-007", barcode: "10007" },
  { id: 8, name: "USB-C Fast Charger", price: 19.99, category: "electronics", color: "bg-neutral-100 text-neutral-700 border-neutral-200", stock: 85, sku: "ELE-008", barcode: "10008" },
  { id: 9, name: "Reusable Water Bottle", price: 22.00, category: "other", color: "bg-cyan-100 text-cyan-700 border-cyan-200", stock: 45, sku: "OTH-009", barcode: "10009" },
  { id: 10, name: "Organic Avocados (3-pack)", price: 5.99, category: "food", color: "bg-green-100 text-green-700 border-green-200", stock: 40, sku: "FOD-010", barcode: "10010" },
  { id: 11, name: "Mechanical Keyboard", price: 145.00, category: "electronics", color: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200", stock: 12, sku: "ELE-011", barcode: "10011" },
  { id: 12, name: "Canvas Tote Bag", price: 14.50, category: "clothing", color: "bg-orange-100 text-orange-700 border-orange-200", stock: 65, sku: "CLO-012", barcode: "10012" },
];

const mockCustomers = [
  { id: 1, name: "Walk-in Customer", phone: "" },
  { id: 2, name: "Sarah Jenkins", phone: "+1 234-567-8900", points: 150 },
  { id: 3, name: "Michael Chang", phone: "+1 987-654-3210", points: 45 },
];

export default function POSPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [barcodeInput, setBarcodeInput] = useState("");
  const [cart, setCart] = useState<{ product: typeof mockProducts[0]; qty: number }[]>([]);
  const [customers, setCustomers] = useState(mockCustomers);
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);
  const [isCustomerDropdownOpen, setIsCustomerDropdownOpen] = useState(false);
  const [isAddCustomerModalOpen, setIsAddCustomerModalOpen] = useState(false);
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [newCustomerForm, setNewCustomerForm] = useState({ name: "", phone: "", email: "" });
  const [currentTime, setCurrentTime] = useState("");
  
  const orderNumber = "8492";
  
  const barcodeRef = useRef<HTMLInputElement>(null);
  const cartEndRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCustomerDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Time ticker for POS header
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll cart to bottom when new items are added
  useEffect(() => {
    cartEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [cart.length]);

  const filteredProducts = mockProducts.filter(p => 
    (activeCategory === "all" || p.category === activeCategory) &&
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.sku.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const addToCart = (product: typeof mockProducts[0]) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { product, qty: 1 }];
    });
  };

  const handleBarcodeSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!barcodeInput.trim()) return;
    
    const product = mockProducts.find(p => p.barcode === barcodeInput.trim() || p.sku === barcodeInput.trim());
    if (product) {
      addToCart(product);
      setBarcodeInput(""); 
    } else {
      alert("Product not found for barcode: " + barcodeInput);
      setBarcodeInput("");
    }
    barcodeRef.current?.focus();
  };

  const handleAddCustomer = (e: FormEvent) => {
    e.preventDefault();
    if (!newCustomerForm.name.trim()) return;
    
    const newCustomer = {
      id: Date.now(),
      name: newCustomerForm.name,
      phone: newCustomerForm.phone,
      points: 0
    };
    
    setCustomers(prev => [...prev, newCustomer]);
    setSelectedCustomer(newCustomer);
    setIsAddCustomerModalOpen(false);
    setIsCustomerDropdownOpen(false);
    setNewCustomerForm({ name: "", phone: "", email: "" });
  };

  const updateQty = (id: number, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.product.id === id) {
          const newQty = Math.max(0, item.qty + delta);
          return { ...item, qty: newQty };
        }
        return item;
      }).filter(item => item.qty > 0);
    });
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-tenant-secondary/10 font-sans text-tenant-text">
      
      {/* POS Dedicated Top Header */}
      <header className="h-14 bg-tenant-bg border-b border-tenant-muted/20 flex items-center justify-between px-4 shrink-0 shadow-sm z-20">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-tenant-muted hover:text-tenant-text transition-colors font-bold text-sm bg-tenant-secondary/50 px-3 py-1.5 rounded-lg border border-tenant-muted/10">
            <ArrowLeft className="h-4 w-4" /> Exit POS
          </Link>
          <div className="h-6 w-px bg-tenant-muted/20"></div>
          <div className="flex items-center gap-2 text-tenant-primary">
            <Store className="h-5 w-5" />
            <span className="font-extrabold tracking-tight">SuperShop Terminal 1</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-tenant-muted font-bold text-sm bg-tenant-secondary/50 px-3 py-1.5 rounded-lg">
            <Clock className="h-4 w-4" /> {currentTime}
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs font-bold text-tenant-text">Store Owner</p>
              <p className="text-[10px] font-semibold text-tenant-muted uppercase tracking-wider">Cashier</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-tenant-primary/20 border-2 border-tenant-primary flex items-center justify-center text-tenant-primary font-bold text-xs">
              SO
            </div>
          </div>
        </div>
      </header>

      {/* Main Split Screen */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Pane: Order Ticket (Strict width, dense layout) */}
        <div className="w-full lg:w-[45%] xl:w-[50%] shrink-0 bg-tenant-bg border-r border-tenant-muted/20 flex flex-col z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
          
          {/* Top Actions: Barcode & Customer */}
          <div className="p-3 border-b border-tenant-muted/20 bg-tenant-secondary/10 flex flex-col sm:flex-row gap-3 shrink-0">
            {/* Barcode Scanner Input */}
            <form onSubmit={handleBarcodeSubmit} className="relative flex-1">
              <Barcode className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-tenant-primary" />
              <input 
                ref={barcodeRef}
                type="text" 
                autoFocus
                placeholder="Scan Barcode / SKU..." 
                value={barcodeInput}
                onChange={(e) => setBarcodeInput(e.target.value)}
                className="w-full h-12 pl-10 pr-16 rounded-lg border-2 border-tenant-primary/30 bg-tenant-bg focus:outline-none focus:border-tenant-primary focus:ring-2 focus:ring-tenant-primary/20 transition-all text-base font-bold text-tenant-text shadow-sm"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-tenant-primary/10 text-tenant-primary hover:bg-tenant-primary hover:text-tenant-primary-foreground px-3 py-1.5 rounded text-xs font-bold transition-colors">
                Add
              </button>
            </form>

            {/* Customer Selection */}
            <div ref={dropdownRef} className="relative w-full sm:w-48 xl:w-56 shrink-0">
              <button 
                onClick={() => setIsCustomerDropdownOpen(!isCustomerDropdownOpen)}
                className="w-full flex items-center justify-between bg-tenant-bg border border-tenant-muted/20 rounded-lg px-3 py-2.5 hover:border-tenant-primary transition-colors shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <User className={cn("h-4 w-4", selectedCustomer.id === 1 ? "text-tenant-muted" : "text-tenant-primary")} />
                  <div className="text-left flex flex-col">
                    <span className="text-sm font-bold leading-tight">{selectedCustomer.name}</span>
                    {selectedCustomer.phone && <span className="text-[10px] font-semibold text-tenant-muted">{selectedCustomer.phone}</span>}
                  </div>
                </div>
                <ChevronDown className="h-4 w-4 text-tenant-muted" />
              </button>
              
              {isCustomerDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-tenant-bg border border-tenant-muted/20 rounded-lg shadow-xl z-50 overflow-hidden">
                  <div className="p-2 border-b border-tenant-muted/10">
                    <button 
                      onClick={() => setIsAddCustomerModalOpen(true)}
                      className="w-full flex items-center gap-2 justify-center py-2 text-sm font-bold text-tenant-primary hover:bg-tenant-primary/10 rounded transition-colors"
                    >
                      <UserPlus className="h-4 w-4" /> New Customer
                    </button>
                  </div>
                  {customers.map(cust => (
                    <button 
                      key={cust.id}
                      onClick={() => { setSelectedCustomer(cust); setIsCustomerDropdownOpen(false); }}
                      className="w-full text-left px-4 py-3 hover:bg-tenant-secondary transition-colors border-b last:border-0 border-tenant-muted/10"
                    >
                      <p className="text-sm font-bold text-tenant-text">{cust.name}</p>
                      {cust.phone && <p className="text-xs text-tenant-muted">{cust.phone}</p>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Ticket Header */}
          <div className="px-4 py-2 border-b border-tenant-muted/20 bg-tenant-secondary/30 flex items-center justify-between shrink-0 text-xs font-bold text-tenant-muted uppercase tracking-wider">
            <span>Item (Order #{orderNumber})</span>
            <div className="flex gap-12 mr-2">
              <span>Qty</span>
              <span>Price</span>
            </div>
          </div>

          {/* Cart Items List (High Density) */}
          <div className="flex-1 overflow-y-auto bg-tenant-bg">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-tenant-muted opacity-50 space-y-3">
                <ShoppingCart className="h-12 w-12" />
                <p className="font-bold">Ticket is empty</p>
              </div>
            ) : (
              <ul className="flex flex-col">
                {cart.map((item) => (
                  <li key={item.product.id} className="flex items-center justify-between p-3 border-b border-tenant-muted/10 hover:bg-tenant-secondary/20 transition-colors group">
                    <div className="flex-1 min-w-0 pr-4">
                      <h4 className="font-bold text-sm text-tenant-text truncate">{item.product.name}</h4>
                      <div className="text-[11px] text-tenant-muted mt-0.5">{item.product.sku}</div>
                    </div>
                    
                    <div className="flex items-center gap-4 shrink-0">
                      {/* Qty */}
                      <div className="flex items-center bg-tenant-secondary rounded border border-tenant-muted/20 shadow-sm h-8">
                        <button 
                          onClick={() => updateQty(item.product.id, -1)}
                          className="h-full px-2 flex items-center justify-center hover:bg-tenant-muted/10 transition-colors text-tenant-text"
                        >
                          {item.qty === 1 ? <Trash2 className="h-3.5 w-3.5 text-rose-500" /> : <Minus className="h-3.5 w-3.5" />}
                        </button>
                        <span className="w-6 text-center font-bold text-sm">{item.qty}</span>
                        <button 
                          onClick={() => updateQty(item.product.id, 1)}
                          className="h-full px-2 flex items-center justify-center hover:bg-tenant-muted/10 transition-colors text-tenant-text"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      
                      {/* Price */}
                      <div className="w-16 text-right font-extrabold text-sm text-tenant-text">
                        ${(item.product.price * item.qty).toFixed(2)}
                      </div>
                    </div>
                  </li>
                ))}
                <div ref={cartEndRef} className="h-1" />
              </ul>
            )}
          </div>

          {/* Ticket Footer / Checkout Actions */}
          <div className="border-t-2 border-dashed border-tenant-muted/30 bg-tenant-bg shrink-0">
            <div className="p-3 space-y-1">
              <div className="flex justify-between text-xs font-semibold text-tenant-muted">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs font-semibold text-tenant-muted">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs font-bold text-emerald-600 cursor-pointer hover:bg-emerald-50 p-1 -mx-1 rounded transition-colors">
                <span className="flex items-center gap-1"><Tag className="h-3 w-3" /> Add Discount</span>
                <span>$0.00</span>
              </div>
              <div className="h-px w-full bg-tenant-muted/20 my-1.5"></div>
              <div className="flex justify-between items-end">
                <span className="text-base font-black text-tenant-text">Total</span>
                <span className="text-3xl font-black text-tenant-primary tracking-tighter">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="p-3 pt-0 grid grid-cols-4 gap-2">
              <button 
                disabled={cart.length === 0}
                className="col-span-1 py-3 bg-tenant-secondary border border-tenant-muted/20 hover:border-tenant-primary hover:bg-tenant-primary/5 rounded-lg font-bold text-xs flex flex-col items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
              >
                <Banknote className="h-5 w-5 text-tenant-muted" />
                Cash
              </button>
              <button 
                disabled={cart.length === 0}
                className="col-span-1 py-3 bg-tenant-secondary border border-tenant-muted/20 hover:border-tenant-primary hover:bg-tenant-primary/5 rounded-lg font-bold text-xs flex flex-col items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
              >
                <Smartphone className="h-5 w-5 text-tenant-muted" />
                Mobile
              </button>
              <button 
                disabled={cart.length === 0}
                className="col-span-1 py-3 bg-tenant-secondary border border-tenant-muted/20 hover:border-tenant-primary hover:bg-tenant-primary/5 rounded-lg font-bold text-xs flex flex-col items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
              >
                <CreditCard className="h-5 w-5 text-tenant-muted" />
                Card
              </button>
              <button 
                disabled={cart.length === 0}
                className="col-span-1 py-3 bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100 rounded-lg font-bold text-xs flex flex-col items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
                onClick={() => setCart([])}
              >
                <Trash2 className="h-5 w-5" />
                Void
              </button>
              
              <button 
                disabled={cart.length === 0}
                onClick={() => setIsInvoiceOpen(true)}
                className="col-span-4 mt-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-black text-lg flex items-center justify-center gap-3 transition-all disabled:opacity-50 shadow-md active:scale-[0.98]"
              >
                Pay ${total.toFixed(2)}
              </button>
            </div>
          </div>
        </div>
        
        {/* Right Pane: Products Catalog */}
        <div className="flex-1 flex flex-col min-w-0 bg-tenant-secondary/10">
          
          {/* Catalog Tools */}
          <div className="px-6 py-4 border-b border-tenant-muted/10 bg-tenant-bg shrink-0 flex flex-col sm:flex-row gap-4 justify-between items-center shadow-sm z-10">
            {/* Categories Hover Dropdown */}
            <div className="relative group shrink-0">
              <button className="flex items-center justify-between w-48 px-4 py-2 rounded-lg border border-tenant-muted/20 bg-tenant-bg shadow-sm font-bold text-sm text-tenant-text hover:border-tenant-primary/50 transition-colors">
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-tenant-primary" />
                  {categories.find(c => c.id === activeCategory)?.name || "All Items"}
                </div>
                <ChevronDown className="h-4 w-4 text-tenant-muted" />
              </button>
              
              <div className="absolute top-full left-0 mt-1 w-48 bg-tenant-bg border border-tenant-muted/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "w-full text-left flex items-center gap-2 px-4 py-3 hover:bg-tenant-secondary transition-colors border-b last:border-0 border-tenant-muted/10 font-bold text-sm",
                      activeCategory === cat.id ? "text-tenant-primary bg-tenant-primary/5" : "text-tenant-text"
                    )}
                  >
                    <cat.icon className="h-4 w-4" />
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* General Search */}
            <div className="relative w-full sm:w-64 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-tenant-muted" />
              <input 
                type="text" 
                placeholder="Search catalog..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-9 pr-4 rounded-full border border-tenant-muted/20 bg-tenant-bg focus:outline-none focus:border-tenant-primary focus:ring-2 focus:ring-tenant-primary/20 transition-all text-sm font-semibold shadow-inner"
              />
            </div>
          </div>

          {/* High Density Product Grid */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4">
              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => addToCart(product)}
                  className="group flex flex-col text-left bg-tenant-bg border border-tenant-muted/20 rounded-xl p-3 hover:border-tenant-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
                >
                  {/* Image Placeholder */}
                  <div className={cn("w-full aspect-square rounded-lg border flex items-center justify-center mb-2 shadow-sm transition-transform", product.color)}>
                    <span className="font-extrabold text-2xl opacity-40 mix-blend-multiply dark:mix-blend-screen">{product.name.charAt(0)}</span>
                  </div>
                  
                  <h3 className="font-bold text-xs sm:text-sm text-tenant-text leading-tight line-clamp-2 mb-1 group-hover:text-tenant-primary">{product.name}</h3>
                  <div className="text-[10px] text-tenant-muted font-bold mb-1 truncate">{product.sku}</div>
                  
                  <div className="mt-auto flex items-end justify-between w-full pt-1">
                    <span className="font-extrabold text-sm sm:text-base text-tenant-primary">${product.price.toFixed(2)}</span>
                  </div>
                </button>
              ))}
              {filteredProducts.length === 0 && (
                <div className="col-span-full py-20 text-center flex flex-col items-center justify-center opacity-40">
                  <Search className="h-16 w-16 text-tenant-muted mb-4" />
                  <p className="text-tenant-text font-bold text-xl">No products match</p>
                  <p className="text-tenant-muted text-sm mt-1">Clear filters to see all catalog items.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add Customer Modal Overlay */}
      {isAddCustomerModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-tenant-bg w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-tenant-muted/20 animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-tenant-muted/10 bg-tenant-secondary/30">
              <h3 className="font-extrabold text-lg text-tenant-text">Add New Customer</h3>
            </div>
            
            <form onSubmit={handleAddCustomer} className="p-6 space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-tenant-muted uppercase tracking-wider">Full Name <span className="text-rose-500">*</span></label>
                <input 
                  type="text" 
                  autoFocus
                  required
                  placeholder="e.g. Jane Doe"
                  value={newCustomerForm.name}
                  onChange={(e) => setNewCustomerForm({...newCustomerForm, name: e.target.value})}
                  className="w-full h-11 px-4 rounded-xl border border-tenant-muted/20 bg-tenant-bg focus:outline-none focus:border-tenant-primary focus:ring-2 focus:ring-tenant-primary/20 transition-all font-semibold text-tenant-text placeholder:text-tenant-muted/50 shadow-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-tenant-muted uppercase tracking-wider">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="e.g. +1 234 567 890"
                  value={newCustomerForm.phone}
                  onChange={(e) => setNewCustomerForm({...newCustomerForm, phone: e.target.value})}
                  className="w-full h-11 px-4 rounded-xl border border-tenant-muted/20 bg-tenant-bg focus:outline-none focus:border-tenant-primary focus:ring-2 focus:ring-tenant-primary/20 transition-all font-semibold text-tenant-text placeholder:text-tenant-muted/50 shadow-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-tenant-muted uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  placeholder="e.g. jane@example.com"
                  value={newCustomerForm.email}
                  onChange={(e) => setNewCustomerForm({...newCustomerForm, email: e.target.value})}
                  className="w-full h-11 px-4 rounded-xl border border-tenant-muted/20 bg-tenant-bg focus:outline-none focus:border-tenant-primary focus:ring-2 focus:ring-tenant-primary/20 transition-all font-semibold text-tenant-text placeholder:text-tenant-muted/50 shadow-sm"
                />
              </div>

              <div className="pt-4 flex gap-3">
                <button 
                  type="button"
                  onClick={() => setIsAddCustomerModalOpen(false)}
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-tenant-text bg-tenant-secondary border border-tenant-muted/20 hover:bg-tenant-muted/10 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-tenant-primary-foreground bg-tenant-primary hover:bg-tenant-primary/90 transition-all shadow-md active:scale-95"
                >
                  Save Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Invoice Generator Modal */}
      {isInvoiceOpen && (
        <InvoiceReceipt 
          cart={cart}
          subtotal={subtotal}
          tax={tax}
          total={total}
          customer={selectedCustomer}
          orderNumber={orderNumber}
          onClose={() => setIsInvoiceOpen(false)}
          onComplete={() => {
            setCart([]);
            setIsInvoiceOpen(false);
          }}
        />
      )}
    </div>
  );
}
