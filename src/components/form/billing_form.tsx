"use client";

import { InvoiceData } from "@/lib/types";
import { X } from "lucide-react";

interface Props {
  data: InvoiceData;
  setData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

export default function BillingForm({ data, setData }: Props) {
  return (
    <div className="mb-6 p-5 bg-white text-black rounded-2xl shadow border border-gray-200">

      <h2 className="text-lg font-semibold text-[#383838] mb-4">
        Billing Details
      </h2>

      {/* SERVICES */}
      {data.billing.items.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 sm:grid-cols-[1fr_120px_auto] gap-2 mb-3 items-center"
        >
          {/* SERVICE */}
          <input
            placeholder="Service"
            value={item.service}
            onChange={(e) => {
              const updated = [...data.billing.items];
              updated[index].service = e.target.value;

              setData({
                ...data,
                billing: { ...data.billing, items: updated },
              });
            }}
            className="w-full p-3 border border-gray-300 rounded-xl 
            placeholder:text-gray-400
            focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
          />

          {/* AMOUNT */}
          <input
            type="number"
            step="0.01"
            placeholder="₹"
            value={item.amount || ""}
            onChange={(e) => {
              const updated = [...data.billing.items];
              updated[index].amount = Number(e.target.value);

              setData({
                ...data,
                billing: { ...data.billing, items: updated },
              });
            }}
            className="w-full p-3 border border-gray-300 rounded-xl 
            placeholder:text-gray-400
            focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
          />

          {/* DELETE */}
          {data.billing.items.length > 1 && (
            <button
              onClick={() => {
                const updated = data.billing.items.filter((_, i) => i !== index);

                setData({
                  ...data,
                  billing: { ...data.billing, items: updated },
                });
              }}
              className="text-red-500 hover:bg-red-100 p-2 rounded-full transition justify-self-end"
            >
              <X size={16} />
            </button>
          )}
        </div>
      ))}

      {/* GST + DISCOUNT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">

        {/* GST */}
        <input
          type="number"
          step="0.01"
          placeholder="GST (%)"
          value={data.billing.gst || ""}
          onChange={(e) =>
            setData({
              ...data,
              billing: {
                ...data.billing,
                gst: Number(e.target.value),
              },
            })
          }
          className="w-full p-3 border border-gray-300 rounded-xl 
          placeholder:text-gray-400
          focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
        />

        {/* DISCOUNT ONLY % */}
        <input
          type="number"
          step="0.01"
          placeholder="Discount (%)"
          value={data.billing.discount || ""}
          onChange={(e) =>
            setData({
              ...data,
              billing: {
                ...data.billing,
                discount: Number(e.target.value),
              },
            })
          }
          className="w-full p-3 border border-gray-300 rounded-xl 
          placeholder:text-gray-400
          focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
        />

      </div>

      {/* ADD SERVICE */}
      <button
        onClick={() =>
          setData({
            ...data,
            billing: {
              ...data.billing,
              items: [
                ...data.billing.items,
                { service: "", amount: 0 },
              ],
            },
          })
        }
        className="mt-5 w-full border border-dashed border-[#3ABBF9] text-[#3ABBF9] 
        py-2 rounded-xl hover:bg-[#3ABBF9]/10 transition text-sm font-medium"
      >
        + Add Service
      </button>

    </div>
  );
}