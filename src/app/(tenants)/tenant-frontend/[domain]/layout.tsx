"use client";

import { TenantThemeProvider } from "@/components/tenant/ThemeProvider";
import Link from "next/link";
import { ShoppingCart, Heart, User, Search, Menu, Leaf, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function TenantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const params = useParams();
  const domain = params?.domain as string || 'demo.com';
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <TenantThemeProvider>
      <div className="flex flex-col min-h-screen">
        {/* Top Announcement Bar */}
        <div className="bg-tenant-primary text-tenant-primary-foreground text-xs font-semibold py-2 text-center tracking-wide uppercase">
          Free Delivery on orders over $50! Shop Fresh, Eat Healthy.
        </div>

        {/* Premium Navbar */}
        <header 
          className={cn(
            "sticky top-0 z-50 w-full transition-all duration-300 border-b",
            isScrolled ? "bg-tenant-bg/90 backdrop-blur-md border-tenant-muted/20 shadow-sm" : "bg-tenant-bg border-transparent"
          )}
        >
          <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-6">
            {/* Mobile Menu Toggle & Logo */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden text-tenant-text hover:text-tenant-primary transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
              <Link href="/" className="flex items-center gap-2 group">
                <div className="h-10 w-10 rounded-full bg-tenant-secondary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Leaf className="h-6 w-6 text-tenant-primary" />
                </div>
                <span className="text-2xl font-extrabold tracking-tight text-tenant-text hidden sm:block">
                  FreshMarket
                </span>
              </Link>
            </div>

            {/* Search Bar (Desktop) */}
            <div className="hidden lg:flex flex-1 max-w-2xl relative">
              <input 
                type="text" 
                placeholder="Search for fresh fruits, organic veggies..." 
                className="w-full h-12 pl-5 pr-12 rounded-full border border-tenant-muted/30 bg-tenant-bg focus:outline-none focus:border-tenant-primary focus:ring-1 focus:ring-tenant-primary transition-all text-tenant-text placeholder:text-tenant-muted"
              />
              <button className="absolute right-2 top-2 h-8 w-8 rounded-full bg-tenant-primary text-tenant-primary-foreground flex items-center justify-center hover:bg-tenant-primary/90 transition-colors">
                <Search className="h-4 w-4" />
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 sm:gap-6">
              <Link href="/account" className="hidden sm:flex flex-col items-center gap-1 text-tenant-text hover:text-tenant-primary transition-colors">
                <User className="h-5 w-5" />
                <span className="text-[10px] font-semibold uppercase tracking-wider">Account</span>
              </Link>
              <Link href="/wishlist" className="flex flex-col items-center gap-1 text-tenant-text hover:text-tenant-primary transition-colors relative">
                <Heart className="h-5 w-5" />
                <span className="text-[10px] font-semibold uppercase tracking-wider hidden sm:block">Wishlist</span>
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-tenant-accent text-tenant-accent-foreground text-[9px] font-bold flex items-center justify-center">
                  3
                </span>
              </Link>
              <Link href="/cart" className="flex flex-col items-center gap-1 text-tenant-text hover:text-tenant-primary transition-colors relative group">
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-tenant-primary text-tenant-primary-foreground text-[10px] font-bold flex items-center justify-center border-2 border-tenant-bg">
                    2
                  </span>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider hidden sm:block mt-0.5">$24.50</span>
              </Link>
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:block border-t border-tenant-muted/10 bg-tenant-bg">
            <div className="container mx-auto px-4 h-12 flex items-center justify-center gap-8 text-sm font-semibold text-tenant-text">
              <Link href="/products" className="hover:text-tenant-primary transition-colors">All Categories</Link>
              <Link href="/products?category=fruits" className="hover:text-tenant-primary transition-colors">Fresh Fruits</Link>
              <Link href="/products?category=veggies" className="hover:text-tenant-primary transition-colors">Organic Veggies</Link>
              <Link href="/products?category=dairy" className="hover:text-tenant-primary transition-colors">Dairy & Eggs</Link>
              <Link href="/products?category=bakery" className="hover:text-tenant-primary transition-colors">Bakery</Link>
              <Link href="/products?special=true" className="text-tenant-accent hover:text-tenant-accent/80 transition-colors">🔥 Weekly Specials</Link>
            </div>
          </div>
        </header>

        {/* Mobile Sidebar Overlay */}
        <div 
          className={cn(
            "fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Sidebar Menu */}
        <div 
          className={cn(
            "fixed top-0 left-0 h-full w-[80%] max-w-sm bg-tenant-bg z-[70] lg:hidden flex flex-col shadow-2xl transition-transform duration-300 ease-in-out",
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="h-20 flex items-center justify-between px-6 border-b border-tenant-muted/10 bg-tenant-secondary/30">
            <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="h-8 w-8 rounded-full bg-tenant-secondary flex items-center justify-center">
                <Leaf className="h-5 w-5 text-tenant-primary" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-tenant-text">
                FreshMarket
              </span>
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="h-10 w-10 rounded-full bg-tenant-bg border border-tenant-muted/20 flex items-center justify-center text-tenant-text hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-6 overflow-y-auto flex-1">
            <div className="relative mb-8">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full h-12 pl-4 pr-10 rounded-xl border border-tenant-muted/30 bg-tenant-bg focus:outline-none focus:border-tenant-primary text-tenant-text"
              />
              <Search className="absolute right-3 top-3.5 h-5 w-5 text-tenant-muted" />
            </div>

            <h3 className="text-xs font-bold text-tenant-muted uppercase tracking-wider mb-4">Categories</h3>
            <div className="flex flex-col gap-2">
              {[
                { name: "All Categories", path: "/products" },
                { name: "Fresh Fruits", path: "/products?category=fruits" },
                { name: "Organic Veggies", path: "/products?category=veggies" },
                { name: "Dairy & Eggs", path: "/products?category=dairy" },
                { name: "Bakery & Bread", path: "/products?category=bakery" },
              ].map((link, i) => (
                <Link 
                  key={i} 
                  href={link.path}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-tenant-secondary text-tenant-text font-bold transition-colors"
                >
                  {link.name}
                  <ChevronRight className="h-4 w-4 text-tenant-muted" />
                </Link>
              ))}
              <Link 
                href="/products?special=true"
                className="flex items-center justify-between p-3 rounded-xl bg-amber-50 text-amber-700 font-bold hover:bg-amber-100 transition-colors mt-2 border border-amber-200"
              >
                🔥 Weekly Specials
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <h3 className="text-xs font-bold text-tenant-muted uppercase tracking-wider mb-4 mt-8">My Account</h3>
            <div className="flex flex-col gap-2">
              <Link href="/account" className="flex items-center gap-3 p-3 rounded-xl hover:bg-tenant-secondary text-tenant-text font-bold transition-colors">
                <User className="h-5 w-5 text-tenant-muted" /> Profile
              </Link>
              <Link href="/wishlist" className="flex items-center gap-3 p-3 rounded-xl hover:bg-tenant-secondary text-tenant-text font-bold transition-colors">
                <Heart className="h-5 w-5 text-tenant-muted" /> Wishlist
              </Link>
            </div>
          </div>
          
          <div className="p-6 bg-tenant-secondary/50 border-t border-tenant-muted/10">
            <Link 
              href="/cart"
              className="w-full py-4 bg-tenant-primary text-tenant-primary-foreground font-bold rounded-xl hover:bg-tenant-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <ShoppingCart className="h-5 w-5" /> View Cart ($24.50)
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 w-full bg-[#FAFAFA]">
          {children}
        </main>

        {/* Premium Footer */}
        <footer className="bg-tenant-text text-tenant-bg pt-16 pb-8 border-t-4 border-tenant-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-6 text-tenant-primary-foreground">
                  <Leaf className="h-8 w-8 text-tenant-primary" />
                  <span className="text-2xl font-extrabold tracking-tight">FreshMarket</span>
                </div>
                <p className="text-tenant-muted/80 text-sm leading-relaxed font-medium">
                  Your premium neighborhood grocery store delivered straight to your door. Fresh, organic, and always high quality.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-6 text-tenant-primary">Shop</h3>
                <ul className="space-y-4 text-sm font-medium text-tenant-bg/80">
                  <li><Link href="#" className="hover:text-tenant-primary transition-colors">Fresh Fruits</Link></li>
                  <li><Link href="#" className="hover:text-tenant-primary transition-colors">Organic Vegetables</Link></li>
                  <li><Link href="#" className="hover:text-tenant-primary transition-colors">Dairy & Eggs</Link></li>
                  <li><Link href="#" className="hover:text-tenant-primary transition-colors">Bakery & Bread</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-6 text-tenant-primary">Help</h3>
                <ul className="space-y-4 text-sm font-medium text-tenant-bg/80">
                  <li><Link href="#" className="hover:text-tenant-primary transition-colors">Customer Service</Link></li>
                  <li><Link href="#" className="hover:text-tenant-primary transition-colors">Delivery Information</Link></li>
                  <li><Link href="#" className="hover:text-tenant-primary transition-colors">Returns & Refunds</Link></li>
                  <li><Link href="#" className="hover:text-tenant-primary transition-colors">Track Order</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-6 text-tenant-primary">Newsletter</h3>
                <p className="text-tenant-bg/80 text-sm font-medium mb-4">Subscribe to get special offers and updates.</p>
                <div className="flex">
                  <input type="email" placeholder="Your email..." className="flex-1 px-4 py-2 rounded-l-md bg-tenant-bg/10 border-none focus:outline-none focus:ring-1 focus:ring-tenant-primary text-tenant-bg placeholder:text-tenant-bg/50" />
                  <button className="px-4 py-2 bg-tenant-primary text-tenant-primary-foreground font-bold rounded-r-md hover:bg-tenant-primary/90 transition-colors">
                    Join
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-tenant-bg/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-tenant-bg/50">
              <p>&copy; 2026 FreshMarket. Powered by MicroSaaS.</p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-tenant-primary transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-tenant-primary transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </TenantThemeProvider>
  );
}
