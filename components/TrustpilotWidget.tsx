'use client';

export interface TrustpilotWidgetProps {
  rating?: number; // e.g. 4.9
  reviewsCount?: number; // e.g. 128
  label?: string; // optional label override
}

export function TrustpilotWidget({
  rating = 4.9,
  reviewsCount = 128,
  label = 'Trustpilot',
}: TrustpilotWidgetProps) {
  const filledStars = Math.round(rating);

  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-white/70 backdrop-blur px-4 py-2 shadow-sm border border-gray-200">
      <span className="sr-only">{label} rating</span>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 20 20"
            width="20"
            height="20"
            aria-hidden="true"
            className={i < filledStars ? 'text-amber-400' : 'text-gray-300'}
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <div className="text-sm font-semibold text-gray-800">
        {rating.toFixed(1)} / 5 • {reviewsCount.toLocaleString()} reviews
      </div>
      <span className="ml-2 text-xs font-bold uppercase tracking-wider text-[#00b67a]">{label}</span>
    </div>
  );
}

export default TrustpilotWidget;


