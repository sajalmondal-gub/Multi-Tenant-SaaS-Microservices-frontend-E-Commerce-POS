import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-tenant-text mb-8">Your Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="bg-tenant-bg border border-tenant-muted/20 rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-tenant-muted/5 border-b border-tenant-muted/20">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-tenant-muted">Product</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-tenant-muted hidden sm:table-cell">Price</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-tenant-muted">Quantity</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-tenant-muted text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-tenant-muted/10">
                {[1, 2].map((item) => (
                  <tr key={item}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 bg-slate-100 rounded-lg shrink-0"></div>
                        <div>
                          <p className="font-bold text-tenant-text">Organic Bananas</p>
                          <button className="text-xs font-semibold text-red-500 hover:text-red-700 flex items-center mt-1">
                            <Trash2 className="h-3 w-3 mr-1" /> Remove
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-tenant-text hidden sm:table-cell">$4.99</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 border border-tenant-muted/20 rounded-lg w-max bg-tenant-bg">
                        <button className="p-2 text-tenant-muted hover:text-tenant-text transition-colors">
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center font-bold text-sm">2</span>
                        <button className="p-2 text-tenant-muted hover:text-tenant-text transition-colors">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-tenant-primary text-right">$9.98</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full lg:w-96 shrink-0">
          <div className="bg-tenant-bg border border-tenant-muted/20 rounded-2xl p-6 shadow-sm sticky top-24">
            <h3 className="text-xl font-extrabold text-tenant-text mb-6">Order Summary</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm font-medium text-tenant-muted">
                <span>Subtotal</span>
                <span className="text-tenant-text font-bold">$19.96</span>
              </div>
              <div className="flex justify-between text-sm font-medium text-tenant-muted">
                <span>Shipping</span>
                <span className="text-tenant-primary font-bold">Free</span>
              </div>
              <div className="flex justify-between text-sm font-medium text-tenant-muted">
                <span>Tax</span>
                <span className="text-tenant-text font-bold">$1.60</span>
              </div>
              <div className="border-t border-tenant-muted/20 pt-4 flex justify-between">
                <span className="font-bold text-tenant-text">Total</span>
                <span className="text-2xl font-extrabold text-tenant-primary">$21.56</span>
              </div>
            </div>
            
            <Link href="/checkout" className="w-full py-4 bg-tenant-primary text-tenant-primary-foreground font-bold rounded-xl hover:bg-tenant-primary/90 transition-all shadow-lg flex items-center justify-center gap-2 mb-4">
              Proceed to Checkout <ArrowRight className="h-5 w-5" />
            </Link>
            <p className="text-xs text-center text-tenant-muted font-medium">Secure checkout powered by Stripe</p>
          </div>
        </div>
      </div>
    </div>
  );
}
