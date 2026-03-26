"use client";

import { ChangeEvent } from "react";
import { X, Upload } from "lucide-react";
import { InvoiceData } from "@/lib/types";
import Image from "next/image";

interface Props {
  data: InvoiceData;
  setData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

export default function CompanyForm({ data, setData }: Props) {

  const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    const url = URL.createObjectURL(file);

    setData({
      ...data,
      company: { ...data.company, logo: url },
    });
  };

  const removeLogo = () => {
    setData({
      ...data,
      company: { ...data.company, logo: "" },
    });
  };

  return (
    <div className="mb-5 p-4 bg-white text-black rounded-xl border border-gray-200">

      <h2 className="text-[20px] font-semibold text-gray-700 mb-3">
        Company Details
      </h2>

      {/* LOGO */}
      <div className="mb-4">
        <label className="text-[11px] text-gray-500 mb-1 block">
          Company Logo
        </label>

        {!data.company.logo ? (
          <label className="w-24 h-24 border border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center cursor-pointer hover:border-[#3ABBF9] transition">
            <Upload className="text-[#3ABBF9] mb-1" size={18} />
            <span className="text-[11px] text-gray-500">Upload</span>

            <input
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
              className="hidden"
            />
          </label>
        ) : (
          <div className="relative w-fit">
            <Image
              src={data.company.logo}
              alt="Company Logo"
              width={70}
              height={70}
              className="object-contain border rounded-md p-1 bg-white"
            />

            <button
              onClick={removeLogo}
              className="absolute -top-2 -right-2 bg-[#3ABBF9] text-white rounded-full p-1 text-xs hover:scale-110 transition"
            >
              <X size={12} />
            </button>
          </div>
        )}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* NAME */}
        <div>
          <label className="text-[11px] text-gray-500 mb-1 block">
            Company Name
          </label>
          <input
            placeholder="Enter name"
            value={data.company.name}
            onChange={(e) =>
              setData({
                ...data,
                company: { ...data.company, name: e.target.value },
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
            placeholder="email@example.com"
            value={data.company.email}
            onChange={(e) =>
              setData({
                ...data,
                company: { ...data.company, email: e.target.value },
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
            value={data.company.phone}
            onChange={(e) =>
              setData({
                ...data,
                company: { ...data.company, phone: e.target.value },
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
            placeholder="Company website"
            value={data.company.website || ""}
            onChange={(e) =>
              setData({
                ...data,
                company: { ...data.company, website: e.target.value },
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
            value={data.company.gstNumber}
            onChange={(e) =>
              setData({
                ...data,
                company: { ...data.company, gstNumber: e.target.value },
              })
            }
            className="w-full h-10 px-3 text-sm rounded-md border border-gray-300 
            placeholder:text-gray-400
            focus:outline-none focus:border-[#3ABBF9] focus:ring-1 focus:ring-[#3ABBF9]/30"
          />
        </div>

      </div>

      {/* ADDRESS FULL */}
      <div className="mt-4">
        <label className="text-[11px] text-gray-500 mb-1 block">
          Address
        </label>
        <input
          placeholder="Full address"
          value={data.company.address}
          onChange={(e) =>
            setData({
              ...data,
              company: { ...data.company, address: e.target.value },
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