import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
}

export function StatCard({ title, value, icon: Icon, trend, className }: StatCardProps) {
  return (
    <Card className={cn("p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 backdrop-blur-none rounded-xl", className)}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide">{title}</h3>
        <div className="h-10 w-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
          <Icon className="h-5 w-5 text-slate-700" strokeWidth={2.5} />
        </div>
      </div>
      <div>
        <div className="text-4xl font-extrabold text-slate-900 tracking-tight">{value}</div>
        {trend && (
          <div className="mt-3 flex items-center text-sm font-semibold">
            <span className={cn(
              "inline-flex items-center px-1.5 py-0.5 rounded-md text-xs",
              trend.isPositive ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
            )}>
              {trend.isPositive ? "+" : "-"}{trend.value}
            </span>
            <span className="text-slate-500 ml-2 font-medium">vs last month</span>
          </div>
        )}
      </div>
    </Card>
  );
}
