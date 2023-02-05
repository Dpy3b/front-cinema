import { usePopular } from './../../../layout/Sidebar/MoviesContainer/PopularMovieList/usePopular';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';



import { RatingService } from '@/services/rating/rating.service';



import { toastError } from '@/utils/api/withToastrErrorRedux';
import { MovieService } from '@/services/movie/movie.service';
import { useFavorites } from '../../favorites/useFavorites';
import { useAuth } from '@/hooks/useAuth';


export const useRateMovie = (movieId: string) => {
	const [rating, setRating] = useState(0)
	const [isSended, setIsSended] = useState(false)
	const { user } = useAuth()

	const { refetch } = useQuery(
		['your movie rating', movieId],
		() => RatingService.getByUserMovie(movieId),
		{
			onSuccess({ data }) {
				setRating(data)
			},
			enabled: !!movieId && !!user,
		}
	)

	const { mutateAsync: rateMovie } = useMutation(
		'set rating movie',
		({ value }: { value: number }) => RatingService.setRating(movieId, value),
		{
			onError(error) {
				toastError(error, 'Rate movie')
			},
			onSuccess() {
				toastr.success('Rate movie', 'You have successfully rated!')

				setIsSended(true)
				refetch()

				setTimeout(() => {
					setIsSended(false)
				}, 2400)
			},
		}
	)

	const { refetch: refetchFavoritesInSideber} = useFavorites()
	const {refetch: refetchPopularInSideber} = usePopular()


	const handleClick = async (nextValue: number) => {
		setRating(nextValue)
		await rateMovie({ value: nextValue })
		refetchFavoritesInSideber()
		refetchPopularInSideber()
	}
/*
	const handleClick = async (nextValue: number) => {
		setRating(nextValue) // т.е. тут сначала идет изменение на фронтенде
		const CommonnValueFromBackend =  await rateMovie({ value: nextValue }) // а тут уже далее идет изменение на бэкенде
		// setValueInSidebars(CommonnValueFromBackend)
	}
 */
	return {
		isSended,
		rating,
		handleClick,
	}
}