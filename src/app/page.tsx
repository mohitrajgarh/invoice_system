"use client";

import InvoiceForm from "@/components/form/Invoice_form";
import InvoicePreview from "@/components/preview/invoice_preview";
import { InvoiceData } from "@/lib/types";
import { useState } from "react";

export default function InvoicePage() {
  const [showPreview, setShowPreview] = useState(false);

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
      items: [{ service: "", amount: 0 }],
      gst: 18,
      discount: 0,
      discountType: "percent",
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
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-[#383838]">
          TechHertz Invoice System
        </h1>

        <button
          onClick={() => setShowPreview(!showPreview)}
          className="mt-4 bg-[#3ABBF9] text-white px-4 py-2 rounded-lg"
        >
          {showPreview ? "Close Preview" : "Preview"}
        </button>
      </div>

      {/* MAIN GRID */}
      <div
        className={`
          grid gap-6 items-start
          ${showPreview ? "lg:grid-cols-2" : ""}
        `}
      >

        {/* 🟢 FORM */}
        <div
          className={`
            w-full
            ${showPreview ? "hidden lg:block" : ""}
          `}
        >
          <InvoiceForm
            data={data}
            setData={setData}
            showPreview={showPreview}
          />
        </div>

        {/* 🔵 PREVIEW */}
        {showPreview && (
          <div className="w-full lg:sticky top-6 self-start">
            <InvoicePreview data={data} />
          </div>
        )}

      </div>

    </div>
  );
}