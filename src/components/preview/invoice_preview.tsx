"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { InvoiceData } from "@/lib/types";
import Image from "next/image";

export default function InvoicePreview({ data }: { data: InvoiceData }) {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "invoice",
  });
  const gstAmount =
    (data.billing.amount * data.billing.gst) / 100;

  const total =
    data.billing.amount + gstAmount - data.billing.discount;

  return (
    <>
      {/* PRINT AREA */}
      <div
        ref={printRef}
        className="bg-white p-10 w-[794px] min-h-[1123px] mx-auto shadow rounded-xl"
      >
        {/* HEADER */}
        <div className="flex justify-between items-start border-b pb-6 mb-6">
          <div className="flex items-center gap-3">
            {data.company.logo && (
              <Image
                src={data.company.logo}
                alt="company logo"
                className="w-[50px] h-[50px] object-contain"
              />
            )}

            <div>
              <h2 className="text-xl font-bold text-[#3ABBF9]">
                {data.company.name}
              </h2>
              <p className="text-sm">{data.company.address}</p>
              <p className="text-sm">{data.company.email}</p>
              <p className="text-sm">{data.company.phone}</p>
            </div>
          </div>

          <div className="text-right">
            <h2 className="text-lg font-bold">INVOICE</h2>
            <p>#{data.invoice.number}</p>
            <p>{data.invoice.date}</p>
          </div>
        </div>

        {/* CLIENT */}
        <div className="mb-6">
          <h3 className="font-semibold mb-1">Bill To:</h3>
          <p>{data.client.name}</p>
          <p>{data.client.phone}</p>
        </div>

        {/* TABLE */}
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Service</th>
              <th className="p-3 text-right">Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3">{data.billing.service}</td>
              <td className="p-3 text-right">
                ₹{data.billing.amount}
              </td>
            </tr>
          </tbody>
        </table>

        {/* TOTAL */}
        <div className="flex justify-end mt-6">
          <div className="w-64 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{data.billing.amount}</span>
            </div>

            <div className="flex justify-between">
              <span>GST</span>
              <span>₹{gstAmount}</span>
            </div>

            <div className="flex justify-between">
              <span>Discount</span>
              <span>- ₹{data.billing.discount}</span>
            </div>

            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        </div>

        {/* PAYMENT */}
        <div className="mt-6 border-t pt-4">
          <p>Status: {data.payment.status}</p>
          <p>{data.payment.details}</p>
        </div>

        {/* NOTES */}
        {data.notes && (
          <div className="mt-6 border-t pt-4">
            <p>{data.notes}</p>
          </div>
        )}
      </div>

      {/* BUTTON */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handlePrint}
          className="bg-[#3ABBF9] text-white px-4 py-2 rounded-xl"
        >
          Download PDF
        </button>
      </div>
    </>
  );
}