import { StatCard } from "@/components/dashboard/StatCard";
import { Card } from "@/components/ui/Card";
import { Users, Server, CreditCard, Activity, ArrowUpRight, Plus, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function SuperAdminDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Dashboard Overview</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Metrics and activity for MicroSaaS Enterprise platform.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="h-10 px-4 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm rounded-lg">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="primary" className="h-10 px-4 bg-violet-600 hover:bg-violet-700 shadow-sm rounded-lg">
            <Plus className="h-4 w-4 mr-2" />
            New Tenant
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Active Tenants" 
          value="1,248" 
          icon={Users} 
          trend={{ value: "12%", isPositive: true }} 
        />
        <StatCard 
          title="Monthly Recurring Revenue" 
          value="$124,500" 
          icon={CreditCard} 
          trend={{ value: "8.4%", isPositive: true }} 
        />
        <StatCard 
          title="Active Databases" 
          value="1,302" 
          icon={Server} 
          trend={{ value: "4.1%", isPositive: true }} 
        />
        <StatCard 
          title="System Health" 
          value="99.99%" 
          icon={Activity} 
          trend={{ value: "0.01%", isPositive: false }} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Placeholder */}
        <Card className="lg:col-span-2 p-0 bg-white border border-slate-200 shadow-sm backdrop-blur-none rounded-xl overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
            <h2 className="text-lg font-bold text-slate-900">Revenue Growth</h2>
            <select className="bg-slate-50 border border-slate-200 rounded-md text-sm font-medium px-3 py-1.5 text-slate-700 outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-shadow cursor-pointer">
              <option>Last 30 Days</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="flex-1 p-6 flex items-center justify-center bg-slate-50/50">
            <div className="h-64 w-full border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center text-slate-400 gap-2">
              <Activity className="h-8 w-8 text-slate-300" />
              <span className="font-medium">Chart visualization component</span>
            </div>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-0 bg-white border border-slate-200 shadow-sm backdrop-blur-none rounded-xl overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100 bg-white flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
            <button className="text-sm font-semibold text-violet-600 hover:text-violet-700 flex items-center">
              View All <ArrowUpRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="p-6 flex-1 overflow-y-auto">
            <div className="space-y-6">
              {[
                { tenant: "Acme Corp", action: "upgraded to Enterprise", time: "2h ago", color: "bg-blue-100 text-blue-700" },
                { tenant: "TechFlow", action: "provisioned new cluster", time: "4h ago", color: "bg-violet-100 text-violet-700" },
                { tenant: "GlobalTech", action: "added 50 users", time: "5h ago", color: "bg-slate-100 text-slate-700" },
                { tenant: "StartupX", action: "started trial", time: "8h ago", color: "bg-emerald-100 text-emerald-700" },
                { tenant: "DataSys", action: "downgraded plan", time: "1d ago", color: "bg-amber-100 text-amber-700" },
              ].map((activity, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className={cn("h-8 w-8 rounded-full flex items-center justify-center shrink-0 mt-0.5", activity.color)}>
                    <Activity className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 leading-tight">
                      {activity.tenant} <span className="font-normal text-slate-600">{activity.action}</span>
                    </p>
                    <p className="text-xs font-medium text-slate-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Data Table Placeholder */}
      <Card className="p-0 bg-white border border-slate-200 shadow-sm backdrop-blur-none rounded-xl overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-white flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Latest Tenants</h2>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Search tenants..." 
              className="bg-slate-50 border border-slate-200 rounded-md text-sm font-medium px-3 py-1.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 w-48"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500">
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Tenant Name</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Domain</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Plan</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Status</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs text-right">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: "Acme Corp", domain: "acme.microsaas.com", plan: "Enterprise", status: "Active", date: "Oct 24, 2024" },
                { name: "TechFlow", domain: "app.techflow.io", plan: "Pro", status: "Active", date: "Oct 23, 2024" },
                { name: "StartupX", domain: "startupx.microsaas.com", plan: "Starter", status: "Trialing", date: "Oct 22, 2024" },
                { name: "DevShop", domain: "devshop.microsaas.com", plan: "Pro", status: "Past Due", date: "Oct 20, 2024" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors cursor-pointer group">
                  <td className="px-6 py-4 font-semibold text-slate-900 group-hover:text-violet-700 transition-colors">{row.name}</td>
                  <td className="px-6 py-4 text-slate-600 font-medium">{row.domain}</td>
                  <td className="px-6 py-4 text-slate-700 font-semibold">{row.plan}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide",
                      row.status === "Active" ? "bg-emerald-100 text-emerald-700" :
                      row.status === "Trialing" ? "bg-blue-100 text-blue-700" :
                      "bg-red-100 text-red-700"
                    )}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 text-right font-medium">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
