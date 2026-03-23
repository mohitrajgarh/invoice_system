"use client";

import { InvoiceData } from "@/lib/types";

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
          className="mb-5 p-4 border border-gray-200 rounded-2xl bg-white shadow-sm"
        >

          {/* SERVICE */}
          <div className="mb-3">
            <label className="text-xs text-gray-500 mb-1 block">
              Service Name
            </label>

            <input
              placeholder="Enter service"
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
          </div>

          {/* QTY + RATE */}
          <div className="grid grid-cols-2 gap-3 mb-3">

            {/* Quantity */}
            <div>
              <label className="text-xs text-gray-500 mb-1 block">
                Quantity
              </label>

              <input
                type="number"
                placeholder="1"
                value={item.quantity || ""}
                onChange={(e) => {
                  const updated = [...data.billing.items];
                  const qty = Number(e.target.value);

                  updated[index].quantity = qty;
                  updated[index].amount = qty * updated[index].rate;

                  setData({
                    ...data,
                    billing: { ...data.billing, items: updated },
                  });
                }}
                className="w-full p-3 border border-gray-300 rounded-xl 
          placeholder:text-gray-400 
          focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
              />
            </div>

            {/* Rate */}
            <div>
              <label className="text-xs text-gray-500 mb-1 block">
                Rate (₹)
              </label>

              <input
                type="number"
                placeholder="0.00"
                value={item.rate || ""}
                onChange={(e) => {
                  const updated = [...data.billing.items];
                  const rate = Number(e.target.value);

                  updated[index].rate = rate;
                  updated[index].amount = updated[index].quantity * rate;

                  setData({
                    ...data,
                    billing: { ...data.billing, items: updated },
                  });
                }}
                className="w-full p-3 border border-gray-300 rounded-xl 
          placeholder:text-gray-400 
          focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
              />
            </div>

          </div>

          {/* AMOUNT */}
          <div>
            <label className="text-xs text-gray-500 mb-1 block">
              Amount
            </label>

            <input
              type="number"
              value={item.amount || ""}
              readOnly
              className="w-full p-3 border border-[#3ABBF9]/30 bg-[#3ABBF9]/5 rounded-xl 
        font-semibold text-[#383838]"
            />
          </div>

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
              className="mt-3 text-sm font-medium text-red-500 hover:text-red-600 transition"
              >
              Delete
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
                { service: "", amount: 0, quantity: 1, rate: 0 },
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