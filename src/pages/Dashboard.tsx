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
// สมมติว่ากำไรสุทธิ +12,000 (10%) หรือ -5,000 (-4%) (เปลี่ยนค่าตามต้องการ)
const profit = 12000;
const profitPercent = (profit / (total - profit)) * 100;

export default function Dashboard() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 relative">
      <ThemeToggleButton />
      <Card>
        <CardHeader>
          <CardTitle>ยอดทรัพย์สินทั้งหมด</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold mb-1">{total.toLocaleString()} ฿</div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            {profit >= 0 ? (
              <span className="flex items-center text-emerald-600 dark:text-emerald-400">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                +{profit.toLocaleString()} ฿ ({profitPercent.toFixed(1)}%)
              </span>
            ) : (
              <span className="flex items-center text-rose-600 dark:text-rose-400">
                <ArrowDownRight className="w-4 h-4 mr-1" />
                {profit.toLocaleString()} ฿ ({profitPercent.toFixed(1)}%)
              </span>
            )}
            <span className="ml-2 text-xs text-gray-400">(เทียบกับเดือนที่แล้ว)</span>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">สัดส่วนทรัพย์สิน</h3>
        <div className="w-full h-64 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center shadow">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={assets}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={({ name }) => name}
              >
                {assets.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `${value.toLocaleString()} ฿`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <AssetList assets={assets} />
    </div>
  );
}