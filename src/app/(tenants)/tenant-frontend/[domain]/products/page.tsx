import Link from "next/link";
import { Filter, ChevronDown, Star, ShoppingCart, Leaf } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm font-medium text-tenant-muted mb-8">
        <Link href="/" className="hover:text-tenant-primary">Home</Link>
        <span>/</span>
        <span className="text-tenant-text">All Products</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filter */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="bg-tenant-bg border border-tenant-muted/20 rounded-2xl p-6 sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg text-tenant-text">Filters</h3>
              <Filter className="h-4 w-4 text-tenant-muted" />
            </div>
            
            <div className="space-y-6">
              {/* Categories */}
              <div>
                <h4 className="font-bold text-tenant-text mb-3">Categories</h4>
                <div className="space-y-2">
                  {['Fresh Fruits', 'Organic Veggies', 'Dairy & Eggs', 'Bakery', 'Meat', 'Beverages'].map((cat, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="rounded border-tenant-muted/30 text-tenant-primary focus:ring-tenant-primary" />
                      <span className="text-sm font-medium text-tenant-muted group-hover:text-tenant-text transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-bold text-tenant-text mb-3">Price Range</h4>
                <input type="range" className="w-full accent-tenant-primary" />
                <div className="flex items-center justify-between mt-2 text-sm font-medium text-tenant-muted">
                  <span>$0</span>
                  <span>$100+</span>
                </div>
              </div>

              <button className="w-full py-2 bg-tenant-primary text-tenant-primary-foreground font-bold rounded-lg hover:bg-tenant-primary/90 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <h1 className="text-3xl font-extrabold text-tenant-text">All Products</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-tenant-muted">Sort by:</span>
              <button className="flex items-center gap-2 px-4 py-2 border border-tenant-muted/20 bg-tenant-bg rounded-lg text-sm font-bold hover:border-tenant-primary transition-colors">
                Popularity <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Generating 12 placeholder products */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-tenant-bg border border-tenant-muted/20 rounded-2xl p-4 transition-all hover:shadow-xl hover:border-tenant-primary/30 group flex flex-col h-full relative">
                <div className="w-full aspect-square rounded-xl mb-4 bg-slate-100 flex items-center justify-center relative overflow-hidden">
                  <Leaf className="h-12 w-12 text-black/10 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <button className="h-12 w-12 rounded-full bg-tenant-bg text-tenant-text flex items-center justify-center hover:bg-tenant-primary hover:text-tenant-primary-foreground transition-colors shadow-lg">
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col flex-1">
                  <Link href="#" className="text-lg font-bold text-tenant-text hover:text-tenant-primary transition-colors line-clamp-2 mb-2">
                    Premium Organic Product {i + 1}
                  </Link>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-bold text-tenant-text">4.8</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xl font-extrabold text-tenant-primary">${(Math.random() * 20 + 5).toFixed(2)}</span>
                    <button className="h-10 w-10 rounded-lg border border-tenant-muted/20 bg-tenant-bg text-tenant-text flex items-center justify-center hover:border-tenant-primary hover:bg-tenant-primary hover:text-tenant-primary-foreground transition-all shadow-sm">
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            {[1, 2, 3, '...', 8].map((page, i) => (
              <button key={i} className={`h-10 w-10 rounded-lg font-bold flex items-center justify-center transition-colors ${page === 1 ? 'bg-tenant-primary text-tenant-primary-foreground' : 'bg-tenant-bg border border-tenant-muted/20 hover:border-tenant-primary text-tenant-text'}`}>
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
