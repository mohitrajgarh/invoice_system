export interface InvoiceData {
    company: {
        name: string;
        address: string;
        email: string;
        phone: string;
        logo?: string;
        website: string;
        gstNumber: string;
    };
    client: {
        name: string;
        company: string;
        address: string;
        email: string;
        phone: string;
        client_website: string;
        client_gstNumber: string;
    };

    invoice: {
        number: string;
        date: string;
        dueDate: string;
        customerId: string;
    };

    billing: {
        items: {
            service: string;
            quantity:number;
            rate:number;
            amount: number;
        }[];
        gst: number;
        discount: number;
        

    };
    payment: {
        status: "Pending" | "Paid";
        details: string;
    };
    notes: string

}