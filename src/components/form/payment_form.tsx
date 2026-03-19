"use client";

import { InvoiceData } from "@/lib/types";

interface Props {
    data: InvoiceData;
    setData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

export default function PaymentForm({ data, setData }: Props) {
    return (
        <div className="mb-6 p-5 bg-white rounded-2xl shadow border border-gray-100">
            <h2 className="text-lg font-semibold text-[#383838] mb-4">
                Payment Info
            </h2>

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
                className="w-full p-3 mb-3 border rounded-xl focus:ring-2 focus:ring-[#3ABBF9]"
            >
                <option value="Pending">Pending</option>
                <option value="Paid">Paid</option>
            </select>

            <input
                placeholder="Bank / UPI Details"
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
                className="w-full p-3 mb-3 border rounded-xl focus:ring-2 focus:ring-[#3ABBF9]"
            />


            <textarea
                placeholder="Notes"
                value={data.notes}
                onChange={(e) =>
                    setData({
                        ...data,
                        notes: e.target.value,
                    })
                }
                className="w-full p-3 border rounded-xl h-24 focus:ring-2 focus:ring-[#3ABBF9]"
            />
        </div>
    );
}