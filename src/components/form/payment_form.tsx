"use client";

import { InvoiceData } from "@/lib/types";
import { useState } from "react";

interface Props {
  data: InvoiceData;
  setData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

export default function PaymentForm({ data, setData }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-5 p-4 bg-white text-black rounded-xl border border-gray-200">

      <h2 className="text-base font-semibold text-gray-800 mb-3">
        Payment Info
      </h2>

      {/* STATUS */}
      <div className="mb-4">
        <label className="text-[11px] text-gray-500 mb-1 block">
          Payment Status
        </label>

        <div className="relative">
          {/* SELECT */}
          <div
            onClick={() => setOpen(!open)}
            className={`
              w-full h-10 px-3 text-sm rounded-md border cursor-pointer 
              flex items-center justify-between
              ${data.payment.status === "Paid"
                ? "bg-green-50 border-green-300 text-green-600"
                : "bg-orange-50 border-orange-300 text-orange-600"
              }
            `}
          >
            <span>
              {data.payment.status === "Paid" ? "🟢 Paid" : "🟠 Pending"}
            </span>
            <span className="text-xs">▾</span>
          </div>

          {/* DROPDOWN */}
          {open && (
            <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-md shadow z-10 overflow-hidden">

              <div
                onClick={() => {
                  setData({
                    ...data,
                    payment: { ...data.payment, status: "Pending" },
                  });
                  setOpen(false);
                }}
                className="px-3 py-2 text-sm hover:bg-orange-50 cursor-pointer text-orange-600"
              >
                🟠 Pending
              </div>

              <div
                onClick={() => {
                  setData({
                    ...data,
                    payment: { ...data.payment, status: "Paid" },
                  });
                  setOpen(false);
                }}
                className="px-3 py-2 text-sm hover:bg-green-50 cursor-pointer text-green-600"
              >
                🟢 Paid
              </div>

            </div>
          )}
        </div>
      </div>

      {/* PAYMENT DETAILS */}
      <div className="mb-4">
        <label className="text-[11px] text-gray-500 mb-1 block">
          Bank / UPI Details
        </label>

        <input
          placeholder="UPI ID / Account Number"
          value={data.payment.details}
          onChange={(e) =>
            setData({
              ...data,
              payment: {
                ...data.payment,
                details: e.target.value,
              },
            })
          }
          className="w-full h-10 px-3 text-sm rounded-md border border-gray-300 
          placeholder:text-gray-400
          focus:outline-none focus:border-[#3ABBF9] focus:ring-1 focus:ring-[#3ABBF9]/30"
        />
      </div>

      {/* NOTES */}
      <div>
        <label className="text-[11px] text-gray-500 mb-1 block">
          Notes (optional)
        </label>

        <textarea
          placeholder="Additional information..."
          value={data.notes}
          onChange={(e) =>
            setData({
              ...data,
              notes: e.target.value,
            })
          }
          className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 h-20 
          placeholder:text-gray-400
          focus:outline-none focus:border-[#3ABBF9] focus:ring-1 focus:ring-[#3ABBF9]/30"
        />
      </div>

    </div>
  );
}