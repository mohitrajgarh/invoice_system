"use client";

import InvoiceForm from "@/components/form/Invoice_form";
import InvoicePreview from "@/components/preview/invoice_preview";
import { InvoiceData } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";

export default function InvoicePage() {
  const [data, setData] = useState<InvoiceData>({
    company: {
      name: "",
      address: "",
      email: "",
      phone: "",
      logo: "",
      website: "",
    },
    client: {
      name: "",
      company: "",
      address: "",
      email: "",
      phone: "",
      client_website: "",
    },
    invoice: {
      number: "",
      date: "",
      dueDate: "",
      customerId: "",
    },
    billing: {
      items: [
        {
          service: "",
          amount: 0,
        },
      ],
      gst: 18,
      discount: 0,
    },
    payment: {
      status: "Pending",
      details: "",
    },
    notes: "",
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">

      {/* HEADER */}
      <div className="mb-8 text-center">

        {/* LOGO */}
        <div className="flex justify-center mb-3">
          {data.company.logo ? (
            <Image
              src={data.company.logo}
              alt="logo"
              height={12}
              width={12}
              className=" object-contain rounded-lg shadow-sm"
            />
          ) : (
            <div className="w-12 h-12 flex items-center justify-center bg-[#3ABBF9]/10 text-[#3ABBF9] rounded-lg font-bold">
              TH
            </div>
          )}
        </div>

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-[#383838]">
          TechHertz Invoice System
        </h1>

        {/* SUBTITLE */}
        <p className="text-sm text-gray-500 mt-1">
          Create professional invoices in seconds 🚀
        </p>

        {/* DIVIDER */}
        <div className="w-16 h-[2px] bg-[#3ABBF9] mx-auto mt-3 rounded-full"></div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

        {/* LEFT → FORM */}
        <div
          className="max-h-[1123px] overflow-y-auto pr-3 no-scrollbar" >
          <InvoiceForm data={data} setData={setData} />
        </div>

        {/* RIGHT → PREVIEW */}
        <div className="sticky top-6 self-start">
          <InvoicePreview data={data} />
        </div>

      </div>
    </div>
  );
}