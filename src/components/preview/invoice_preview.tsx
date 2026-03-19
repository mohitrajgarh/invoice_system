export default function InvoicePreview() {
    return (
        <div className="bg-white p-6 rounded-2xl shadow border border-gray-100">
      <h2 className="text-xl font-bold text-[#383838] mb-4">
        Invoice Preview
      </h2>

      <div className="bg-[#F9FAFB] p-4 rounded-xl">
        <h3 className="text-lg font-bold text-[#3ABBF9]">
          Tech Hertz
        </h3>

        <p className="text-sm text-gray-600">Client Name</p>

        <div className="mt-4 space-y-1">
          <p>Amount: ₹0</p>
          <p>GST: ₹0</p>
          <p className="font-bold text-[#383838]">Total: ₹0</p>
        </div>
      </div>
    </div>
    )
}