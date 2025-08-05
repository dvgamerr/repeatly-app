import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AssetList, Asset } from "@/components/AssetList";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";

const assets: Asset[] = [
  { name: "เงินฝากธนาคาร", value: 120000, type: "เงินสด" },
  { name: "หุ้น A", value: 80000, type: "หุ้น" },
  { name: "กองทุนรวม", value: 50000, type: "กองทุน" },
  { name: "ทองคำ", value: 30000, type: "ทอง" },
];

const COLORS = ["#6366f1", "#22d3ee", "#f59e42", "#f43f5e"];

const total = assets.reduce((sum, a) => sum + a.value, 0);
const profit = 12000;
const profitPercent = (profit / (total - profit)) * 100;

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-[#18181b] dark:via-[#23272f] dark:to-[#18181b] transition-colors duration-500">
      <ThemeToggleButton />
      <div className="max-w-2xl mx-auto py-12 px-4">
        <Card className="rounded-2xl shadow-xl border-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              ยอดทรัพย์สินทั้งหมด
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-black mb-2 text-indigo-600 dark:text-cyan-400 drop-shadow">
              {total.toLocaleString()} ฿
            </div>
            <div className="flex items-center text-base text-gray-500 dark:text-gray-300">
              {profit >= 0 ? (
                <span className="flex items-center text-emerald-600 dark:text-emerald-400 font-semibold">
                  <ArrowUpRight className="w-5 h-5 mr-1" />
                  +{profit.toLocaleString()} ฿ ({profitPercent.toFixed(1)}%)
                </span>
              ) : (
                <span className="flex items-center text-rose-600 dark:text-rose-400 font-semibold">
                  <ArrowDownRight className="w-5 h-5 mr-1" />
                  {profit.toLocaleString()} ฿ ({profitPercent.toFixed(1)}%)
                </span>
              )}
              <span className="ml-2 text-xs text-gray-400">(เทียบกับเดือนที่แล้ว)</span>
            </div>
          </CardContent>
        </Card>

        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">สัดส่วนทรัพย์สิน</h3>
          <div className="w-full h-64 bg-white/70 dark:bg-zinc-900/70 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-md">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={assets}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label={({ name }) => name}
                  labelLine={false}
                >
                  {assets.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "#fff",
                    borderRadius: 12,
                    border: "none",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    color: "#222",
                  }}
                  wrapperStyle={{ outline: "none" }}
                  formatter={(value: number) => `${value.toLocaleString()} ฿`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-10">
          <AssetList assets={assets} />
        </div>
      </div>
    </div>
  );
}