import Link from "next/link";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

export default function WishlistPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center gap-3 mb-8">
        <Heart className="h-8 w-8 text-tenant-primary fill-tenant-primary/20" />
        <h1 className="text-3xl font-extrabold text-tenant-text">My Wishlist</h1>
      </div>
      
      <div className="bg-tenant-bg border border-tenant-muted/20 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-tenant-muted/5 border-b border-tenant-muted/20 hidden md:table-header-group">
            <tr>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-tenant-muted">Product Name</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-tenant-muted">Unit Price</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-tenant-muted">Stock Status</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-tenant-muted text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-tenant-muted/10">
            {[1, 2, 3].map((item) => (
              <tr key={item} className="flex flex-col md:table-row">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 bg-slate-100 rounded-lg shrink-0"></div>
                    <div>
                      <Link href="#" className="font-bold text-tenant-text hover:text-tenant-primary transition-colors">
                        Premium Organic Product {item}
                      </Link>
                      <p className="text-sm font-medium text-tenant-muted mt-1">Category Name</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 md:py-4 pt-0">
                  <div className="flex items-center justify-between md:block">
                    <span className="text-xs font-bold uppercase text-tenant-muted md:hidden">Price:</span>
                    <span className="font-extrabold text-tenant-text">$12.99</span>
                  </div>
                </td>
                <td className="px-6 py-4 md:py-4 pt-0">
                  <div className="flex items-center justify-between md:block">
                    <span className="text-xs font-bold uppercase text-tenant-muted md:hidden">Status:</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
                      In Stock
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 md:py-4 pt-0 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="px-4 py-2 bg-tenant-primary text-tenant-primary-foreground font-bold rounded-lg hover:bg-tenant-primary/90 transition-all flex items-center justify-center gap-2 flex-1 md:flex-none">
                      <ShoppingCart className="h-4 w-4" /> Add to Cart
                    </button>
                    <button className="p-2 text-tenant-muted hover:text-red-500 transition-colors border border-tenant-muted/20 rounded-lg bg-tenant-bg" title="Remove">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
