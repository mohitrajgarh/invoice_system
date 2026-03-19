export default function InvoiceDetails() {
    return (
        <div className="mb-6 p-5 bg-white rounded-2xl shadow border border-gray-100">
      <h2 className="text-lg font-semibold text-[#383838] mb-4">
        Invoice Info
      </h2>

      <input
        placeholder="Invoice Number"
        className="w-full p-3 mb-3 border rounded-xl focus:ring-2 focus:ring-[#3ABBF9]"
      />

      <input
        type="date"
        className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#3ABBF9]"
      />
    </div>
    )
}