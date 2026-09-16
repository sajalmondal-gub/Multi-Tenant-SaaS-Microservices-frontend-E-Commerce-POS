import Link from "next/link";
import { ArrowRight, ShoppingCart, Star, Clock, Truck, ShieldCheck, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

// Dummy Data
const categories = [
  { name: "Fresh Fruits", icon: "🍎", items: "120+ Items", color: "bg-red-50 text-red-600 border-red-100" },
  { name: "Organic Veggies", icon: "🥦", items: "85+ Items", color: "bg-green-50 text-green-600 border-green-100" },
  { name: "Dairy & Eggs", icon: "🧀", items: "45+ Items", color: "bg-yellow-50 text-yellow-600 border-yellow-100" },
  { name: "Fresh Meat", icon: "🥩", items: "30+ Items", color: "bg-rose-50 text-rose-600 border-rose-100" },
  { name: "Bakery", icon: "🥖", items: "60+ Items", color: "bg-amber-50 text-amber-600 border-amber-100" },
  { name: "Beverages", icon: "🧃", items: "90+ Items", color: "bg-blue-50 text-blue-600 border-blue-100" },
];

const products = [
  { name: "Organic Bananas", price: "$4.99", unit: "/ bunch", rating: 4.8, reviews: 124, image: "https://images.unsplash.com/photo-1571501435323-5e9255a6d910?w=500&q=80", tag: "Best Seller" },
  { name: "Fresh Avocados", price: "$2.49", unit: "/ each", rating: 4.9, reviews: 89, image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&q=80", tag: "Organic" },
  { name: "Whole Milk", price: "$3.99", unit: "/ gallon", rating: 4.7, reviews: 256, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=80" },
  { name: "Sourdough Bread", price: "$5.99", unit: "/ loaf", rating: 4.9, reviews: 112, image: "https://images.unsplash.com/photo-1589367920969-ab8e050bfecf?w=500&q=80", tag: "Fresh Baked" },
  { name: "Grass-Fed Beef", price: "$12.99", unit: "/ lb", rating: 4.8, reviews: 67, image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=500&q=80" },
  { name: "Organic Strawberries", price: "$6.99", unit: "/ box", rating: 4.6, reviews: 198, image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&q=80", tag: "Sale" },
];

export default function TenantHomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-tenant-bg">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-tenant-secondary pt-12 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-tenant-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tenant-bg border border-tenant-primary/20 text-tenant-primary text-sm font-bold uppercase tracking-wider mb-6 shadow-sm">
              <Leaf className="h-4 w-4" /> 100% Organic Products
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-tenant-text mb-6 leading-[1.1]">
              Fresh Groceries, <br />
              <span className="text-tenant-primary">Delivered Fast.</span>
            </h1>
            <p className="text-lg lg:text-xl text-tenant-muted font-medium mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Get the freshest, highest quality groceries delivered directly to your doorstep within 2 hours. Farm to table made easy.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link href="/products" className="w-full sm:w-auto px-8 py-4 bg-tenant-primary text-tenant-primary-foreground font-bold rounded-xl hover:bg-tenant-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                Shop Now <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/products" className="w-full sm:w-auto px-8 py-4 bg-tenant-bg border-2 border-tenant-primary/20 text-tenant-primary font-bold rounded-xl hover:bg-tenant-secondary transition-colors flex items-center justify-center">
                View Weekly Specials
              </Link>
            </div>
          </div>
          
          <div className="flex-1 w-full flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-tenant-primary/20 to-tenant-accent/20 rounded-full border-8 border-tenant-bg shadow-2xl flex items-center justify-center p-4">
               <div className="w-full h-full bg-tenant-bg rounded-full border border-tenant-muted/10 shadow-inner overflow-hidden flex flex-col items-center justify-center relative">
                 {/* Real Hero Image */}
                 <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" alt="Fresh Groceries" className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-black/10"></div>
               </div>
               
               {/* Floating Badges */}
               <div className="absolute -left-6 top-20 bg-tenant-bg p-4 rounded-xl shadow-xl border border-tenant-muted/10 animate-bounce" style={{ animationDuration: '3s' }}>
                 <div className="flex items-center gap-3">
                   <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">🥬</div>
                   <div>
                     <p className="text-xs text-tenant-muted font-bold uppercase tracking-wide">Fresh</p>
                     <p className="font-extrabold text-tenant-text">Veggies</p>
                   </div>
                 </div>
               </div>
               
               <div className="absolute -right-6 bottom-20 bg-tenant-bg p-4 rounded-xl shadow-xl border border-tenant-muted/10 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                 <div className="flex items-center gap-3">
                   <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center text-2xl">🍞</div>
                   <div>
                     <p className="text-xs text-tenant-muted font-bold uppercase tracking-wide">Baked</p>
                     <p className="font-extrabold text-tenant-text">Daily</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="border-y border-tenant-muted/10 bg-tenant-bg relative z-20 -mt-8 mx-4 lg:mx-auto max-w-7xl rounded-2xl shadow-lg">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-tenant-muted/10">
            <div className="flex items-center gap-4 md:px-4">
              <div className="h-12 w-12 rounded-full bg-tenant-secondary flex items-center justify-center shrink-0">
                <Truck className="h-6 w-6 text-tenant-primary" />
              </div>
              <div>
                <h3 className="font-bold text-tenant-text">Free Shipping</h3>
                <p className="text-sm text-tenant-muted font-medium">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:px-8 pt-6 md:pt-0">
              <div className="h-12 w-12 rounded-full bg-tenant-secondary flex items-center justify-center shrink-0">
                <ShieldCheck className="h-6 w-6 text-tenant-primary" />
              </div>
              <div>
                <h3 className="font-bold text-tenant-text">100% Secure Payment</h3>
                <p className="text-sm text-tenant-muted font-medium">We ensure your money is save</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:px-8 pt-6 md:pt-0">
              <div className="h-12 w-12 rounded-full bg-tenant-secondary flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-tenant-primary" />
              </div>
              <div>
                <h3 className="font-bold text-tenant-text">Same Day Delivery</h3>
                <p className="text-sm text-tenant-muted font-medium">Order before 2 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-tenant-text tracking-tight mb-2">Shop by Category</h2>
            <p className="text-tenant-muted font-medium">Explore our wide range of fresh products</p>
          </div>
          <Link href="/products" className="hidden sm:flex items-center text-tenant-primary font-bold hover:text-tenant-primary/80 transition-colors">
            View All <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category, i) => (
            <Link key={i} href={`/products?category=${category.name.toLowerCase()}`} className={cn(
              "flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-tenant-bg cursor-pointer",
              category.color
            )}>
              <div className="text-5xl mb-4 drop-shadow-sm">{category.icon}</div>
              <h3 className="font-bold text-tenant-text text-center mb-1">{category.name}</h3>
              <p className="text-xs font-semibold text-tenant-muted uppercase tracking-wider">{category.items}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Special Deals Banner */}
      <section className="py-12 container mx-auto px-4">
        <div className="w-full rounded-3xl bg-tenant-primary text-tenant-primary-foreground p-8 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1600&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-lg text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-tenant-accent text-tenant-accent-foreground font-extrabold text-sm uppercase tracking-widest rounded-full mb-4 shadow-sm">
              Limited Time Offer
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">Get 30% Off on all Organic Veggies</h2>
            <p className="font-medium text-tenant-primary-foreground/90 mb-8 text-lg">Use code <strong className="bg-tenant-bg text-tenant-primary px-2 py-1 rounded">FRESH30</strong> at checkout.</p>
            <Link href="/products" className="inline-flex px-8 py-4 bg-tenant-bg text-tenant-primary font-extrabold rounded-xl hover:bg-tenant-secondary transition-colors shadow-lg">
              Shop the Sale
            </Link>
          </div>
          <div className="relative z-10 hidden md:block">
            <img src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80" alt="Special Deal" className="w-64 h-64 rounded-full border-8 border-tenant-primary-foreground/30 shadow-2xl object-cover" />
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-tenant-text tracking-tight mb-2">Best Sellers</h2>
            <p className="text-tenant-muted font-medium">Our most popular products right now</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div key={i} className="bg-tenant-bg border border-tenant-muted/20 rounded-2xl p-4 transition-all hover:shadow-xl hover:border-tenant-primary/30 group flex flex-col h-full relative">
              {product.tag && (
                <div className={cn(
                  "absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm",
                  product.tag === 'Sale' ? "bg-tenant-accent text-tenant-accent-foreground" : "bg-tenant-primary text-tenant-primary-foreground"
                )}>
                  {product.tag}
                </div>
              )}
              
              <div className="w-full aspect-square rounded-xl mb-4 relative overflow-hidden bg-tenant-secondary flex items-center justify-center">
                {/* Real Product Image */}
                <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                
                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <button className="h-12 w-12 rounded-full bg-tenant-bg text-tenant-text flex items-center justify-center hover:bg-tenant-primary hover:text-tenant-primary-foreground transition-colors shadow-lg">
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col flex-1">
                <Link href="#" className="text-tenant-muted text-xs font-bold uppercase tracking-wider mb-1 hover:text-tenant-primary">Category</Link>
                <Link href="#" className="text-lg font-bold text-tenant-text hover:text-tenant-primary transition-colors line-clamp-2 mb-2">
                  {product.name}
                </Link>
                
                <div className="flex items-center gap-1 mb-4">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-bold text-tenant-text">{product.rating}</span>
                  <span className="text-sm font-medium text-tenant-muted">({product.reviews})</span>
                </div>
                
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-extrabold text-tenant-primary">{product.price}</span>
                    <span className="text-sm font-medium text-tenant-muted">{product.unit}</span>
                  </div>
                  <button className="h-10 w-10 rounded-lg border border-tenant-muted/20 bg-tenant-bg text-tenant-text flex items-center justify-center hover:border-tenant-primary hover:bg-tenant-primary hover:text-tenant-primary-foreground transition-all shadow-sm">
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fresh Arrivals Slider Section */}
      <section className="py-20 bg-tenant-secondary/30 border-y border-tenant-muted/10">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-tenant-text tracking-tight mb-2">Fresh Arrivals</h2>
              <p className="text-tenant-muted font-medium">Straight from the farm, new items added daily.</p>
            </div>
            <div className="flex gap-2">
              <button className="h-10 w-10 rounded-full border border-tenant-muted/20 bg-tenant-bg flex items-center justify-center text-tenant-text hover:bg-tenant-primary hover:text-tenant-primary-foreground hover:border-tenant-primary transition-colors shadow-sm">
                &larr;
              </button>
              <button className="h-10 w-10 rounded-full border border-tenant-muted/20 bg-tenant-bg flex items-center justify-center text-tenant-text hover:bg-tenant-primary hover:text-tenant-primary-foreground hover:border-tenant-primary transition-colors shadow-sm">
                &rarr;
              </button>
            </div>
          </div>

          {/* Horizontal Scroll / Slider */}
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[...products].reverse().map((product, i) => (
              <div key={i} className="min-w-[280px] w-[280px] snap-start bg-tenant-bg border border-tenant-muted/20 rounded-2xl p-4 transition-all hover:shadow-xl hover:border-tenant-primary/30 group flex flex-col relative shrink-0">
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-tenant-accent text-tenant-accent-foreground shadow-sm">
                  New
                </div>
                <div className="w-full aspect-square rounded-xl mb-4 relative overflow-hidden bg-tenant-secondary">
                  <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <button className="h-12 w-12 rounded-full bg-tenant-bg text-tenant-text flex items-center justify-center hover:bg-tenant-primary hover:text-tenant-primary-foreground transition-colors shadow-lg">
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <Link href="#" className="text-lg font-bold text-tenant-text hover:text-tenant-primary transition-colors line-clamp-2 mb-2">
                    {product.name}
                  </Link>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xl font-extrabold text-tenant-primary">{product.price}</span>
                    <button className="h-10 w-10 rounded-lg border border-tenant-muted/20 bg-tenant-bg text-tenant-text flex items-center justify-center hover:border-tenant-primary hover:bg-tenant-primary hover:text-tenant-primary-foreground transition-all shadow-sm">
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle & Save Section */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bundle 1 */}
          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-8 flex flex-col justify-center relative overflow-hidden group">
            <div className="relative z-10 w-2/3">
              <span className="inline-block px-3 py-1 bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-full mb-4">Save 15%</span>
              <h3 className="text-3xl font-extrabold text-emerald-950 mb-3">Weekly Veggie Box</h3>
              <p className="text-emerald-800 font-medium mb-6">A perfect mix of seasonal organic vegetables for a family of 4.</p>
              <Link href="#" className="inline-flex items-center text-emerald-700 font-bold hover:text-emerald-900">
                Shop Bundle <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80" alt="Veggie Box" className="absolute -right-12 -bottom-12 w-64 h-64 object-cover rounded-full border-8 border-white shadow-xl group-hover:scale-105 transition-transform duration-500" />
          </div>
          {/* Bundle 2 */}
          <div className="rounded-3xl bg-amber-50 border border-amber-100 p-8 flex flex-col justify-center relative overflow-hidden group">
            <div className="relative z-10 w-2/3">
              <span className="inline-block px-3 py-1 bg-amber-500 text-white font-bold text-xs uppercase tracking-wider rounded-full mb-4">Save 20%</span>
              <h3 className="text-3xl font-extrabold text-amber-950 mb-3">Breakfast Combo</h3>
              <p className="text-amber-800 font-medium mb-6">Start your day right with fresh milk, eggs, and sourdough bread.</p>
              <Link href="#" className="inline-flex items-center text-amber-700 font-bold hover:text-amber-900">
                Shop Bundle <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
            <img src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&q=80" alt="Breakfast Combo" className="absolute -right-12 -bottom-12 w-64 h-64 object-cover rounded-full border-8 border-white shadow-xl group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Trending Products Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-tenant-text tracking-tight mb-2">Trending Now</h2>
            <p className="text-tenant-muted font-medium">What other shoppers are loving today.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...products].slice(1, 4).map((product, i) => (
            <div key={i} className="flex bg-tenant-bg border border-tenant-muted/20 rounded-2xl p-4 transition-all hover:shadow-xl hover:border-tenant-primary/30 group">
              <div className="w-32 h-32 rounded-xl shrink-0 overflow-hidden relative bg-tenant-secondary mr-4">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex flex-col flex-1 justify-center">
                <Link href="#" className="text-tenant-muted text-[10px] font-bold uppercase tracking-wider mb-1">Organic</Link>
                <Link href="#" className="text-lg font-bold text-tenant-text hover:text-tenant-primary transition-colors line-clamp-1 mb-2">
                  {product.name}
                </Link>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-lg font-extrabold text-tenant-primary">{product.price}</span>
                  <span className="text-xs font-medium text-tenant-muted">{product.unit}</span>
                </div>
                <button className="w-full py-2 bg-tenant-secondary text-tenant-primary font-bold rounded-lg hover:bg-tenant-primary hover:text-tenant-primary-foreground transition-colors text-sm flex items-center justify-center gap-2">
                  <ShoppingCart className="h-4 w-4" /> Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Flash Deals / Countdown */}
      <section className="py-16 bg-red-50 border-y border-red-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-20 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-red-500 rounded-full flex items-center justify-center text-3xl animate-pulse shadow-lg shadow-red-500/30">
                ⚡
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-red-950 tracking-tight">Flash Deals</h2>
                <p className="text-red-700 font-bold">Hurry up! Offers end in:</p>
              </div>
            </div>
            
            {/* Fake Countdown */}
            <div className="flex gap-4">
              {[ {l: 'Hours', v: '04'}, {l: 'Mins', v: '45'}, {l: 'Secs', v: '12'} ].map((time, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-red-200 flex items-center justify-center text-2xl font-extrabold text-red-600 mb-1">
                    {time.v}
                  </div>
                  <span className="text-xs font-bold text-red-800 uppercase tracking-wider">{time.l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...products].reverse().slice(0, 4).map((product, i) => (
              <div key={i} className="bg-white border-2 border-red-100 rounded-2xl p-4 transition-all hover:shadow-xl hover:border-red-300 group flex flex-col relative">
                <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold shadow-sm">
                  -50%
                </div>
                <div className="w-full aspect-square rounded-xl mb-4 relative overflow-hidden bg-tenant-secondary">
                  <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col flex-1">
                  <Link href="#" className="text-lg font-bold text-tenant-text hover:text-red-600 transition-colors line-clamp-1 mb-1">
                    {product.name}
                  </Link>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-xl font-extrabold text-red-600">{product.price}</span>
                    <span className="text-sm font-medium text-tenant-muted line-through">$19.99</span>
                  </div>
                  <button className="w-full py-3 bg-red-50 text-red-600 font-bold rounded-xl hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart className="h-5 w-5" /> Claim Deal
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop By Diet / Lifestyle */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-tenant-text tracking-tight mb-4">Shop By Lifestyle</h2>
          <p className="text-tenant-muted font-medium text-lg">Find exactly what fits your dietary needs.</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Keto Friendly", img: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=500&q=80", color: "bg-blue-900" },
            { name: "Vegan", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80", color: "bg-emerald-900" },
            { name: "Gluten Free", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80", color: "bg-amber-900" },
            { name: "High Protein", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=500&q=80", color: "bg-rose-900" }
          ].map((diet, i) => (
            <Link key={i} href="#" className="relative h-48 rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow">
              <img src={diet.img} alt={diet.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className={`absolute inset-0 opacity-60 group-hover:opacity-70 transition-opacity ${diet.color}`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-extrabold text-2xl tracking-wide drop-shadow-lg">{diet.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Healthy Picks (Compact List) */}
      <section className="pb-20 container mx-auto px-4">
        <div className="bg-tenant-bg border border-tenant-muted/20 rounded-3xl p-8 lg:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-extrabold text-tenant-text tracking-tight mb-4">Healthy Picks<br/>For The Week</h2>
              <p className="text-tenant-muted font-medium mb-8">Curated selections by our in-house nutritionists to keep you energized and healthy.</p>
              <Link href="/products" className="inline-flex items-center text-tenant-primary font-bold hover:text-tenant-primary/80 transition-colors">
                View All Recommendations <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[...products, ...products].slice(0, 6).map((product, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-tenant-secondary transition-colors group cursor-pointer border border-transparent hover:border-tenant-muted/10">
                  <img src={product.image} alt={product.name} className="w-16 h-16 rounded-lg object-cover shadow-sm group-hover:shadow-md transition-shadow" />
                  <div className="flex-1">
                    <h4 className="font-bold text-tenant-text group-hover:text-tenant-primary transition-colors line-clamp-1">{product.name}</h4>
                    <p className="text-sm font-extrabold text-tenant-muted">{product.price}</p>
                  </div>
                  <button className="h-8 w-8 rounded-full bg-tenant-bg border border-tenant-muted/20 text-tenant-muted flex items-center justify-center hover:bg-tenant-primary hover:text-white hover:border-tenant-primary transition-colors">
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Farm to Table Process */}
      <section className="py-20 bg-tenant-secondary border-y border-tenant-muted/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-tenant-text tracking-tight mb-4">Our Farm to Table Process</h2>
            <p className="text-tenant-muted font-medium text-lg">We ensure the highest quality by working directly with local farmers and delivering straight to your door.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Sourced Locally", desc: "We partner with local organic farms.", icon: "🚜", color: "bg-emerald-100 text-emerald-600" },
              { title: "Quality Check", desc: "Every item is hand-picked and inspected.", icon: "🔎", color: "bg-blue-100 text-blue-600" },
              { title: "Careful Packing", desc: "Packed safely in eco-friendly boxes.", icon: "📦", color: "bg-amber-100 text-amber-600" },
              { title: "Fast Delivery", desc: "Delivered fresh within 2 hours.", icon: "⚡", color: "bg-rose-100 text-rose-600" }
            ].map((step, i) => (
              <div key={i} className="bg-tenant-bg p-8 rounded-2xl shadow-sm border border-tenant-muted/10 text-center relative group hover:-translate-y-2 transition-transform duration-300">
                <div className={cn("w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl shadow-inner", step.color)}>
                  {step.icon}
                </div>
                <h3 className="font-extrabold text-xl text-tenant-text mb-2">{step.title}</h3>
                <p className="text-tenant-muted font-medium text-sm">{step.desc}</p>
                {i !== 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 text-tenant-muted/30">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-tenant-text tracking-tight mb-4">What Our Customers Say</h2>
          <p className="text-tenant-muted font-medium text-lg">Don't just take our word for it. Here is what our community thinks.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Sarah Jenkins", role: "Regular Customer", text: "The quality of the fresh produce is unmatched. It feels like I picked it from the farm myself! Highly recommend this service." },
            { name: "Michael Chang", role: "Fitness Coach", text: "Finding reliable organic veggies was always a hassle until I found FreshMarket. Their 2-hour delivery is an absolute lifesaver." },
            { name: "Emily Watson", role: "Home Chef", text: "As someone who cooks daily, having access to premium quality meat and dairy delivered to my door makes my life so much easier." }
          ].map((review, i) => (
            <div key={i} className="bg-tenant-bg p-8 rounded-3xl border border-tenant-muted/20 shadow-lg relative">
              <div className="absolute -top-6 left-8 text-6xl text-tenant-primary/20 font-serif">"</div>
              <div className="flex gap-1 mb-6 text-amber-400">
                {[1,2,3,4,5].map(star => <Star key={star} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="text-tenant-text font-medium leading-relaxed mb-8 relative z-10 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-tenant-secondary border-2 border-tenant-primary flex items-center justify-center font-bold text-tenant-primary">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-tenant-text">{review.name}</h4>
                  <p className="text-xs text-tenant-muted font-semibold uppercase">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Brands Marquee */}
      <section className="py-12 bg-white border-y border-tenant-muted/10 overflow-hidden">
        <div className="container mx-auto px-4 mb-8 text-center">
          <p className="text-sm font-bold text-tenant-muted uppercase tracking-widest">Trusted By Top Organic Brands</p>
        </div>
        <div className="flex gap-12 items-center whitespace-nowrap animate-[scroll_30s_linear_infinite] w-[200%] opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} className="text-3xl font-black text-tenant-text/30 mx-8">
              BRAND LOGO {num}
            </div>
          ))}
        </div>
      </section>

      {/* Recipes & Cooking Guides */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-tenant-text tracking-tight mb-2">Weekly Recipes</h2>
            <p className="text-tenant-muted font-medium">Cook delicious meals with our fresh ingredients.</p>
          </div>
          <Link href="#" className="hidden sm:flex items-center text-tenant-primary font-bold hover:text-tenant-primary/80 transition-colors">
            View All Recipes <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Avocado Toast with Poached Eggs", time: "15 Mins", diff: "Easy", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80" },
            { title: "Organic Green Smoothie Bowl", time: "10 Mins", diff: "Easy", img: "https://images.unsplash.com/photo-1490474418585-ba9f527d29dd?w=600&q=80" },
            { title: "Grilled Salmon with Veggies", time: "30 Mins", diff: "Medium", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80" }
          ].map((recipe, i) => (
            <div key={i} className="bg-tenant-bg border border-tenant-muted/20 rounded-3xl overflow-hidden group hover:shadow-xl transition-all">
              <div className="h-48 w-full overflow-hidden relative">
                <img src={recipe.img} alt={recipe.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-tenant-text text-xs font-bold rounded-full shadow-sm">{recipe.time}</span>
                  <span className="px-3 py-1 bg-tenant-primary text-white text-xs font-bold rounded-full shadow-sm">{recipe.diff}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-tenant-text mb-4 group-hover:text-tenant-primary transition-colors line-clamp-2">{recipe.title}</h3>
                <button className="w-full py-3 bg-tenant-secondary text-tenant-primary font-bold rounded-xl hover:bg-tenant-primary hover:text-white transition-colors border border-tenant-primary/20">
                  Shop Ingredients
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile App Promo */}
      <section className="py-20 bg-tenant-primary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left text-white">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-tight">
              Shop Faster With <br />
              <span className="text-tenant-accent">Our Mobile App</span>
            </h2>
            <p className="text-white/90 text-lg font-medium mb-10 max-w-md mx-auto md:mx-0">
              Download the FreshMarket app to get exclusive app-only deals, track your orders in real-time, and manage your wishlist.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              {/* Fake App Store Button */}
              <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors">
                <div className="text-3xl">🍎</div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">Download on the</div>
                  <div className="text-xl font-bold -mt-1">App Store</div>
                </div>
              </button>
              {/* Fake Play Store Button */}
              <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors">
                <div className="text-3xl">▶️</div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">GET IT ON</div>
                  <div className="text-xl font-bold -mt-1">Google Play</div>
                </div>
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            {/* Fake Phone Mockup */}
            <div className="w-64 h-[500px] bg-white rounded-[40px] border-[12px] border-black shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 w-full h-6 bg-black rounded-b-3xl z-20 mx-auto left-0 right-0 max-w-[120px]"></div>
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80" alt="App Preview" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="w-full bg-white/20 backdrop-blur-md rounded-2xl p-4 text-white">
                  <p className="font-bold text-sm mb-1">Your Order is on the way!</p>
                  <p className="text-xs opacity-80">Arriving in 15 mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
