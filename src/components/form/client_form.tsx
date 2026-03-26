"use client";

import { InvoiceData } from "@/lib/types";

interface Props {
  data: InvoiceData;
  setData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

export default function ClientForm({ data, setData }: Props) {
  return (
    <div className="mb-5 p-4 bg-white text-black rounded-xl border border-gray-200">

      <h2 className="text-base font-semibold text-gray-800 mb-3">
        Client Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* CLIENT NAME */}
        <div>
          <label className="text-[11px] text-gray-500 mb-1 block">
            Client Name
          </label>
          <input
            placeholder="Enter name"
            value={data.client.name}
            onChange={(e) =>
              setData({
                ...data,
                client: { ...data.client, name: e.target.value },
              })
            }
            className="w-full h-10 px-3 text-sm rounded-md border border-gray-300 
            placeholder:text-gray-400
            focus:outline-none focus:border-[#3ABBF9] focus:ring-1 focus:ring-[#3ABBF9]/30"
          />
        </div>

        {/* COMPANY NAME */}
        <div>
          <label className="text-[11px] text-gray-500 mb-1 block">
            Company Name
          </label>
          <input
            placeholder="Company"
            value={data.client.company}
            onChange={(e) =>
              setData({
                ...data,
                client: { ...data.client, company: e.target.value },
              })
            }
            className="w-full h-10 px-3 text-sm rounded-md border border-gray-300 
            placeholder:text-gray-400
            focus:outline-none focus:border-[#3ABBF9] focus:ring-1 focus:ring-[#3ABBF9]/30"
          />
        </div>

        {/* WEBSITE */}
        <div>
          <label className="text-[11px] text-gray-500 mb-1 block">
            Website
          </label>
          <input
            placeholder="Optional"
            value={data.client.client_website || ""}
            onChange={(e) =>
              setData({
                ...data,
                client: { ...data.client, client_website: e.target.value },
              })
            }
            className="w-full h-10 px-3 text-sm rounded-md border border-gray-300 
            placeholder:text-gray-400
            focus:outline-none focus:border-[#3ABBF9] focus:ring-1 focus:ring-[#3ABBF9]/30"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-[11px] text-gray-500 mb-1 block">
            Email
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            value={data.client.email}
            onChange={(e) =>
              setData({
                ...data,
                client: { ...data.client, email: e.target.value },
              })
            }
            className="w-full h-10 px-3 text-sm rounded-md border border-gray-300 
            placeholder:text-gray-400
            focus:outline-none focus:border-[#3ABBF9] focus:ring-1 focus:ring-[#3ABBF9]/30"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="text-[11px] text-gray-500 mb-1 block">
            Phone
          </label>
          <input
            placeholder="Phone number"
            value={data.client.phone}
            onChange={(e) =>
              setData({
                ...data,
                client: { ...data.client, phone: e.target.value },
              })
            }
            className="w-full h-10 px-3 text-sm rounded-md border border-gray-300 
            placeholder:text-gray-400
            focus:outline-none focus:border-[#3ABBF9] focus:ring-1 focus:ring-[#3ABBF9]/30"
          />
        </div>

        {/* GST */}
        <div>
          <label className="text-[11px] text-gray-500 mb-1 block">
            GST Number
          </label>
          <input
            placeholder="GST Number"
            value={data.client.client_gstNumber}
            onChange={(e) =>
              setData({
                ...data,
                client: { ...data.client, client_gstNumber: e.target.value },
              })
            }
            className="w-full h-10 px-3 text-sm rounded-md border border-gray-300 
            placeholder:text-gray-400
            focus:outline-none focus:border-[#3ABBF9] focus:ring-1 focus:ring-[#3ABBF9]/30"
          />
        </div>

      </div>

      {/* ADDRESS (full width) */}
      <div className="mt-4">
        <label className="text-[11px] text-gray-500 mb-1 block">
          Address
        </label>
        <input
          placeholder="Full address"
          value={data.client.address}
          onChange={(e) =>
            setData({
              ...data,
              client: { ...data.client, address: e.target.value },
            })
          }
          className="w-full h-10 px-3 text-sm rounded-md border border-gray-300 
          placeholder:text-gray-400
          focus:outline-none focus:border-[#3ABBF9] focus:ring-1 focus:ring-[#3ABBF9]/30"
        />
      </div>

    </div>
  );
}