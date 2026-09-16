"use client";

import { useEffect, useRef } from "react";
import { Printer, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface InvoiceReceiptProps {
  cart: { product: any; qty: number }[];
  subtotal: number;
  tax: number;
  total: number;
  customer: any;
  orderNumber: string;
  onClose: () => void;
  onComplete: () => void;
}

export function InvoiceReceipt({
  cart,
  subtotal,
  tax,
  total,
  customer,
  orderNumber,
  onClose,
  onComplete
}: InvoiceReceiptProps) {
  
  const handlePrint = () => {
    const receiptElement = document.getElementById("printable-receipt");
    if (!receiptElement) return;
    
    // Clone the receipt to avoid messing with React's DOM
    const clone = receiptElement.cloneNode(true) as HTMLElement;
    
    // Create a temporary wrapper attached directly to the body
    const printWrapper = document.createElement("div");
    printWrapper.id = "print-wrapper";
    printWrapper.style.position = "absolute";
    printWrapper.style.left = "0";
    printWrapper.style.top = "0";
    printWrapper.style.width = "100%";
    printWrapper.style.backgroundColor = "white";
    printWrapper.style.zIndex = "999999";
    printWrapper.appendChild(clone);
    
    document.body.appendChild(printWrapper);
    
    // Add specific CSS to hide everything else during print
    const style = document.createElement("style");
    style.id = "print-style";
    style.innerHTML = `
      @media print {
        body > :not(#print-wrapper) {
          display: none !important;
        }
        #print-wrapper {
          display: block !important;
          position: static !important;
        }
        @page { margin: 0; }
        .no-print { display: none !important; }
      }
    `;
    document.head.appendChild(style);
    
    // Trigger browser print dialog
    window.print();
    
    // Cleanup after print dialog closes
    document.body.removeChild(printWrapper);
    document.head.removeChild(style);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] flex items-center justify-center p-4 animate-in fade-in duration-200">
      
      <div className="bg-tenant-bg w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-tenant-muted/10 bg-tenant-secondary flex justify-between items-center no-print">
          <h2 className="font-extrabold text-lg text-tenant-text">Order Complete</h2>
          <button onClick={onClose} className="p-2 hover:bg-tenant-muted/10 rounded-full text-tenant-muted transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Body: The Receipt Paper */}
        <div className="flex-1 overflow-y-auto p-8 flex justify-center bg-neutral-100 no-print">
          
          {/* Thermal Receipt Simulator */}
          <div 
            id="printable-receipt" 
            className="w-[380px] bg-white text-black p-6 shadow-xl relative overflow-hidden font-mono text-[12px] leading-tight"
          >
            {/* Watermark (Jolchap) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
              <div className="text-8xl font-black transform -rotate-45 tracking-widest">PAID</div>
            </div>

            {/* Receipt Header */}
            <div className="text-center mb-6 relative z-10">
              <h1 className="text-2xl font-black tracking-tighter mb-1 uppercase">SuperShop</h1>
              <p className="text-[10px]">123 Enterprise Avenue, Block C</p>
              <p className="text-[10px]">Dhaka, Bangladesh</p>
              <p className="text-[10px]">Tel: +880 1234 567890</p>
              <div className="border-b-2 border-dashed border-neutral-300 my-4"></div>
              
              <div className="flex justify-between items-end text-[10px] mb-1">
                <span className="text-left">Date: {new Date().toLocaleDateString()}</span>
                <span className="text-right">Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
              <div className="flex justify-between items-end text-[10px]">
                <span className="text-left">Order: #{orderNumber}</span>
                <span className="text-right">Cashier: SO</span>
              </div>
              <div className="flex justify-between items-end text-[10px] mt-1">
                <span className="text-left">Customer:</span>
                <span className="text-right">{customer.name}</span>
              </div>
            </div>

            <div className="border-b-2 border-dashed border-neutral-300 mb-4 relative z-10"></div>

            {/* Items Table */}
            <div className="relative z-10 mb-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-300">
                    <th className="py-1 font-bold w-12">Qty</th>
                    <th className="py-1 font-bold">Item</th>
                    <th className="py-1 font-bold text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, idx) => (
                    <tr key={idx} className="border-b border-neutral-100 last:border-0 align-top">
                      <td className="py-2">{item.qty}x</td>
                      <td className="py-2 pr-2">
                        <div className="font-bold line-clamp-2 leading-tight">{item.product.name}</div>
                        <div className="text-[9px] text-neutral-500 mt-0.5">@{item.product.price.toFixed(2)}</div>
                      </td>
                      <td className="py-2 text-right font-bold">${(item.product.price * item.qty).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-b-2 border-dashed border-neutral-300 mb-4 relative z-10"></div>

            {/* Totals */}
            <div className="space-y-1.5 relative z-10 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-black text-sm pt-2 border-t border-neutral-300 mt-2">
                <span>TOTAL</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center relative z-10 mt-8 mb-4">
              <div className="w-full flex justify-center mb-2">
                {/* Mock Barcode generated via border hacks for visual realism */}
                <div className="h-10 w-48 flex">
                  {[...Array(40)].map((_, i) => (
                    <div key={i} className="h-full bg-black" style={{ width: Math.random() > 0.5 ? '2px' : '4px', marginRight: Math.random() > 0.5 ? '1px' : '3px' }}></div>
                  ))}
                </div>
              </div>
              <p className="text-[10px] mt-2">*** THANK YOU FOR SHOPPING ***</p>
              <p className="text-[10px]">Please come again!</p>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions - Made smaller as requested */}
        <div className="px-6 py-4 border-t border-tenant-muted/10 bg-tenant-bg flex justify-end gap-3 no-print shrink-0">
          <button 
            onClick={onClose}
            className="py-2.5 px-5 rounded-lg font-bold text-sm text-tenant-text bg-tenant-secondary border border-tenant-muted/20 hover:bg-tenant-muted/10 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handlePrint}
            className="py-2.5 px-5 rounded-lg font-bold text-sm text-tenant-primary-foreground bg-tenant-primary hover:bg-tenant-primary/90 flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
          >
            <Printer className="h-4 w-4" />
            Print
          </button>
          <button 
            onClick={onComplete}
            className="py-2.5 px-5 rounded-lg font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
          >
            New Order
          </button>
        </div>

      </div>
    </div>
  );
}
