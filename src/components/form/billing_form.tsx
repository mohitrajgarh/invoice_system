"use client"
import { InvoiceData } from "@/lib/types"

interface Props {
    data: InvoiceData,
    setData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

export default function BillingForm({ data, setData }: Props) {
    return (
        <div className="mb-6 p-5 bg-white rounded-2xl shadow border border-gray-100">
            <h2 className="text-lg font-semibold text-[#383838] mb-4">
                Billing Details
            </h2>

            <input
                placeholder="Service Details"
                value={data.billing.service}
                onChange={(e) =>
                    setData({
                        ...data,
                        billing: {
                            ...data.billing,
                            service: e.target.value
                        }
                    })
                }
                className="w-full p-3 mb-3 border rounded-xl focus:ring-2 focus:ring-[#3ABBF9]"
            />

            <input
                type="number"
                placeholder="Amount"
                value={data.billing.amount}
                onChange={(e) =>
                    setData({
                        ...data,
                        billing: {
                            ...data.billing,
                            amount: Number(e.target.value),
                        }
                    })
                }
                className="w-full p-3 mb-3 border rounded-xl focus:ring-2 focus:ring-[#3ABBF9]"
            />

            <input
                type="number"
                defaultValue={18}
                placeholder="GST %"
                value={data.billing.gst}
                onChange={(e) =>
                    setData({
                        ...data,
                        billing: {
                            ...data.billing,
                            gst: Number(e.target.value),
                        }
                    })
                }
                className="w-full p-3 mb-3 border rounded-xl focus:ring-2 focus:ring-[#3ABBF9]"
            />

            <input
                type="number"
                placeholder="Discount"
                value={data.billing.discount}
                onChange={(e) =>
                    setData({
                        ...data,
                        billing: {
                            ...data.billing,
                            discount: Number(e.target.value),
                        },
                    })
                }
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#3ABBF9]"
            />
        </div>
    )
}