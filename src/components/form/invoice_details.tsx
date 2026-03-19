"use client";

import { InvoiceData } from "@/lib/types";

interface Props {
  data: InvoiceData;
  setData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

export default function InvoiceDetails({ data, setData }: Props) {
  return (
    <div className="mb-6 p-5 bg-white rounded-2xl shadow border border-gray-100">
      <h2 className="text-lg font-semibold text-[#383838] mb-4">
        Invoice Info
      </h2>

      <input
        placeholder="Invoice Number"
        value={data.invoice.number}
        onChange={(e) =>
          setData({
            ...data,
            invoice: {
              ...data.invoice,
              number: e.target.value,
            },
          })
        }
        className="w-full p-3 mb-3 border rounded-xl focus:ring-2 focus:ring-[#3ABBF9]"
      />

      <input
        type="date"
        value={data.invoice.date}
        onChange={(e) =>
          setData({
            ...data,
            invoice: {
              ...data.invoice,
              date: e.target.value,
            },
          })
        }
        className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#3ABBF9]"
      />
    </div>
  );
}