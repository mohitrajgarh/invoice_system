"use client";

import { InvoiceData } from "@/lib/types";
interface Props {
    data: InvoiceData;
    setData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}
import { useState } from "react";

export default function PaymentForm({ data, setData }: Props) {
    const [open, setOpen] = useState(false);
    return (
        <div className="mb-6 p-5 bg-white text-black rounded-2xl shadow border border-gray-200">

            <h2 className="text-lg font-semibold text-[#383838] mb-4">
                Payment Info
            </h2>

            {/* STATUS */}


            <div className="relative">
                {/* SELECT BOX */}
                <div
                    onClick={() => setOpen(!open)}
                    className={`
      w-full p-3 rounded-xl border cursor-pointer flex justify-between items-center
      ${data.payment.status === "Paid"
                            ? "bg-green-50 border-green-300 text-green-600"
                            : "bg-orange-50 border-orange-300 text-orange-600"
                        }
    `}
                >
                    <span>
                        {data.payment.status === "Paid" ? "🟢 Paid" : "🟠 Pending"}
                    </span>
                    <span>▾</span>
                </div>

                {/* DROPDOWN */}
                {open && (
                    <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-xl shadow z-10 overflow-hidden">

                        <div
                            onClick={() => {
                                setData({
                                    ...data,
                                    payment: { ...data.payment, status: "Pending" },
                                });
                                setOpen(false);
                            }}
                            className="px-4 py-2 hover:bg-orange-50 cursor-pointer text-orange-600"
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
                            className="px-4 py-2 hover:bg-green-50 cursor-pointer text-green-600"
                        >
                            🟢 Paid
                        </div>

                    </div>
                )}
            </div>

            {/* PAYMENT DETAILS */}
            <div className="mb-3">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                    Bank / UPI Details
                </label>

                <input
                    placeholder="e.g. UPI ID / Account Number"
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
                    className="w-full p-3 border border-gray-300 rounded-xl 
          placeholder:text-gray-400
          focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
                />
            </div>

            {/* NOTES */}
            <div className="mb-3">
                <label className="block text-sm font-medium text-gray-600 mb-1">
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
                    className="w-full p-3 border border-gray-300 rounded-xl h-24 
          placeholder:text-gray-400
          focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
                />
            </div>


        </div>
    );
}