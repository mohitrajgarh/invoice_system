import { InvoiceData } from "@/lib/types";
import BillingForm from "./billing_form";
import ClientForm from "./client_form";
import CompanyForm from "./company_form";
import InvoiceDetails from "./invoice_details";
import PaymentForm from "./payment_form";

interface Pros {
    data: InvoiceData;
    setData: React.Dispatch<React.SetStateAction<InvoiceData>>;
    showPreview: boolean;
}

export default function InvoiceForm({ data, setData, showPreview }: Pros) {
    return (
        <div
            className={`
        grid gap-6 
        ${showPreview ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"}
      `}
        >
            {/* LEFT */}
            <div className="space-y-6">
                <CompanyForm data={data} setData={setData} />
                <InvoiceDetails data={data} setData={setData} />
                
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
                <ClientForm data={data} setData={setData} />
                <BillingForm data={data} setData={setData} />
                <PaymentForm data={data} setData={setData} />
            </div>
        </div>
    );
}