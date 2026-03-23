"use client";

import { InvoiceData } from "@/lib/types";

interface Props {
    data: InvoiceData;
    setData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

export default function ClientForm({ data, setData }: Props) {
    return (
        <div className="mb-6 p-5 bg-white text-black rounded-2xl shadow border border-gray-200">

            <h2 className="text-lg font-semibold text-[#383838] mb-4">
                Client Details
            </h2>

            {/* CLIENT NAME */}
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
                className="w-full p-3 mb-3 border border-gray-300 rounded-xl 
        placeholder:text-gray-400
        focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
            />

            {/* COMPANY NAME */}
            <input
                placeholder="Company Name"
                value={data.client.company}
                onChange={(e) =>
                    setData({
                        ...data,
                        client: {
                            ...data.client,
                            company: e.target.value,
                        },
                    })
                }
                className="w-full p-3 mb-3 border border-gray-300 rounded-xl 
        placeholder:text-gray-400
        focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
            />

            {/* Compamy website */}
            <input
                placeholder="Website (optional)"
                value={data.client.client_website || ""}
                onChange={(e) =>
                    setData({
                        ...data,
                        client: {
                            ...data.client,
                            client_website: e.target.value,
                        },
                    })
                }
                className="w-full p-3 mb-3 border border-gray-300 rounded-xl 
        placeholder:text-gray-400
        focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
            />

            {/* ADDRESS */}
            <input
                placeholder="Address"
                value={data.client.address}
                onChange={(e) =>
                    setData({
                        ...data,
                        client: {
                            ...data.client,
                            address: e.target.value,
                        },
                    })
                }
                className="w-full p-3 mb-3 border border-gray-300 rounded-xl 
        placeholder:text-gray-400
        focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
            />

            {/* EMAIL */}
            <input
                type="email"
                placeholder="Email"
                value={data.client.email}
                onChange={(e) =>
                    setData({
                        ...data,
                        client: {
                            ...data.client,
                            email: e.target.value,
                        },
                    })
                }
                className="w-full p-3 mb-3 border border-gray-300 rounded-xl 
        placeholder:text-gray-400
        focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
            />

            {/* PHONE */}
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
                className="w-full p-3 mb-3 border border-gray-300 rounded-xl 
        placeholder:text-gray-400
        focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
            />

            {/* Client GST Number */}
            <input
                placeholder="Client GST Number"
                value={data.client.client_gstNumber || ""}
                onChange={(e) =>
                    setData({
                        ...data,
                        client: {
                            ...data.client,
                            client_gstNumber: e.target.value
                        }
                    })
                }
                className="w-full p-3 mb-3 border border-gray-300 rounded-xl 
        placeholder:text-gray-400
        focus:outline-none focus:ring-1 focus:ring-[#3ABBF9]/60 focus:border-[#3ABBF9]"
            />
        </div>
    );
}