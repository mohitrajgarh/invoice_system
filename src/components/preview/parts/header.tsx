import { InvoiceData } from "@/lib/types";
import Image from "next/image";

interface Props {
  data: InvoiceData;
}

export default function Header({ data }: Props) {
  return (
    <div className="mb-6 rounded-xl border border-[#3ABBF9]/20 bg-gradient-to-br from-[#3ABBF9]/10 via-white to-[#3ABBF9]/5 p-4">
      <div className="flex justify-between items-center">

        <div className="flex gap-4 items-center">
          {data.company.logo && (
            <Image
              src={data.company.logo}
              alt="logo"
              width={65}
              height={65}
              className="object-contain rounded-xl border p-1 bg-white shadow-sm"
            />
          )}

          <div>
            <h1 className="text-2xl font-bold text-[#3ABBF9]">
              {data.company.name}
            </h1>
            <p className="text-sm text-gray-600">{data.company.address}</p>
            <p className="text-sm text-gray-600">
              {data.company.email} | {data.company.phone}
            </p>
            <p className="text-xs text-gray-400">{data.company.website}</p>
          </div>
        </div>

        <div className="text-right">
          <h2 className="text-xl font-bold text-[#383838]">INVOICE</h2>
          <p className="text-sm text-gray-600">#{data.invoice.number}</p>
          <p className="text-sm text-gray-600">{data.invoice.date}</p>
          <p className="text-xs text-gray-400">
            Due: {data.invoice.dueDate}
          </p>
        </div>

      </div>
    </div>
  );
}