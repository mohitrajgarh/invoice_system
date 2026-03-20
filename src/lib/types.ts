export interface InvoiceData {
    company: {
        name: string;
        address: string;
        email: string;
        phone: string;
        logo?: string;
        website: string;
    };
    client: {
        name: string;
        company: string;
        address: string;
        email: string;
        phone: string;
        client_website: string;
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