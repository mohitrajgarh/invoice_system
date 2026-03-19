"use client";

import Image from "next/image";
import { InvoiceData } from "@/lib/types";

export default function InvoicePreview({ data }: { data: InvoiceData }) {
  const gstAmount =
    (data.billing.amount * data.billing.gst) / 100;

  const total =
    data.billing.amount + gstAmount - data.billing.discount;

  return (
    <div id="invoice-preview" className="max-w-[800px] mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow border border-gray-100">

        {/* HEADER */}
        <div className="flex justify-between items-start border-b pb-6 mb-6">
          <div className="flex items-center gap-3">
            {data.company.logo && (
              <Image
                src={data.company.logo}
                alt="logo"
                width={50}
                height={50}
                className="object-contain"
              />
            )}

            <div>
              <h2 className="text-xl font-bold text-[#3ABBF9]">
                {data.company.name || "Company Name"}
              </h2>
              <p className="text-sm text-gray-600">
                {data.company.address}
              </p>
              <p className="text-sm text-gray-600">
                {data.company.email}
              </p>
              <p className="text-sm text-gray-600">
                {data.company.phone}
              </p>
            </div>
          </div>

          <div className="text-right">
            <h2 className="text-lg font-bold text-[#383838]">
              INVOICE
            </h2>
            <p className="text-sm">
              #{data.invoice.number || "0001"}
            </p>
            <p className="text-sm">
              {data.invoice.date}
            </p>
          </div>
        </div>

        {/* CLIENT */}
        <div className="mb-6">
          <h3 className="font-semibold text-[#383838] mb-1">
            Bill To:
          </h3>
          <p>{data.client.name || "Client Name"}</p>
          <p className="text-sm text-gray-600">
            {data.client.phone}
          </p>
        </div>

        {/* BILLING TABLE */}
        <div className="mb-6">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-[#F9FAFB] text-gray-600">
              <tr>
                <th className="p-3 text-left text-sm font-semibold">
                  Service
                </th>
                <th className="p-3 text-right text-sm font-semibold">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="p-3">
                  {data.billing.service || "Service"}
                </td>
                <td className="p-3 text-right">
                  ₹{data.billing.amount}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CALCULATION */}
        <div className="flex justify-end mb-6">
          <div className="w-64 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>₹{data.billing.amount}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>GST ({data.billing.gst}%)</span>
              <span>₹{gstAmount}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Discount</span>
              <span>- ₹{data.billing.discount}</span>
            </div>

            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span className="text-[#3ABBF9]">
                ₹{total}
              </span>
            </div>
          </div>
        </div>

        {/* PAYMENT */}
        <div className="border-t pt-6 mb-6">
          <h3 className="font-semibold text-[#383838] mb-2">
            Payment Details
          </h3>

          <p className="text-sm">
            Status:{" "}
            <span
              className={`font-semibold ${
                data.payment.status === "Paid"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {data.payment.status}
            </span>
          </p>

          <p className="text-sm text-gray-600">
            {data.payment.details}
          </p>
        </div>

        {/* NOTES */}
        {data.notes && (
          <div className="border-t pt-6">
            <h3 className="font-semibold text-[#383838] mb-2">
              Notes
            </h3>
            <p className="text-sm text-gray-600">
              {data.notes}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}