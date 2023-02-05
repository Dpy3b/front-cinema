import { useQuery } from 'react-query'

import { MovieService } from '@/services/movie/movie.service'

export const usePopular = () => {
	const {
		isLoading,
		data: popularMovies,
		refetch,
	} = useQuery(
		'Most popular movie in sidebar',
		() => MovieService.getMostPopularMovies(),
		{
			select: (data) => data.slice(0, 3),
		}
	)

	return { isLoading, popularMovies, refetch }
}
