'use client';

interface ClutchReviewBadgeProps {
  rating?: number; // default 5.0
}

export default function ClutchReviewBadge({ rating = 5.0 }: ClutchReviewBadgeProps) {
  const star = (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" className="text-[#f15a29]" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <div className="flex items-center gap-3 select-none justify-center">
      <div className="flex flex-col items-center">
        <div className="text-xs uppercase tracking-widest text-gray-600">Reviewed on</div>
        <div className="text-2xl font-extrabold" style={{ color: '#0a192f' }}>Clutch</div>
      </div>
      <div>
          <div className="flex items-center gap-1">{star}{star}{star}{star}{star}</div>
          <div className="text-lg font-semibold text-gray-700">{rating.toFixed(1)} rating</div>
      </div>
    </div>
  );
}


