"use client";

import { InvoiceData } from "@/lib/types";

interface Props {
  data: InvoiceData;
  setData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

export default function InvoiceDetails({ data, setData }: Props) {
  return (
    <div className="mb-5 p-4 bg-white text-black rounded-xl border border-gray-200">

      <h2 className="text-base font-semibold text-gray-800 mb-3">
        Invoice Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* INVOICE NUMBER */}
        <div>
          <label className="text-[11px] text-gray-500 mb-1 block">
            Invoice Number
          </label>
          <input
            placeholder="INV-001"
            value={data.invoice.number}
            onChange={(e) =>
              setData({
                ...data,
                invoice: { ...data.invoice, number: e.target.value },
              })
            }
            className="w-full h-10 px-3 text-sm rounded-md border border-gray-300 
            placeholder:text-gray-400
            focus:outline-none focus:border-[#3ABBF9] focus:ring-1 focus:ring-[#3ABBF9]/30"
          />
        </div>

        {/* CUSTOMER ID */}
        <div>
          <label className="text-[11px] text-gray-500 mb-1 block">
            Customer ID
          </label>
          <input
            placeholder="CUST-001"
            value={data.invoice.customerId}
            onChange={(e) =>
              setData({
                ...data,
                invoice: { ...data.invoice, customerId: e.target.value },
              })
            }
            className="w-full h-10 px-3 text-sm rounded-md border border-gray-300 
            placeholder:text-gray-400
            focus:outline-none focus:border-[#3ABBF9] focus:ring-1 focus:ring-[#3ABBF9]/30"
          />
        </div>

        {/* INVOICE DATE */}
        <div>
          <label className="text-[11px] text-gray-500 mb-1 block">
            Invoice Date
          </label>
          <input
            type="date"
            value={data.invoice.date || ""}
            onChange={(e) =>
              setData({
                ...data,
                invoice: { ...data.invoice, date: e.target.value },
              })
            }
            className="w-full h-10 px-3 text-sm rounded-md border border-gray-300 
            focus:outline-none focus:border-[#3ABBF9] focus:ring-1 focus:ring-[#3ABBF9]/30"
          />
        </div>

        {/* DUE DATE */}
        <div>
          <label className="text-[11px] text-gray-500 mb-1 block">
            Due Date
          </label>
          <input
            type="date"
            value={data.invoice.dueDate || ""}
            onChange={(e) =>
              setData({
                ...data,
                invoice: { ...data.invoice, dueDate: e.target.value },
              })
            }
            className="w-full h-10 px-3 text-sm rounded-md border border-gray-300 
            focus:outline-none focus:border-[#3ABBF9] focus:ring-1 focus:ring-[#3ABBF9]/30"
          />
        </div>

      </div>

    </div>
  );
}