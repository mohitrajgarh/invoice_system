"use client"
import InvoiceForm from "@/components/form/Invoice_form";
import InvoicePreview from "@/components/preview/invoice_preview";
import { InvoiceData } from "@/lib/types";
import { useState } from "react";


export default function InvoicePage() {
  const [data, setData]  = useState<InvoiceData>({
     company: {
      name: "",
      address: "",
      email: "",
      phone: "",
      logo: "",
    },
    client: {
      name: "",
      phone: "",
    },
    invoice: {
      number: "",
      date: "",
    },
    billing: {
      service: "",
      amount: 0,
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
    <div className="min-h-screen bg-light p-4 lg:p-8">
      <h1 className="text-2xl font-bold text-dark mb-6">
        Create Invoice
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InvoiceForm  data={data} setData={setData} />
        <InvoicePreview data={data} />
      </div>
    </div>
  );
}