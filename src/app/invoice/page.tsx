import InvoiceForm from "@/components/form/Invoice_form";
import InvoicePreview from "@/components/preview/invoice_preview";


export default function InvoicePage() {
  return (
    <div className="min-h-screen bg-light p-4 lg:p-8">
      <h1 className="text-2xl font-bold text-dark mb-6">
        Create Invoice
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InvoiceForm />
        <InvoicePreview />
      </div>
    </div>
  );
}