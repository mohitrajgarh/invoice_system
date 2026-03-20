"use client";

import { InvoiceData } from "@/lib/types";

interface Props {
  data: InvoiceData;
  setData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

export default function InvoiceDetails({ data, setData }: Props) {
  return (
    <div className="mb-6 p-5 bg-white text-black rounded-2xl shadow border border-gray-200">

      <h2 className="text-lg font-semibold text-[#383838] mb-4">
        Invoice Details
      </h2>

      {/* INVOICE NUMBER */}
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
        className="w-full p-3 mb-3 border border-gray-300 rounded-xl 
        placeholder:text-gray-400
        focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
      />

      {/* CUSTOMER ID */}
      <input
        placeholder="Customer ID"
        value={data.invoice.customerId}
        onChange={(e) =>
          setData({
            ...data,
            invoice: {
              ...data.invoice,
              customerId: e.target.value,
            },
          })
        }
        className="w-full p-3 mb-3 border border-gray-300 rounded-xl 
        placeholder:text-gray-400
        focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
      />

      {/* DATE */}
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Invoice Date
        </label>

        <input
          type="date"
          value={data.invoice.date || ""}
          onChange={(e) =>
            setData({
              ...data,
              invoice: {
                ...data.invoice,
                date: e.target.value,
              },
            })
          }
          className="w-full p-3 border border-gray-300 rounded-xl 
    focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
        />
      </div>

      {/* DUE DATE */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Due Date
        </label>

        <input
          type="date"
          value={data.invoice.dueDate || ""}
          onChange={(e) =>
            setData({
              ...data,
              invoice: {
                ...data.invoice,
                dueDate: e.target.value,
              },
            })
          }
          className="w-full p-3 border border-gray-300 rounded-xl 
    focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
        />
      </div>
    </div>
  );
}