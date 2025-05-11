import { useEffect, useState,ChangeEvent } from 'react';
import _ from 'lodash';
import {
    Box,
    Container,
    FormControl,
    MenuItem,
    Select,
    styled,
    Typography
} from '@mui/material';

import MovieCard from './MovieCard';
import FilterGroup from './FilterGroup';

const apiKey = '183928bab7fc630ed0449e4f66ec21bd';

interface Movie {
    id: number;
    original_title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    overview: string;
}

interface SortConfig {
    by: 'default' | 'release_date' | 'vote_average';
    order: 'asc' | 'desc';
}

type MovieListType = 'popular' | 'top_rated' | 'upcoming';

interface MovieListProps {
    type: MovieListType;
    title: string;
    emoji: string;
}

const MovieContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(0, 2),
}));

const MovieList: React.FC<MovieListProps> = ({ type, title, emoji }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [filterMovies, setFilterMovies] = useState<Movie[]>([]);
    const [minRating, setMinRating] = useState(0);
    const [sort, setSort] = useState<SortConfig>({ by: 'default', order: 'asc' });

    useEffect(() => {
        fetchMovies();
    }, []);

    useEffect(() => {
        if (sort.by !== 'default') {
            const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
            setFilterMovies(sortedMovies);
        }
    }, [sort]);

    const fetchMovies = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}`
        );
        const data = await response.json();
        setMovies(data.results);
        setFilterMovies(data.results);
    };

    const handleFilter = (rate: number) => {
        if (rate === minRating) {
            setMinRating(0);
            setFilterMovies(movies);
        } else {
            setMinRating(rate);
            const filtered = movies.filter((movie) => movie.vote_average >= rate);
            setFilterMovies(filtered);
        }
    };

    const handleSortByChange = (e: ChangeEvent) => {
        setSort({ ...sort, by: e.target.value as SortConfig['by'] });
    };

    const handleSortOrderChange = (e: ChangeEvent) => {
        setSort({ ...sort, order: e.target.value as SortConfig['order'] });
    };

    return (
        <Container component="section" id={type} sx={{ py: 4 }}>
            <MovieContainer>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Box display="flex" alignItems="center">
                        <Typography variant="h4" component="h2" color="text.primary">
                            {emoji} {title}
                        </Typography>
                    </Box>

                    <Box display="flex" alignItems="center">
                        <FilterGroup
                            minRating={minRating}
                            onRatingClick={handleFilter}
                            ratings={[8, 7, 6]}
                        />

                        <FormControl size="small" sx={{ mx: 1, minWidth: 120 }}>
                            <Select
                                name="by"
                                value={sort.by}
                                onChange={handleSortByChange}
                                displayEmpty
                            >
                                <MenuItem value="default">Sort By</MenuItem>
                                <MenuItem value="release_date">Date</MenuItem>
                                <MenuItem value="vote_average">Rating</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl size="small" sx={{ minWidth: 120 }}>
                            <Select
                                name="order"
                                value={sort.order}
                                onChange={handleSortOrderChange}
                            >
                                <MenuItem value="asc">Ascending</MenuItem>
                                <MenuItem value="desc">Descending</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>

                <Box display="flex" flexWrap="wrap" justifyContent="center">
                    {filterMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </Box>
            </MovieContainer>
        </Container>
    );
};

export default MovieList;
