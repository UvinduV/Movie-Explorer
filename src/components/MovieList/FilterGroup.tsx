import React from "react";

interface FilterGroupProps {
    minRating: number;
    onRatingClick: (rating: number) => void;
    ratings: number[];
}

const FilterGroup: React.FC<FilterGroupProps> = ({
                                                     minRating,
                                                     onRatingClick,
                                                     ratings,
                                                 }) => {
    return (
        <ul className="align_center movie_filter">
            {ratings.map((rate) => (
                <li
                    className={
                        minRating === rate
                            ? "movie_filter_item active"
                            : "movie_filter_item"
                    }
                    key={rate}
                    onClick={() => onRatingClick(rate)}
                >
                    {rate}+ Star
                </li>
            ))}
        </ul>
    );
};

export default FilterGroup;