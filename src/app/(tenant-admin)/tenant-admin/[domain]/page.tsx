import { ArrowRight, DollarSign, Package, ShoppingCart, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const stats = [
  { name: 'Total Revenue', value: '$45,231.89', change: '+20.1%', trend: 'up', icon: DollarSign },
  { name: 'Active Orders', value: '1,234', change: '+15.2%', trend: 'up', icon: ShoppingCart },
  { name: 'Products Sold', value: '4,562', change: '+8.4%', trend: 'up', icon: Package },
  { name: 'New Customers', value: '342', change: '-2.1%', trend: 'down', icon: Users },
];

const recentOrders = [
  { id: '#ORD-001', customer: 'Sarah Jenkins', amount: '$124.50', status: 'Delivered', date: '2 mins ago' },
  { id: '#ORD-002', customer: 'Michael Chang', amount: '$85.00', status: 'Processing', date: '15 mins ago' },
  { id: '#ORD-003', customer: 'Emily Watson', amount: '$210.00', status: 'Delivered', date: '1 hour ago' },
  { id: '#ORD-004', customer: 'John Doe', amount: '$45.20', status: 'Pending', date: '3 hours ago' },
  { id: '#ORD-005', customer: 'Alice Smith', amount: '$95.00', status: 'Processing', date: '5 hours ago' },
];

export default function TenantAdminDashboard() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-tenant-text tracking-tight">Dashboard Overview</h1>
        <p className="text-tenant-muted font-medium mt-1">Welcome back! Here's what's happening with your store today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-tenant-bg border border-tenant-muted/20 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            {/* Decorative Background Blob */}
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-tenant-primary/5 rounded-full blur-2xl group-hover:bg-tenant-primary/10 transition-colors"></div>
            
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-tenant-secondary flex items-center justify-center border border-tenant-primary/10 text-tenant-primary">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className={cn(
                "px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1",
                stat.trend === 'up' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
              )}>
                {stat.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingUp className="h-3 w-3 rotate-180" />}
                {stat.change}
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-tenant-muted font-bold text-sm uppercase tracking-wider mb-1">{stat.name}</h3>
              <p className="text-3xl font-black text-tenant-text tracking-tight">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sales Chart Placeholder */}
        <div className="lg:col-span-2 bg-tenant-bg border border-tenant-muted/20 rounded-3xl p-6 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-extrabold text-tenant-text">Sales Analytics</h2>
              <p className="text-sm font-medium text-tenant-muted">Revenue over the last 7 days</p>
            </div>
            <select className="bg-tenant-secondary/50 border border-tenant-muted/20 text-tenant-text text-sm font-bold rounded-xl px-4 py-2 focus:outline-none focus:border-tenant-primary">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Year</option>
            </select>
          </div>
          
          <div className="flex-1 relative w-full min-h-[300px] flex items-end justify-between gap-2 md:gap-6 pt-10">
            {/* Fake Bar Chart */}
            {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
              <div key={i} className="w-full flex flex-col items-center gap-2 group cursor-pointer">
                {/* Tooltip */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-tenant-text text-tenant-bg text-xs font-bold px-2 py-1 rounded shadow-lg absolute -top-8 whitespace-nowrap z-10">
                  ${(height * 124).toFixed(0)}
                </div>
                {/* Bar */}
                <div className="w-full bg-tenant-secondary rounded-t-xl relative overflow-hidden group-hover:bg-tenant-primary/20 transition-colors" style={{ height: '100%' }}>
                  <div 
                    className="absolute bottom-0 w-full bg-tenant-primary rounded-t-xl transition-all duration-1000 ease-out" 
                    style={{ height: `${height}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                </div>
                {/* Label */}
                <span className="text-xs font-bold text-tenant-muted">Day {i+1}</span>
              </div>
            ))}
            
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-full border-b border-tenant-muted/10 border-dashed"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Orders List */}
        <div className="bg-tenant-bg border border-tenant-muted/20 rounded-3xl p-6 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-extrabold text-tenant-text">Recent Orders</h2>
            <Link href="#" className="p-2 bg-tenant-secondary text-tenant-primary rounded-xl hover:bg-tenant-primary hover:text-tenant-primary-foreground transition-colors">
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 -mr-2 space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-tenant-secondary/50 transition-colors border border-transparent hover:border-tenant-muted/10 group cursor-pointer">
                <div className="h-10 w-10 rounded-full bg-tenant-primary/10 text-tenant-primary font-bold flex items-center justify-center shrink-0">
                  {order.customer.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm text-tenant-text truncate group-hover:text-tenant-primary transition-colors">{order.customer}</h4>
                  <div className="flex items-center gap-2 text-xs font-medium text-tenant-muted mt-0.5">
                    <span>{order.id}</span>
                    <span>•</span>
                    <span>{order.date}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-extrabold text-sm text-tenant-text">{order.amount}</p>
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mt-1 inline-block",
                    order.status === 'Delivered' ? "bg-emerald-50 text-emerald-600" :
                    order.status === 'Processing' ? "bg-amber-50 text-amber-600" :
                    "bg-blue-50 text-blue-600"
                  )}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <Link href="#" className="w-full py-3 text-center text-sm font-bold text-tenant-primary hover:text-tenant-primary/80 mt-4 border-t border-tenant-muted/10 pt-4">
            View All Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
