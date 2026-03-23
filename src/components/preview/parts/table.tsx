import { InvoiceData } from "@/lib/types";

interface Props {
  items: InvoiceData["billing"]["items"];
  formatCurrency: (n: number) => string;
}

export default function Table({ items, formatCurrency }: Props) {
  return (
    <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">

      <thead className="bg-[#F9FAFB] text-gray-600">
        <tr>
          <th className="p-3 text-left border-b">Service</th>
          <th className="p-3 text-center border-b">Qty</th>
          <th className="p-3 text-right border-b">Rate</th>
          <th className="p-3 text-right border-b">Amount</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item: InvoiceData["billing"]["items"][number], i: number) => (
          <tr key={i} className="border-t border-gray-100">

            <td className="p-3 text-left">
              {item.service || "-"}
            </td>

            <td className="p-3 text-center">
              {item.quantity ?? "-"}
            </td>

            <td className="p-3 text-right">
              {formatCurrency(item.rate ?? 0)}
            </td>

            <td className="p-3 text-right font-medium">
              {formatCurrency(item.amount ?? 0)}
            </td>

          </tr>
        ))}
      </tbody>

    </table>
  );
}