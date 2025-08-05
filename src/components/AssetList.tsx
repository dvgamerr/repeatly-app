import { Badge } from "@/components/ui/badge";

type Asset = {
  name: string;
  value: number;
  type: string;
};

interface AssetListProps {
  assets: Asset[];
}

export const AssetList = ({ assets }: AssetListProps) => (
  <div>
    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">รายการทรัพย์สิน</h3>
    <ul className="divide-y divide-gray-200 dark:divide-gray-800 rounded-xl overflow-hidden shadow-sm bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md">
      {assets.map((asset) => (
        <li
          key={asset.name}
          className="flex items-center justify-between py-3 px-4 transition-colors hover:bg-indigo-50/60 dark:hover:bg-zinc-800/60"
        >
          <span className="font-medium text-gray-700 dark:text-gray-100">{asset.name}</span>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs px-2 py-1 rounded">{asset.type}</Badge>
            <span className="text-right font-mono text-base text-gray-900 dark:text-cyan-300">
              {asset.value.toLocaleString()} ฿
            </span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export type { Asset };