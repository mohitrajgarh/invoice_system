"use client";

import { InvoiceData } from "@/lib/types";
interface Props {
    data: InvoiceData;
    setData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

export default function PaymentForm({ data, setData }: Props) {
    return (
        <div className="mb-6 p-5 bg-white text-black rounded-2xl shadow border border-gray-200">

            <h2 className="text-lg font-semibold text-[#383838] mb-4">
                Payment Info
            </h2>

            {/* STATUS */}
            <div className="mb-3">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                    Payment Status
                </label>

                <select
                    value={data.payment.status}
                    onChange={(e) =>
                        setData({
                            ...data,
                            payment: {
                                ...data.payment,
                                status: e.target.value as "Pending" | "Paid",
                            },
                        })
                    }
                    className="w-full p-3 border border-gray-300 rounded-xl 
          focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
                >
                    <option value="Pending">Pending</option>
                    <option value="Paid">Paid</option>
                </select>
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