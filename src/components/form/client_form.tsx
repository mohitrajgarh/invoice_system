"use client";

import { InvoiceData } from "@/lib/types";

interface Props {
    data: InvoiceData;
    setData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

export default function ClientForm({ data, setData }: Props) {
    return (
        <div className="mb-6 p-5 bg-white rounded-2xl shadow border border-gray-100">
            <h2 className="text-lg font-semibold text-[#383838] mb-4">
                Client Details
            </h2>

            <input
                placeholder="Client Name"
                value={data.client.name}
                onChange={(e) =>
                    setData({
                        ...data,
                        client: {
                            ...data.client,
                            name: e.target.value,
                        },
                    })
                }
                className="w-full p-3 mb-3 border rounded-xl focus:ring-2 focus:ring-[#3ABBF9]"
            />
            <input
                placeholder="Phone"
                value={data.client.phone}
                onChange={(e) =>
                    setData({
                        ...data,
                        client: {
                            ...data.client,
                            phone: e.target.value,
                        },
                    })
                }
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#3ABBF9]"
            />
        </div>
    );
}