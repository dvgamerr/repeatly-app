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
  <div className="mt-6">
    <h3 className="text-lg font-semibold mb-2">รายการทรัพย์สิน</h3>
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {assets.map((asset) => (
        <li key={asset.name} className="flex items-center justify-between py-2">
          <span className="font-medium">{asset.name}</span>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{asset.type}</Badge>
            <span className="text-right font-mono">{asset.value.toLocaleString()} ฿</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export type { Asset };