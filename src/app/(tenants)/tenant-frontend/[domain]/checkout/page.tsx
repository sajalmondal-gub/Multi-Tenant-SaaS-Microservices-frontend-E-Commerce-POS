import Link from "next/link";
import { Lock } from "lucide-react";

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex items-center justify-center gap-2 mb-12">
        <Lock className="h-6 w-6 text-tenant-primary" />
        <h1 className="text-3xl font-extrabold text-tenant-text">Secure Checkout</h1>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Form Details */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-tenant-text mb-4 border-b border-tenant-muted/20 pb-2">1. Shipping Information</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-tenant-bg border border-tenant-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-tenant-primary/50 text-sm font-medium placeholder:text-tenant-muted/70" />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-tenant-bg border border-tenant-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-tenant-primary/50 text-sm font-medium placeholder:text-tenant-muted/70" />
              </div>
              <input type="text" placeholder="Address Line 1" className="w-full px-4 py-3 bg-tenant-bg border border-tenant-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-tenant-primary/50 text-sm font-medium placeholder:text-tenant-muted/70" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="City" className="w-full px-4 py-3 bg-tenant-bg border border-tenant-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-tenant-primary/50 text-sm font-medium placeholder:text-tenant-muted/70" />
                <input type="text" placeholder="ZIP Code" className="w-full px-4 py-3 bg-tenant-bg border border-tenant-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-tenant-primary/50 text-sm font-medium placeholder:text-tenant-muted/70" />
              </div>
            </form>
          </section>

          <section>
            <h2 className="text-xl font-bold text-tenant-text mb-4 border-b border-tenant-muted/20 pb-2">2. Payment Method</h2>
            <div className="p-4 border-2 border-tenant-primary rounded-xl bg-tenant-primary/5 flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full border-[5px] border-tenant-primary bg-tenant-bg"></div>
                <span className="font-bold text-tenant-text">Credit Card</span>
              </div>
              <div className="flex gap-1">
                {/* Simulated Card Logos */}
                <div className="h-6 w-10 bg-slate-200 rounded"></div>
                <div className="h-6 w-10 bg-slate-200 rounded"></div>
              </div>
            </div>
            
            <form className="space-y-4 mt-4">
              <input type="text" placeholder="Card Number" className="w-full px-4 py-3 bg-tenant-bg border border-tenant-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-tenant-primary/50 text-sm font-medium placeholder:text-tenant-muted/70" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 bg-tenant-bg border border-tenant-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-tenant-primary/50 text-sm font-medium placeholder:text-tenant-muted/70" />
                <input type="text" placeholder="CVC" className="w-full px-4 py-3 bg-tenant-bg border border-tenant-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-tenant-primary/50 text-sm font-medium placeholder:text-tenant-muted/70" />
              </div>
            </form>
          </section>
        </div>

        {/* Summary */}
        <div>
          <div className="bg-tenant-bg border border-tenant-muted/20 rounded-2xl p-6 shadow-sm sticky top-24">
            <h3 className="text-xl font-extrabold text-tenant-text mb-6">Order Summary</h3>
            <div className="space-y-4 mb-6">
              {[1, 2].map((item) => (
                <div key={item} className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-slate-100 rounded-lg"></div>
                    <div>
                      <p className="font-bold text-tenant-text">Organic Bananas</p>
                      <p className="font-medium text-tenant-muted">Qty: 2</p>
                    </div>
                  </div>
                  <span className="font-bold text-tenant-text">$9.98</span>
                </div>
              ))}
            </div>
            <div className="border-t border-tenant-muted/20 pt-4 space-y-2 mb-6 text-sm">
               <div className="flex justify-between font-medium text-tenant-muted">
                <span>Subtotal</span>
                <span className="text-tenant-text font-bold">$19.96</span>
              </div>
              <div className="flex justify-between font-medium text-tenant-muted">
                <span>Shipping</span>
                <span className="text-tenant-primary font-bold">Free</span>
              </div>
              <div className="border-t border-tenant-muted/20 mt-4 pt-4 flex justify-between">
                <span className="font-bold text-tenant-text">Total</span>
                <span className="text-2xl font-extrabold text-tenant-primary">$21.56</span>
              </div>
            </div>
            <button className="w-full py-4 bg-tenant-primary text-tenant-primary-foreground font-bold rounded-xl hover:bg-tenant-primary/90 transition-all shadow-lg flex items-center justify-center gap-2">
              <Lock className="h-5 w-5" /> Pay $21.56
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
