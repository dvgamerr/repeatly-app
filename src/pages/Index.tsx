import { AssetList, Asset } from "@/components/AssetList";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const assets: Asset[] = [
  { name: "เงินฝากธนาคาร", value: 120000, type: "เงินสด" },
  { name: "หุ้น A", value: 80000, type: "หุ้น" },
  { name: "กองทุนรวม", value: 50000, type: "กองทุน" },
  { name: "ทองคำ", value: 30000, type: "ทอง" },
];

const COLORS = ["#fbbf24", "#60a5fa", "#a3e635", "#f472b6"];

const total = assets.reduce((sum, a) => sum + a.value, 0);
const profit = 12000;
const profitPercent = (profit / (total - profit)) * 100;

export default function Index() {
  return (
    <div className="min-h-screen transition-colors duration-500 relative z-10 overflow-hidden bg-gradient-to-b from-[#1e3c72] via-[#2a5298] to-[#e0eafc]">
      <Navbar />
      <div className="max-w-3xl mx-auto py-12 px-2 flex flex-col gap-6">
        {/* ยอดทรัพย์สินทั้งหมด */}
        <div className="rounded-2xl p-6 bg-white/90 shadow-lg border border-white/60 backdrop-blur-sm">
          <div className="pb-1">
            <div className="text-lg font-bold text-gray-900">
              ยอดทรัพย์สินทั้งหมด
            </div>
          </div>
          <div>
            <div className="text-4xl font-extrabold mb-1 text-gray-800">
              {total.toLocaleString()} ฿
            </div>
            <div className="flex items-center text-sm text-gray-500">
              {profit >= 0 ? (
                <span className="flex items-center text-emerald-600 font-semibold">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  +{profit.toLocaleString()} ฿ ({profitPercent.toFixed(1)}%)
                </span>
              ) : (
                <span className="flex items-center text-rose-600 font-semibold">
                  <ArrowDownRight className="w-4 h-4 mr-1" />
                  {profit.toLocaleString()} ฿ ({profitPercent.toFixed(1)}%)
                </span>
              )}
              <span className="ml-2 text-xs text-gray-400">(เทียบกับเดือนที่แล้ว)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* สัดส่วนทรัพย์สิน */}
          <div className="rounded-2xl shadow-lg border border-white/60 bg-white/90 backdrop-blur-sm p-6 flex flex-col justify-center">
            <div className="pb-1">
              <div className="text-base font-semibold text-gray-800">
                สัดส่วนทรัพย์สิน
              </div>
            </div>
            <div className="w-full h-56 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={assets}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    innerRadius={40}
                    label={({ name }) => name}
                    labelLine={false}
                    isAnimationActive={false}
                  >
                    {assets.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "#fff",
                      borderRadius: 10,
                      border: "none",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                      color: "#222",
                      fontSize: 13,
                      padding: 8,
                    }}
                    wrapperStyle={{ outline: "none" }}
                    formatter={(value: number) => `${value.toLocaleString()} ฿`}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* รายการทรัพย์สิน */}
          <div className="rounded-2xl shadow-lg border border-white/60 bg-white/90 backdrop-blur-sm p-6">
            <div className="pb-1">
              <div className="text-base font-semibold text-gray-800">
                รายการทรัพย์สิน
              </div>
            </div>
            <AssetList assets={assets} minimal />
          </div>
        </div>
      </div>
    </div>
  );
}