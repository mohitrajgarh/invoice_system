"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { InvoiceData } from "@/lib/types";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function InvoicePreview({ data }: { data: InvoiceData }) {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "invoice",
  });

  const subtotal = data.billing.items.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  const taxAmount = (subtotal * data.billing.gst) / 100;

  const total = subtotal + taxAmount - data.billing.discount;

  const formatCurrency = (n: number) =>
    `₹${new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n)}`;

  return (
    <>
      {/* PRINT AREA */}
      <div
        ref={printRef}
        className="bg-white text-black p-6 md:p-10 w-full max-w-[794px] min-h-[1123px] mx-auto rounded-2xl border border-gray-200 shadow-sm"
      >

        {/* HEADER */}
        <div className="mb-6 rounded-xl border border-[#3ABBF9]/20 bg-gradient-to-br from-[#3ABBF9]/10 via-white to-[#3ABBF9]/5 p-4">
          <div className="flex justify-between items-center">

            {/* LEFT */}
            <div className="flex gap-4 items-center">
              {data.company.logo && (
                <Image
                  alt="logo"
                  width={65}
                  height={65}
                  src={data.company.logo}
                  className="object-contain rounded-xl border p-1 bg-white shadow-sm"
                />
              )}

              <div>
                <h1 className="text-2xl font-bold text-[#3ABBF9]">
                  {data.company.name}
                </h1>

                <p className="text-sm text-gray-600">
                  {data.company.address}
                </p>

                <p className="text-sm text-gray-600">
                  {data.company.email} | {data.company.phone}
                </p>

                <p className="text-xs text-gray-400">
                  {data.company.website}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="text-right">
              <h2 className="text-xl font-bold text-[#383838]">
                INVOICE
              </h2>

              <p className="text-sm text-gray-600">
                #{data.invoice.number}
              </p>

              <p className="text-sm text-gray-600">
                {data.invoice.date}
              </p>

              <p className="text-xs text-gray-400">
                Due: {data.invoice.dueDate}
              </p>
            </div>
          </div>
        </div>

        {/* CLIENT */}
        <div className="mt-6 mb-6">
          <h3 className="text-xs font-semibold text-gray-400 uppercase mb-2">
            Bill To
          </h3>

          <div className="bg-[#F9FAFB] p-4 rounded-lg border border-gray-200">
            <p className="font-semibold text-[#383838]">
              {data.client.name}
            </p>
            <p className="text-sm text-gray-600">
              {data.client.company}
            </p>
            <p className="text-sm text-gray-600">
              {data.client.address}
            </p>
            <p className="text-sm text-gray-600">
              {data.client.email} | {data.client.phone}
            </p>
          </div>
        </div>

        {/* TABLE */}
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-[#F9FAFB] text-gray-600">
            <tr>
              <th className="p-3 text-left border-b">Service</th>
              <th className="p-3 text-right border-b">Amount</th>
            </tr>
          </thead>

          <tbody>
            {data.billing.items.map((item, i) => (
              <tr key={i} className="border-t border-gray-100">
                <td className="p-3">{item.service}</td>
                <td className="p-3 text-right">
                  {formatCurrency(item.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* TOTAL */}
        <div className="flex justify-end mt-8">
          <div className="w-64 space-y-2 text-sm">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>

            <div className="flex justify-between">
              <span>Tax ({data.billing.gst}%)</span>
              <span>{formatCurrency(taxAmount)}</span>
            </div>

            <div className="flex justify-between">
              <span>Discount</span>
              <span>- {formatCurrency(data.billing.discount)}</span>
            </div>

            <div className="flex justify-between font-bold border-t pt-2 text-base">
              <span>Total</span>
              <span className="text-[#3ABBF9] text-lg">
                {formatCurrency(total)}
              </span>
            </div>
          </div>
        </div>

        {/* PAYMENT */}
        <div className="mt-8 border-t pt-4 text-sm">
          <p className="font-semibold text-[#383838] mb-1">
            Payment Details
          </p>

          <p>
            Status:{" "}
            <span
              className={
                data.payment.status === "Paid"
                  ? "text-green-600 font-semibold"
                  : "text-red-500 font-semibold"
              }
            >
              {data.payment.status}
            </span>
          </p>

          <p className="text-gray-600">
            {data.payment.details}
          </p>
        </div>

        {/* NOTES */}
        {data.notes && (
          <div className="mt-6 border-t pt-4 text-sm text-gray-600">
            {data.notes}
          </div>
        )}

        {/* THANK YOU */}
        <div className="mt-10 border-t pt-6">
          <div className="bg-gradient-to-r from-[#3ABBF9]/10 to-[#3ABBF9]/5 border border-[#3ABBF9]/20 rounded-xl p-6 text-center">

            <div className="flex justify-center mb-3">
              <div className="bg-[#3ABBF9] text-white p-3 rounded-full shadow">
                <CheckCircle size={20} />
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-1">
              We truly appreciate your business and trust.
            </p>

            <p className="text-base font-semibold text-[#383838]">
              Thank you for choosing{" "}
              <span className="text-[#3ABBF9]">
                TechHertz
              </span>
            </p>

          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-end mt-6 max-w-[794px] mx-auto">
        <button
          onClick={handlePrint}
          className="bg-[#3ABBF9] text-white px-5 py-2 rounded-xl shadow hover:opacity-90"
        >
          Download PDF
        </button>
      </div>
    </>
  );
}