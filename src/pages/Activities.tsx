import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { HamburgerMenu } from "@/components/HamburgerMenu";

type Activity = {
  id: number;
  title: string;
  description: string;
  date: string;
  type: "income" | "expense";
  amount: number;
};

const activities: Activity[] = [
  {
    id: 1,
    title: "เงินเดือนเข้า",
    description: "รับเงินเดือนประจำเดือนกรกฎาคม",
    date: "2024-07-01",
    type: "income",
    amount: 35000,
  },
  {
    id: 2,
    title: "ซื้อหุ้น A",
    description: "ลงทุนในหุ้น A",
    date: "2024-07-03",
    type: "expense",
    amount: -10000,
  },
  {
    id: 3,
    title: "รับเงินปันผล",
    description: "ได้รับเงินปันผลจากกองทุนรวม",
    date: "2024-07-05",
    type: "income",
    amount: 2000,
  },
  {
    id: 4,
    title: "ซื้อทองคำ",
    description: "ลงทุนในทองคำ",
    date: "2024-07-10",
    type: "expense",
    amount: -5000,
  },
];

export default function Activities() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-[#18181b] dark:via-[#23272f] dark:to-[#18181b] transition-colors duration-500">
      <ThemeToggleButton />
      <HamburgerMenu />
      <div className="max-w-2xl mx-auto py-12 px-4">
        <Card className="rounded-2xl shadow-xl border-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              กิจกรรมล่าสุด
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="divide-y divide-gray-200 dark:divide-gray-800">
              {activities.map((activity) => (
                <li
                  key={activity.id}
                  className="flex items-center justify-between py-4 px-2 hover:bg-indigo-50/60 dark:hover:bg-zinc-800/60 rounded transition-colors"
                >
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-gray-100">
                      {activity.title}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {activity.description}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {new Date(activity.date).toLocaleDateString("th-TH", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                  <div
                    className={`font-mono text-lg ${
                      activity.type === "income"
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-rose-600 dark:text-rose-400"
                    }`}
                  >
                    {activity.amount > 0
                      ? `+${activity.amount.toLocaleString()}`
                      : activity.amount.toLocaleString()}{" "}
                    ฿
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}