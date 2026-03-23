import { InvoiceData } from "@/lib/types";

interface Props {
    data: InvoiceData;
}

export default function Payment({ data }: Props) {
    return (
        <div className="mt-8 border-t pt-4 text-sm">
            <p className="font-semibold text-[#383838] mb-1">
                Payment Details
            </p>

            <p>
                Status:{" "}
                <span
                    className={
                        data.payment.status === "Paid"
                            ? "text-green-600 font-semibold"
                            : "text-red-500 font-semibold"
                    }
                >
                    {data.payment.status}
                </span>
            </p>

            <p className="text-gray-600">{data.payment.details}</p>
        </div>
    );
}