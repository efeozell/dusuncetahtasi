import { Zap } from "lucide-react";

export default function RateLimitedUI() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-green-900 border border-green-900 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          {/* Icon Container */}
          <div className="flex-shrink-0">
            <div className="bg-green-600 p-3 rounded-full">
              <Zap className="w-8 h-8 text-green-400" />
            </div>
          </div>

          {/* Content Container */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              Hız Sınırı Aşıldı
            </h3>
            <p className="text-white mb-2">
              Kısa sürede çok fazla istek attın. Lütfen biraz bekle.
            </p>
            <p className="text-sm text-gray-400">
              En iyi deneyim için lütfen bir kaç saniye sonra tekrar deneyin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
