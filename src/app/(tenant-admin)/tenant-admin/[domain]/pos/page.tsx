"use client";

import { useState } from "react";
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
  MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data
const categories = [
  { id: "all", name: "All Items", icon: Tag },
  { id: "food", name: "Food & Drinks", icon: Coffee },
  { id: "electronics", name: "Electronics", icon: MonitorSmartphone },
  { id: "clothing", name: "Apparel", icon: Shirt },
  { id: "other", name: "Miscellaneous", icon: MoreHorizontal },
];

const mockProducts = [
  { id: 1, name: "Artisan Coffee Beans", price: 18.99, category: "food", color: "bg-amber-100 text-amber-700", stock: 24 },
  { id: 2, name: "Wireless Earbuds Pro", price: 129.50, category: "electronics", color: "bg-blue-100 text-blue-700", stock: 15 },
  { id: 3, name: "Organic Green Tea", price: 12.00, category: "food", color: "bg-emerald-100 text-emerald-700", stock: 50 },
  { id: 4, name: "Cotton Crewneck Tee", price: 24.99, category: "clothing", color: "bg-slate-100 text-slate-700", stock: 120 },
  { id: 5, name: "Smart Watch Series 5", price: 299.00, category: "electronics", color: "bg-zinc-100 text-zinc-700", stock: 8 },
  { id: 6, name: "Denim Jacket Classic", price: 89.99, category: "clothing", color: "bg-indigo-100 text-indigo-700", stock: 20 },
  { id: 7, name: "Vegan Protein Bar", price: 3.50, category: "food", color: "bg-lime-100 text-lime-700", stock: 200 },
  { id: 8, name: "USB-C Fast Charger", price: 19.99, category: "electronics", color: "bg-neutral-100 text-neutral-700", stock: 85 },
  { id: 9, name: "Reusable Water Bottle", price: 22.00, category: "other", color: "bg-cyan-100 text-cyan-700", stock: 45 },
];

export default function POSPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<{ product: typeof mockProducts[0]; qty: number }[]>([]);

  const filteredProducts = mockProducts.filter(p => 
    (activeCategory === "all" || p.category === activeCategory) &&
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
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
    <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-8rem)] -mt-4">
      
      {/* Left Pane: Products */}
      <div className="flex-1 flex flex-col min-w-0 bg-tenant-bg border border-tenant-muted/20 rounded-3xl shadow-sm overflow-hidden relative">
        {/* Decorative Top Gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tenant-primary via-tenant-accent to-tenant-primary opacity-50"></div>
        
        {/* Header & Search */}
        <div className="p-6 pb-4 border-b border-tenant-muted/10 shrink-0">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-2xl font-extrabold text-tenant-text tracking-tight">Point of Sale</h1>
              <p className="text-sm font-medium text-tenant-muted mt-1">Quick checkout terminal</p>
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-tenant-muted" />
              <input 
                type="text" 
                placeholder="Search products (F3)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-xl border border-tenant-muted/20 bg-tenant-secondary/50 focus:outline-none focus:border-tenant-primary focus:ring-1 focus:ring-tenant-primary transition-all text-sm font-semibold text-tenant-text placeholder:text-tenant-muted/70"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-200 border",
                  activeCategory === cat.id
                    ? "bg-tenant-primary text-tenant-primary-foreground border-tenant-primary shadow-md transform scale-[1.02]"
                    : "bg-tenant-secondary/30 text-tenant-muted border-transparent hover:bg-tenant-secondary hover:text-tenant-text"
                )}
              >
                <cat.icon className="h-4 w-4" />
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 overflow-y-auto p-6 bg-tenant-secondary/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => addToCart(product)}
                className="group flex flex-col text-left bg-tenant-bg border border-tenant-muted/10 rounded-2xl p-4 hover:border-tenant-primary/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tenant-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Image Placeholder */}
                <div className={cn("w-full aspect-square rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105 duration-500", product.color)}>
                  <span className="font-extrabold text-2xl opacity-50">{product.name.charAt(0)}</span>
                </div>
                
                <h3 className="font-bold text-sm text-tenant-text line-clamp-2 mb-1">{product.name}</h3>
                <div className="mt-auto flex items-end justify-between w-full">
                  <span className="font-extrabold text-lg text-tenant-primary">${product.price.toFixed(2)}</span>
                  <span className="text-[10px] font-bold text-tenant-muted uppercase tracking-wider bg-tenant-secondary px-2 py-0.5 rounded-full">
                    {product.stock} left
                  </span>
                </div>
              </button>
            ))}
            {filteredProducts.length === 0 && (
              <div className="col-span-full py-12 text-center flex flex-col items-center justify-center opacity-50">
                <Search className="h-12 w-12 text-tenant-muted mb-4" />
                <p className="text-tenant-text font-bold">No products found</p>
                <p className="text-tenant-muted text-sm">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Pane: Cart */}
      <div className="w-full lg:w-96 shrink-0 bg-tenant-bg border border-tenant-muted/20 rounded-3xl shadow-sm flex flex-col overflow-hidden">
        {/* Cart Header */}
        <div className="p-6 border-b border-tenant-muted/10 bg-tenant-secondary/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-tenant-primary/10 rounded-xl flex items-center justify-center text-tenant-primary">
              <ShoppingCart className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-extrabold text-lg text-tenant-text">Current Order</h2>
              <p className="text-xs font-bold text-tenant-muted">Order #{(Math.random() * 10000).toFixed(0).padStart(4, '0')}</p>
            </div>
          </div>
          {cart.length > 0 && (
            <button 
              onClick={() => setCart([])}
              className="text-xs font-bold text-rose-500 hover:text-rose-600 px-3 py-1.5 rounded-lg hover:bg-rose-50 transition-colors"
            >
              Clear
            </button>
          )}
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-tenant-muted opacity-50 space-y-4">
              <ShoppingCart className="h-16 w-16" />
              <p className="font-bold">Cart is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.product.id} className="flex items-center gap-3 p-3 bg-tenant-bg border border-tenant-muted/10 rounded-2xl shadow-sm group">
                <div className={cn("h-12 w-12 rounded-lg flex items-center justify-center shrink-0", item.product.color)}>
                  <span className="font-bold text-sm opacity-50">{item.product.name.charAt(0)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm text-tenant-text truncate">{item.product.name}</h4>
                  <div className="text-tenant-primary font-bold text-sm">${item.product.price.toFixed(2)}</div>
                </div>
                
                {/* Quantity Controls */}
                <div className="flex items-center bg-tenant-secondary rounded-lg border border-tenant-muted/10 p-0.5">
                  <button 
                    onClick={() => updateQty(item.product.id, -1)}
                    className="h-7 w-7 flex items-center justify-center text-tenant-text hover:bg-tenant-bg hover:shadow-sm rounded-md transition-all"
                  >
                    {item.qty === 1 ? <Trash2 className="h-3.5 w-3.5 text-rose-500" /> : <Minus className="h-3.5 w-3.5" />}
                  </button>
                  <span className="w-8 text-center font-bold text-sm text-tenant-text">{item.qty}</span>
                  <button 
                    onClick={() => updateQty(item.product.id, 1)}
                    className="h-7 w-7 flex items-center justify-center text-tenant-text hover:bg-tenant-bg hover:shadow-sm rounded-md transition-all"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Summary & Checkout */}
        <div className="p-6 border-t border-tenant-muted/10 bg-tenant-secondary/30 shrink-0">
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm font-bold text-tenant-muted">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-tenant-muted">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="h-px w-full bg-tenant-muted/20 my-2"></div>
            <div className="flex justify-between items-end">
              <span className="text-base font-extrabold text-tenant-text">Total</span>
              <span className="text-3xl font-black text-tenant-primary tracking-tight">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <button 
            disabled={cart.length === 0}
            className="w-full py-4 px-6 bg-tenant-primary hover:bg-tenant-primary/90 text-tenant-primary-foreground rounded-2xl font-extrabold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:pointer-events-none disabled:transform-none disabled:shadow-none"
          >
            <CreditCard className="h-6 w-6" />
            Checkout & Pay
          </button>
        </div>
      </div>
      
    </div>
  );
}
