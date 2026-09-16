"use client";

import { useState, useRef, FormEvent } from "react";
import { 
  Search, 
  Plus, 
  Trash2, 
  Barcode,
  Truck,
  Calendar,
  FileText,
  Save,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data
const mockSuppliers = [
  { id: 1, name: "Global Tech Distributors" },
  { id: 2, name: "Fresh Farm Organics" },
  { id: 3, name: "Apparel Wholesale Co." },
];

const mockProducts = [
  { id: 1, name: "Artisan Coffee Beans", stock: 24, sku: "FOD-001", barcode: "10001", lastCost: 12.50 },
  { id: 2, name: "Wireless Earbuds Pro", stock: 15, sku: "ELE-002", barcode: "10002", lastCost: 85.00 },
  { id: 3, name: "Organic Green Tea", stock: 50, sku: "FOD-003", barcode: "10003", lastCost: 6.00 },
  { id: 4, name: "Cotton Crewneck Tee", stock: 120, sku: "CLO-004", barcode: "10004", lastCost: 10.00 },
];

export default function PurchasePage() {
  const [selectedSupplier, setSelectedSupplier] = useState(mockSuppliers[0].id.toString());
  const [purchaseDate, setPurchaseDate] = useState(new Date().toISOString().split('T')[0]);
  const [referenceNo, setReferenceNo] = useState("");
  
  const [barcodeInput, setBarcodeInput] = useState("");
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const barcodeRef = useRef<HTMLInputElement>(null);
  
  // The purchase order list
  const [purchaseList, setPurchaseList] = useState<{
    product: typeof mockProducts[0];
    qty: number;
    unitCost: number;
  }[]>([]);

  const [shippingCost, setShippingCost] = useState(0);
  const [otherCharges, setOtherCharges] = useState(0);

  const addProductToPurchase = (product: typeof mockProducts[0]) => {
    setPurchaseList(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, qty: item.qty + 1 } 
            : item
        );
      }
      return [...prev, { product, qty: 1, unitCost: product.lastCost }];
    });
  };

  const handleBarcodeSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!barcodeInput.trim()) return;
    
    // First try exact barcode match, then exact sku match
    const product = mockProducts.find(p => p.barcode === barcodeInput.trim() || p.sku.toLowerCase() === barcodeInput.trim().toLowerCase());
    if (product) {
      addProductToPurchase(product);
      setBarcodeInput(""); 
      setIsSearchDropdownOpen(false);
    } else {
      alert("Product not found for exact match: " + barcodeInput);
    }
    barcodeRef.current?.focus();
  };

  // Filter products for the dropdown based on input
  const searchResults = mockProducts.filter(p => 
    barcodeInput.trim() !== "" && (
      p.name.toLowerCase().includes(barcodeInput.toLowerCase()) || 
      p.sku.toLowerCase().includes(barcodeInput.toLowerCase()) ||
      p.barcode.includes(barcodeInput)
    )
  );

  const updateItemQty = (id: number, newQty: number) => {
    if (newQty < 1) return;
    setPurchaseList(prev => prev.map(item => 
      item.product.id === id ? { ...item, qty: newQty } : item
    ));
  };

  const updateItemCost = (id: number, newCost: number) => {
    if (newCost < 0) return;
    setPurchaseList(prev => prev.map(item => 
      item.product.id === id ? { ...item, unitCost: newCost } : item
    ));
  };

  const removeItem = (id: number) => {
    setPurchaseList(prev => prev.filter(item => item.product.id !== id));
  };

  // Calculations
  const subtotal = purchaseList.reduce((sum, item) => sum + (item.unitCost * item.qty), 0);
  const grandTotal = subtotal + shippingCost + otherCharges;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-tenant-text tracking-tight">Create Purchase Order</h1>
          <p className="text-sm font-semibold text-tenant-muted">Receive goods and update inventory stock.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-xl font-bold text-sm text-tenant-text bg-tenant-secondary border border-tenant-muted/20 hover:bg-tenant-muted/10 transition-colors flex items-center gap-2">
            <Save className="h-4 w-4" /> Save as Draft
          </button>
          <button 
            disabled={purchaseList.length === 0}
            className="px-5 py-2 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 transition-colors flex items-center gap-2 shadow-sm"
          >
            <CheckCircle2 className="h-4 w-4" /> Confirm Purchase
          </button>
        </div>
      </div>

      {/* Top Details Card */}
      <div className="bg-tenant-bg border border-tenant-muted/20 rounded-2xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-tenant-muted uppercase tracking-wider flex items-center gap-1">
            <Truck className="h-3.5 w-3.5" /> Supplier
          </label>
          <select 
            value={selectedSupplier}
            onChange={(e) => setSelectedSupplier(e.target.value)}
            className="w-full h-11 px-4 rounded-xl border border-tenant-muted/20 bg-tenant-bg focus:outline-none focus:border-tenant-primary focus:ring-2 focus:ring-tenant-primary/20 transition-all font-semibold text-tenant-text"
          >
            {mockSuppliers.map(sup => (
              <option key={sup.id} value={sup.id}>{sup.name}</option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-tenant-muted uppercase tracking-wider flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" /> Purchase Date
          </label>
          <input 
            type="date" 
            value={purchaseDate}
            onChange={(e) => setPurchaseDate(e.target.value)}
            className="w-full h-11 px-4 rounded-xl border border-tenant-muted/20 bg-tenant-bg focus:outline-none focus:border-tenant-primary focus:ring-2 focus:ring-tenant-primary/20 transition-all font-semibold text-tenant-text"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-tenant-muted uppercase tracking-wider flex items-center gap-1">
            <FileText className="h-3.5 w-3.5" /> Reference / Invoice No.
          </label>
          <input 
            type="text" 
            placeholder="e.g. INV-2023-001"
            value={referenceNo}
            onChange={(e) => setReferenceNo(e.target.value)}
            className="w-full h-11 px-4 rounded-xl border border-tenant-muted/20 bg-tenant-bg focus:outline-none focus:border-tenant-primary focus:ring-2 focus:ring-tenant-primary/20 transition-all font-semibold text-tenant-text placeholder:text-tenant-muted/50"
          />
        </div>

      </div>

      {/* Main Order Table Card */}
      <div className="bg-tenant-bg border border-tenant-muted/20 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        
        {/* Scanner Bar */}
        <div className="p-4 border-b border-tenant-muted/10 bg-tenant-secondary/30 flex items-center gap-4">
          <form onSubmit={handleBarcodeSubmit} className="relative w-full max-w-md">
            <Barcode className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-tenant-primary" />
            <input 
              ref={barcodeRef}
              type="text" 
              placeholder="Scan Barcode or Search by Name/SKU..." 
              value={barcodeInput}
              onFocus={() => setIsSearchDropdownOpen(true)}
              onBlur={() => setTimeout(() => setIsSearchDropdownOpen(false), 200)}
              onChange={(e) => {
                setBarcodeInput(e.target.value);
                setIsSearchDropdownOpen(true);
              }}
              className="w-full h-11 pl-10 pr-4 rounded-xl border border-tenant-muted/20 bg-tenant-bg focus:outline-none focus:border-tenant-primary focus:ring-2 focus:ring-tenant-primary/20 transition-all text-sm font-bold text-tenant-text shadow-sm placeholder:text-tenant-muted/60 placeholder:font-semibold"
            />
            
            {/* Search Dropdown */}
            {isSearchDropdownOpen && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-tenant-bg border border-tenant-muted/20 rounded-xl shadow-xl z-50 max-h-64 overflow-y-auto overflow-x-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                {searchResults.map(product => (
                  <button
                    key={product.id}
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault(); // prevent input blur
                      addProductToPurchase(product);
                      setBarcodeInput("");
                      setIsSearchDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 border-b last:border-0 border-tenant-muted/10 hover:bg-tenant-secondary transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <div className="font-bold text-sm text-tenant-text line-clamp-1">{product.name}</div>
                      <div className="font-extrabold text-xs text-tenant-primary">${product.lastCost.toFixed(2)}</div>
                    </div>
                    <div className="text-[11px] font-semibold text-tenant-muted mt-1 flex justify-between">
                      <span>SKU: {product.sku}</span>
                      <span>Stock: {product.stock}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
            {isSearchDropdownOpen && barcodeInput.length > 0 && searchResults.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-tenant-bg border border-tenant-muted/20 rounded-xl shadow-xl z-50 p-4 text-center text-sm font-bold text-tenant-muted">
                No matching products found.
              </div>
            )}
          </form>
          <div className="text-xs font-semibold text-tenant-muted hidden sm:block">
            Pro tip: Use a physical barcode scanner for rapid entry.
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto min-h-[300px]">
          <table className="w-full text-left">
            <thead className="bg-tenant-secondary/50 border-b border-tenant-muted/10">
              <tr>
                <th className="px-6 py-3 text-xs font-bold text-tenant-muted uppercase tracking-wider">Product Details</th>
                <th className="px-6 py-3 text-xs font-bold text-tenant-muted uppercase tracking-wider w-24 text-center">Stock</th>
                <th className="px-6 py-3 text-xs font-bold text-tenant-muted uppercase tracking-wider w-32">Unit Cost ($)</th>
                <th className="px-6 py-3 text-xs font-bold text-tenant-muted uppercase tracking-wider w-32">Received Qty</th>
                <th className="px-6 py-3 text-xs font-bold text-tenant-muted uppercase tracking-wider w-32 text-right">Subtotal</th>
                <th className="px-6 py-3 text-xs font-bold text-tenant-muted uppercase tracking-wider w-16 text-center"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-tenant-muted/10">
              {purchaseList.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-16 text-center opacity-50">
                    <div className="flex flex-col items-center justify-center space-y-3 text-tenant-muted">
                      <Search className="h-10 w-10" />
                      <p className="font-bold text-lg">No items added yet</p>
                      <p className="text-sm">Scan a barcode or search to start receiving goods.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                purchaseList.map((item) => (
                  <tr key={item.product.id} className="hover:bg-tenant-secondary/10 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-sm text-tenant-text">{item.product.name}</div>
                      <div className="text-xs font-semibold text-tenant-muted mt-0.5">SKU: {item.product.sku} | Barcode: {item.product.barcode}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center px-2 py-1 rounded bg-tenant-secondary text-xs font-bold text-tenant-muted">
                        {item.product.stock}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <input 
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.unitCost === 0 ? '' : item.unitCost}
                        onChange={(e) => updateItemCost(item.product.id, parseFloat(e.target.value) || 0)}
                        className="w-full h-9 px-3 rounded-lg border border-tenant-muted/20 bg-tenant-bg focus:outline-none focus:border-tenant-primary focus:ring-1 focus:ring-tenant-primary/50 text-sm font-bold text-tenant-text"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input 
                        type="number"
                        min="1"
                        value={item.qty === 0 ? '' : item.qty}
                        onChange={(e) => updateItemQty(item.product.id, parseInt(e.target.value) || 0)}
                        className="w-full h-9 px-3 rounded-lg border border-tenant-muted/20 bg-tenant-bg focus:outline-none focus:border-tenant-primary focus:ring-1 focus:ring-tenant-primary/50 text-sm font-bold text-tenant-text"
                      />
                    </td>
                    <td className="px-6 py-4 text-right font-extrabold text-sm text-tenant-text">
                      ${(item.unitCost * item.qty).toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button 
                        onClick={() => removeItem(item.product.id)}
                        className="p-1.5 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Summary & Footer */}
      {purchaseList.length > 0 && (
        <div className="flex justify-end">
          <div className="w-full md:w-96 bg-tenant-bg border border-tenant-muted/20 rounded-2xl shadow-sm p-6 space-y-4">
            
            <div className="flex justify-between items-center text-sm font-semibold text-tenant-muted">
              <span>Subtotal</span>
              <span className="text-tenant-text font-bold">${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between items-center text-sm font-semibold text-tenant-muted">
              <span>Shipping Cost</span>
              <div className="w-24 relative">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-tenant-muted">$</span>
                <input 
                  type="number"
                  min="0"
                  step="0.01"
                  value={shippingCost === 0 ? '' : shippingCost}
                  onChange={(e) => setShippingCost(parseFloat(e.target.value) || 0)}
                  className="w-full h-8 pl-6 pr-2 rounded-md border border-tenant-muted/20 bg-tenant-bg focus:outline-none focus:border-tenant-primary text-right font-bold"
                />
              </div>
            </div>

            <div className="flex justify-between items-center text-sm font-semibold text-tenant-muted">
              <span>Other Charges</span>
              <div className="w-24 relative">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-tenant-muted">$</span>
                <input 
                  type="number"
                  min="0"
                  step="0.01"
                  value={otherCharges === 0 ? '' : otherCharges}
                  onChange={(e) => setOtherCharges(parseFloat(e.target.value) || 0)}
                  className="w-full h-8 pl-6 pr-2 rounded-md border border-tenant-muted/20 bg-tenant-bg focus:outline-none focus:border-tenant-primary text-right font-bold"
                />
              </div>
            </div>

            <div className="h-px w-full bg-tenant-muted/10 my-4"></div>

            <div className="flex justify-between items-end">
              <span className="text-base font-extrabold text-tenant-text uppercase">Grand Total</span>
              <span className="text-3xl font-black text-tenant-primary">${grandTotal.toFixed(2)}</span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
