import { InvoiceData } from "@/lib/types";
import Image from "next/image";

interface Props {
  data: InvoiceData;
}

export default function Header({ data }: Props) {
  return (
    <div className="mb-6 rounded-xl border border-[#3ABBF9]/20 bg-gradient-to-br from-[#3ABBF9]/10 via-white to-[#3ABBF9]/5 p-3 sm:p-4">

      <div className="flex justify-between items-start">

        {/* LEFT SIDE */}
        <div className="flex gap-2 sm:gap-4 items-start">

          {data.company.logo && (
            <Image
              src={data.company.logo}
              alt="logo"
              width={65}
              height={65}
              className="sm:w-[65px] sm:h-[65px] object-contain rounded-xl border p-1 bg-white shadow-sm shrink-0"
            />
          )}

          <div>
            <h1 className="text-lg sm:text-lg md:text-2xl font-bold text-[#3ABBF9] leading-tight break-words">
              {data.company.name}
            </h1>

            <p className="text-[10px] sm:text-sm text-gray-600">
              {data.company.address}
            </p>

            <p className="text-[10px] sm:text-sm text-gray-600">
              {data.company.email} | {data.company.phone}
            </p>

            <p className="text-[9px] sm:text-xs text-gray-400">
              {data.company.website}
            </p>

            <p className="text-[10px] sm:text-xs text-gray-700">
               {data.company.gstNumber}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-right">
          <h2 className="text-sm sm:text-xl font-bold text-[#383838]">
            INVOICE
          </h2>

          <p className="text-[10px] sm:text-sm text-gray-600">
            #{data.invoice.number}
          </p>

          <p className="text-[10px] sm:text-sm text-gray-600">
            {data.invoice.date}
          </p>

          <p className="text-[9px] sm:text-xs text-gray-400">
            Due: {data.invoice.dueDate}
          </p>

          <p className="text-[10px] sm:text-sm text-gray-600 whitespace-nowrap  ">
            Cust ID: {data.invoice.customerId || ""} 
          </p>
        </div>

      </div>
    </div>
  );
}