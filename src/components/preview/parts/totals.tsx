interface Props {
    subtotal: number;
    tax: number;
    discount: number;
    total: number;
    gst: number;
    formatCurrency: (n: number) => string;
}

export default function Totals({
    subtotal,
    tax,
    discount,
    total,
    gst,
    formatCurrency,
}: Props) {
    return (
        <div className="flex justify-end mt-8">
            <div className="w-64 space-y-2 text-sm">

                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                </div>

                <div className="flex justify-between">
                    <span>Tax ({gst}%)</span>
                    <span>{formatCurrency(tax)}</span>
                </div>

                <div className="flex justify-between">
                    <span>Discount</span>
                    <span>- {formatCurrency(discount)}</span>
                </div>

                <div className="flex justify-between font-bold border-t pt-2 text-base">
                    <span>Total</span>
                    <span className="text-[#3ABBF9] text-lg">
                        {formatCurrency(total)}
                    </span>
                </div>

            </div>
        </div>
    );
}