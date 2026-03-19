export default function PaymentForm() {
    return (
        <div className="mb-6 p-5 bg-white rounded-2xl shadow border border-gray-100">
            <h2 className="text-lg font-semibold text-[#383838] mb-4">
                Payment Info
            </h2>

            <select className="w-full p-3 mb-3 border rounded-xl focus:ring-2 focus:ring-[#3ABBF9]">
                <option>Pending</option>
                <option>Paid</option>
            </select>

            <input
                placeholder="Bank / UPI Details"
                className="w-full p-3 mb-3 border rounded-xl focus:ring-2 focus:ring-[#3ABBF9]"
            />

            <textarea
                placeholder="Notes"
                className="w-full p-3 border rounded-xl h-24 focus:ring-2 focus:ring-[#3ABBF9]"
            />
        </div>
    );
}