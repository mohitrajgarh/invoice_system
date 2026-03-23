import { CheckCircle } from "lucide-react";

export default function ThankYou() {
    return (
        <div className="mt-10 border-t pt-6">
            <div className="bg-gradient-to-r from-[#3ABBF9]/10 to-[#3ABBF9]/5 border border-[#3ABBF9]/20 rounded-xl p-6 text-center">

                <div className="flex justify-center mb-3">
                    <div className="bg-[#3ABBF9] text-white p-3 rounded-full shadow">
                        <CheckCircle size={20} />
                    </div>
                </div>

                <p className="text-sm text-gray-600 mb-1">
                    We truly appreciate your business and trust.
                </p>

                <p className="text-base font-semibold text-[#383838]">
                    Thank you for choosing{" "}
                    <span className="text-[#3ABBF9]">TechHertz</span>
                </p>

            </div>
        </div>
    );
}