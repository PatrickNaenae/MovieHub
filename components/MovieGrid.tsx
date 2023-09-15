import Link from "next/link";
import { useGetTopRatedMoviesQuery } from "../app/GlobalRedux/slices/moviesSlice";
import { useState } from "react";
import Loading from "../app/loading";

interface Movie {
	id: number;
	title: string;
	release_date: string;
	poster_path: string;
}

const MovieGrid = () => {
	const { data, error, isLoading } = useGetTopRatedMoviesQuery();
	const [showAlert, setShowAlert] = useState(false);

	if (isLoading) return <Loading />;

	if (error) {
		if ("status" in error) {
			const errMsg =
				"error" in error ? error.error : JSON.stringify(error.data);
			return (
				<div className="mt-5 text-center text-2xl text-red-500">
					<div>An error has occurred:</div>
					<div>The resource you requested could not be found</div>
				</div>
			);
		} else {
			return <div>{error.message}</div>;
		}
	}

	const top10Movies = data?.results?.slice(0, 10);

	const handleAddToFavorites = (movie: Movie) => {
		const favoriteMovies = JSON.parse(
			localStorage.getItem("favoriteMovies") || "[]"
		);
		localStorage.setItem(
			"favoriteMovies",
			JSON.stringify([...favoriteMovies, movie])
		);

		setShowAlert(true);
		setTimeout(() => {
			setShowAlert(false);
		}, 2000);
	};

	return (
		<div className='relative my-10 px-5 md:px-10 lg:px-24'>
			<Link
				className='bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded'
				href='/Favourites'>
				Favourite movies
			</Link>

			{showAlert && (
				<div className='fixed top-0 left-0 w-full p-2 bg-green-100 border border-green-400 text-green-700 text-center'>
					Added to Favorites
				</div>
			)}
			<h2 className='text-2xl font-bold mb-4 mt-10'>Featured Movies</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				{top10Movies?.map((movie) => (
					<div key={movie.id} data-testid='movie-card'>
						<img
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							alt={movie.title}
							data-testid='movie-poster'
							className='w-full'
						/>
						<h3
							data-testid='movie-title'
							className='text-xl font-semibold mb-2'>
							<Link
								className='text-black text-sm hover:text-gray-700'
								href={`/movie/${movie.id}`}
								passHref>
								{movie.title}
							</Link>
						</h3>
						<p
							data-testid='movie-release-date'
							className='text-gray-700 text-sm'>
							{movie.release_date}
						</p>
						<button
							onClick={() => handleAddToFavorites(movie)}
							className='mt-2 bg-green-500 hover:bg-green-700 text-white text-sm py-2 px-4 rounded'>
							Add to Favorites
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default MovieGrid;
