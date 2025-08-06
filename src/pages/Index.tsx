import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AssetList, Asset } from "@/components/AssetList";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const assets: Asset[] = [
  { name: "เงินฝากธนาคาร", value: 120000, type: "เงินสด" },
  { name: "หุ้น A", value: 80000, type: "หุ้น" },
  { name: "กองทุนรวม", value: 50000, type: "กองทุน" },
  { name: "ทองคำ", value: 30000, type: "ทอง" },
];

const total = assets.reduce((sum, a) => sum + a.value, 0);
const profit = 12000;
const profitPercent = (profit / (total - profit)) * 100;

export default function Index() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] dark:bg-[#18181b] transition-colors duration-500">
      <Navbar />
      <div className="max-w-3xl mx-auto py-12 px-2 flex flex-col gap-6">
        <Card className="rounded-xl shadow-sm border border-[#ececec] dark:border-zinc-800 bg-white dark:bg-zinc-900/90">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
              ยอดทรัพย์สินทั้งหมด
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-extrabold mb-1 text-gray-800 dark:text-cyan-300">
              {total.toLocaleString()} ฿
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-300">
              {profit >= 0 ? (
                <span className="flex items-center text-emerald-600 dark:text-emerald-400 font-semibold">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  +{profit.toLocaleString()} ฿ ({profitPercent.toFixed(1)}%)
                </span>
              ) : (
                <span className="flex items-center text-rose-600 dark:text-rose-400 font-semibold">
                  <ArrowDownRight className="w-4 h-4 mr-1" />
                  {profit.toLocaleString()} ฿ ({profitPercent.toFixed(1)}%)
                </span>
              )}
              <span className="ml-2 text-xs text-gray-400">(เทียบกับเดือนที่แล้ว)</span>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="rounded-xl shadow-sm border border-[#ececec] dark:border-zinc-800 bg-white dark:bg-zinc-900/90 md:col-span-2">
            <CardHeader className="pb-1">
              <CardTitle className="text-base font-semibold text-gray-800 dark:text-gray-200">
                รายการทรัพย์สิน
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AssetList assets={assets} minimal />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}