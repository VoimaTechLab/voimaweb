import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Card from "./Card";

export default function StatCard({ label, value, icon: Icon, trend, index = 0 }) {
  const positive = trend >= 0;
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
      <Card className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-500">{label}</span>
          {Icon && (
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-50 text-primary-500">
              <Icon className="h-4 w-4" />
            </span>
          )}
        </div>
        <div className="mt-3 flex items-end justify-between">
          <span className="text-3xl font-semibold tracking-tight text-neutral-900">{value}</span>
          {trend !== undefined && (
            <span className={`flex items-center gap-0.5 text-xs font-medium ${positive ? "text-success-500" : "text-danger-500"}`}>
              {positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
              {Math.abs(trend)}%
            </span>
          )}
        </div>
      </Card>
    </motion.div>
  );
}