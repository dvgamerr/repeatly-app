import { Badge } from "@/components/ui/badge";

type Asset = {
  name: string;
  value: number;
  type: string;
};

interface AssetListProps {
  assets: Asset[];
  minimal?: boolean;
}

export const AssetList = ({ assets, minimal }: AssetListProps) => (
  <ul className="divide-y divide-[#ececec] dark:divide-zinc-800">
    {assets.map((asset) => (
      <li
        key={asset.name}
        className={`flex items-center justify-between py-2 px-1 transition-colors ${
          minimal
            ? "hover:bg-gray-50 dark:hover:bg-zinc-800/40"
            : "hover:bg-indigo-50/60 dark:hover:bg-zinc-800/60"
        } rounded`}
      >
        <span className="font-medium text-gray-700 dark:text-gray-100 text-sm">{asset.name}</span>
        <div className="flex items-center gap-2">
          <Badge
            variant="secondary"
            className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-zinc-800/60 text-gray-500 dark:text-gray-300 border border-[#ececec] dark:border-zinc-700"
          >
            {asset.type}
          </Badge>
          <span className="text-right font-mono text-base text-gray-900 dark:text-cyan-300">
            {asset.value.toLocaleString()} ฿
          </span>
        </div>
      </li>
    ))}
  </ul>
);

export type { Asset };