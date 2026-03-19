import { InvoiceData } from "@/lib/types";
import BillingForm from "./billing_form";
import ClientForm from "./client_form";
import CompanyForm from "./company_form";
import InvoiceDetails from "./invoice_details";
import PaymentForm from "./payment_form";

interface Pros {
    data: InvoiceData;
    setData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

export default function InvoiceForm({data, setData }: Pros){
    return (
        <div>
            <CompanyForm data={data} setData={setData} />
            <ClientForm data={data} setData={setData} />
            <InvoiceDetails data={data} setData={setData}/>
            <BillingForm data={data} setData={setData}/>
            <PaymentForm data={data} setData={setData}/>
        </div>
    )
}