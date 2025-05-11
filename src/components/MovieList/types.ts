export interface Movie {
    id: number;
    original_title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    overview: string;
}

export interface SortConfig {
    by: 'default' | 'release_date' | 'vote_average';
    order: 'asc' | 'desc';
}

export type MovieListType = 'popular' | 'top_rated' | 'upcoming';
