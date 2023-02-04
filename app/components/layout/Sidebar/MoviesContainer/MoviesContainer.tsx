import dynamic from 'next/dynamic';
import { FC } from 'react';



import FavoriteMovieList from './FavoriteMovieList/FavoriteMovieList';
import PopularMovieList from './PopularMovieList/PopularMovieList';


const DynamicFavoritesMovies = dynamic(
	() => import('./FavoriteMovieList/FavoriteMovieList'),
	{
		ssr: false,
	}
)

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovieList />
			{/* <FavoriteMovieList /> */} <DynamicFavoritesMovies />
		</div>
	)
}

export default MoviesContainer