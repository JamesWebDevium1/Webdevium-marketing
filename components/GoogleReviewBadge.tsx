'use client';

interface GoogleReviewBadgeProps {
  rating?: number; // 0..5, default 4.9
}

export default function GoogleReviewBadge({ rating = 4.9 }: GoogleReviewBadgeProps) {
  const star = (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" className="text-amber-400" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <div className="flex flex-col items-center text-center select-none">
      <div className="flex items-baseline gap-1">
        <span className="text-[26px] font-semibold" style={{ color: '#4285F4' }}>G</span>
        <span className="text-[26px] font-semibold" style={{ color: '#DB4437' }}>o</span>
        <span className="text-[26px] font-semibold" style={{ color: '#F4B400' }}>o</span>
        <span className="text-[26px] font-semibold" style={{ color: '#4285F4' }}>g</span>
        <span className="text-[26px] font-semibold" style={{ color: '#0F9D58' }}>l</span>
        <span className="text-[26px] font-semibold" style={{ color: '#DB4437' }}>e</span>
      </div>
      <div className="mt-1 text-3xl font-semibold text-gray-800 leading-none">{rating.toFixed(1)}</div>
      <div className="mt-1 flex items-center gap-1">
        {star}{star}{star}{star}{star}
      </div>
      <div className="mt-1 text-sm text-gray-600">Google Reviews</div>
    </div>
  );
}


