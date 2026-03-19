import BillingForm from "./billing_form";
import ClientForm from "./client_form";
import CompanyForm from "./company_form";
import InvoiceDetails from "./invoice_details";
import PaymentForm from "./payment_form";

export default function InvoiceForm(){
    return (
        <div>
            <CompanyForm />
            <ClientForm />
            <InvoiceDetails />
            <BillingForm />
            <PaymentForm />
        </div>
    )
}