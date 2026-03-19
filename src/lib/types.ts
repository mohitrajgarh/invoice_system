export interface InvoiceData {
    company: {
        name: string;
        address: string;
        email: string;
        phone: string;
        logo?: string;
    };
    client: {
        name: string;
        phone: string;
    };

    invoice: {
        number: string;
        date: string;
    };

    billing: {
        service: string;
        amount: number;
        gst: number;
        discount: number;
    };
    payment: {
        status: "Pending" | "Paid";
        details: string;
    };
    notes: string

}