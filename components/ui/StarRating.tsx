import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@/lib/utils';

const StarRating = ({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={cn('w-4', className)}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon
          key="half"
          icon={faStarHalfAlt}
          className={cn('w-4', className)}
        />
      );
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`empty-${i}`}
          icon={faStar}
          className={cn('text-zinc-300 w-4', className)}
        />
      );
    }

    return stars;
  };

  return <div className="flex gap-1 text-red-600">{renderStars()}</div>;
};

export default StarRating;
