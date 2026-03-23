import { InvoiceData } from "@/lib/types";

interface Props {
    data: InvoiceData;
}

export default function Client({ data }: Props) {
    return (
        <div className="mt-6 mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase mb-2">
                Bill To
            </h3>
            
            <div className="bg-[#F9FAFB] p-4 rounded-lg border border-gray-200">
                <p className="font-semibold text-[#383838]">{data.client.name}</p>
                <p className="text-sm text-gray-600">{data.client.company}</p>
                <p className="text-sm text-gray-600">{data.client.address}</p>
                <p className="text-sm text-gray-600">
                    {data.client.email} | {data.client.phone}
                </p>
                <p className=" text-sm text-gray-600">GST: {data.client.client_gstNumber || "-"}</p>
            </div>
        </div>
    );
}