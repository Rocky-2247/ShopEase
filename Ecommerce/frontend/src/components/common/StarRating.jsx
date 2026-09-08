import React from 'react';
import { Star } from 'lucide-react';

export const StarRating = ({ rating = 0, numReviews, size = 'sm', interactive = false, onRatingChange }) => {
  const starSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="inline-flex items-center gap-1.5">
      <div className="flex items-center">
        {stars.map((starVal) => {
          const isFilled = rating >= starVal;
          const isHalf = !isFilled && rating >= starVal - 0.5;

          return (
            <button
              key={starVal}
              type={interactive ? 'button' : undefined}
              disabled={!interactive}
              onClick={() => interactive && onRatingChange && onRatingChange(starVal)}
              className={`${interactive ? 'cursor-pointer hover:scale-110 transition-transform p-0.5' : 'cursor-default'}`}
            >
              <Star
                className={`${starSizes[size] || starSizes.sm} ${
                  isFilled
                    ? 'text-amber-400 fill-amber-400'
                    : isHalf
                    ? 'text-amber-400 fill-amber-400/50'
                    : 'text-slate-300 dark:text-slate-600'
                }`}
              />
            </button>
          );
        })}
      </div>
      {numReviews !== undefined && (
        <span className="text-xs text-slate-500 font-medium">
          {rating.toFixed(1)} ({numReviews})
        </span>
      )}
    </div>
  );
};
