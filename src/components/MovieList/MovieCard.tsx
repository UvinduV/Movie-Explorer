import React from 'react';
import {
    Card,
    CardMedia,
    Typography,
    Box,
    styled
} from '@mui/material';
import Star from '../../assets/star.png';

interface Movie {
    id: number;
    original_title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    overview: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
    width: 200,
    height: 300,
    margin: theme.spacing(2),
    overflow: 'hidden',
    borderRadius: '10px',
    color: '#fff',
    boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.25)',
    position: 'relative',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.08)',
    },
}));

const MovieDetails = styled(Box)({
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    padding: '10px',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
        opacity: 1,
    },
});

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return (
        <StyledCard
            component="a"
            href={`https://www.themoviedb.org/movie/${movie.id}`}
            target="_blank"
            sx={{ textDecoration: 'none' }}
        >
            <CardMedia
                component="img"
                height="100%"
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="movie poster"
            />
            <MovieDetails>
                <Typography variant="h6" color="#ffe400">
                    {movie.original_title}
                </Typography>
                <Box display="flex" justifyContent="space-between" my={1}>
                    <Typography variant="body2">{movie.release_date}</Typography>
                    <Box display="flex" alignItems="center">
                        <Typography variant="body2">{movie.vote_average}</Typography>
                        <img src={Star} alt="rating icon" width="20" height="20" style={{ marginLeft: 5 }} />
                    </Box>
                </Box>
                <Typography variant="body2" fontStyle="italic">
                    {movie.overview.slice(0, 100) + "..."}
                </Typography>
            </MovieDetails>
        </StyledCard>
    );
};

export default MovieCard;