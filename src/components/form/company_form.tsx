"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { X, Upload } from "lucide-react";

export default function CompanyForm() {
  const [logo, setLogo] = useState<string | null>(null);

  const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    const url = URL.createObjectURL(file);
    setLogo(url);
  };

  const removeLogo = () => {
    setLogo(null);
  };

  return (
    <div className="mb-6 p-5 bg-white rounded-2xl shadow border border-gray-100">
      <h2 className="text-lg font-semibold text-[#383838] mb-4">
        Company Details
      </h2>

      <label className="block text-sm font-medium mb-2 text-[#383838]">
        Company Logo
      </label>

      {/* CONDITION BASED UI */}
      {!logo ? (
        
        <label className="w-28 h-28 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-[#3ABBF9] transition mb-4">
          <Upload className="text-[#3ABBF9] mb-1" size={20} />
          <span className="text-xs text-gray-500">Upload</span>

          <input
            type="file"
            accept="image/*"
            onChange={handleLogoChange}
            className="hidden"
          />
        </label>
      ) : (
       
        <div className="relative w-fit mb-4">
          <Image
            src={logo}
            alt="Company Logo"
            width={100}
            height={100}
            className="object-contain border rounded-xl p-2 bg-white"
          />

          {/* REMOVE BUTTON */}
          <button
            onClick={removeLogo}
            className="absolute -top-2 -right-2 bg-[#3ABBF9] text-white rounded-full p-1 hover:scale-110 transition shadow"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* INPUTS */}
      <input
        placeholder="Company Name"
        className="w-full p-3 mb-3 border rounded-xl focus:ring-2 focus:ring-[#3ABBF9]"
      />

      <input
        placeholder="Address"
        className="w-full p-3 mb-3 border rounded-xl focus:ring-2 focus:ring-[#3ABBF9]"
      />

      <input
        placeholder="Email"
        className="w-full p-3 mb-3 border rounded-xl focus:ring-2 focus:ring-[#3ABBF9]"
      />

      <input
        placeholder="Phone"
        className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#3ABBF9]"
      />
    </div>
  );
}