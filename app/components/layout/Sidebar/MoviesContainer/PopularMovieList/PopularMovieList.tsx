import { FC } from 'react'

import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

import MovieList from '../MovieList'

import { usePopular } from './usePopular'

const PopularMovieList: FC = () => {
	const { isLoading, popularMovies } = usePopular()

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			list={{
				link: '/trending',
				movies: popularMovies || [],
				title: 'Popular movies',
			}}
		/>
	)
}

export default PopularMovieList
