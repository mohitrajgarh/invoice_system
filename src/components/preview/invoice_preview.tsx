"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { InvoiceData } from "@/lib/types";

import Header from "./parts/header";
import Client from "./parts/client";
import Table from "./parts/table";
import Totals from "./parts/totals";
import Payment from "./parts/payment";
import Notes from "./parts/notes";
import ThankYou from "./parts/thankyou";
import { Download } from "lucide-react";

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

  const discountAmount = (subtotal * data.billing.discount) / 100;
  const total = subtotal + taxAmount - discountAmount;

  const formatCurrency = (n: number) =>
    `₹${new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n)}`;

  // SPLIT ITEMS (8 per page)
  const chunkSize = 8;
  const pages: typeof data.billing.items[] = [];

  for (let i = 0; i < data.billing.items.length; i += chunkSize) {
    pages.push(data.billing.items.slice(i, i + chunkSize));
  }

  if (pages.length === 0) {
    pages.push([]);
  }

  return (
    <>
      {/* PRINT AREA */}
      <div ref={printRef} className="w-full">

        {pages.map((items, index) => (
          <div
            key={index}
            className="
            bg-white text-black w-full max-w-[794px] mx-auto px-3 sm:px-4 md:px-8 py-4 mb-6 print:mb-0 print:break-after-page  border border-gray-200 rounded-xl  overflow-hidden
            "
          >
            {/* HEADER */}
            <Header data={data} />

            {/* CLIENT */}
            <Client data={data} />

            {/* TABLE */}
            <Table items={items} formatCurrency={formatCurrency} />

            {/* ONLY LAST PAGE */}
            {index === pages.length - 1 && (
              <>
                <Totals
                  subtotal={subtotal}
                  tax={taxAmount}
                  discount={discountAmount}
                  total={total}
                  gst={data.billing.gst}
                  formatCurrency={formatCurrency}
                />

                <Payment data={data} />

                <Notes notes={data.notes} />

                <ThankYou />
              </>
            )}
          </div>
        ))}
      </div>

      {/* DOWNLOAD BUTTON */}
      <div className="flex justify-center md:justify-end mt-6 max-w-[794px] mx-auto px-2">
        <button
          onClick={handlePrint}
          className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#3ABBF9] text-white px-5 py-2 rounded-xl shadow hover:opacity-90 transition"
        >
          <Download size={18} />
          Generate Bill
        </button>
      </div>
    </>
  );
}