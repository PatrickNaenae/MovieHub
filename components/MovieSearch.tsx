import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchMoviesQuery } from "../app/GlobalRedux/slices/moviesSlice";
import Loading from "../app/loading";

interface MovieSearchProps {
	searchTerm: string;
}

interface Movie {
	id: number;
	title: string;
	release_date: string;
	poster_path: string;
}

const MovieSearch: React.FC<MovieSearchProps> = ({ searchTerm }) => {
	const { data, error, isLoading } = useSearchMoviesQuery(searchTerm);
	const [showAlert, setShowAlert] = useState(false);

	if (error) {
		if ("status" in error) {
			const errMsg =
				"error" in error ? error.error : JSON.stringify(error.data);
			return (
				<div className='mt-5 text-center text-2xl text-red-500'>
					<div>An error has occurred:</div>
					<div>The resource you requested could not be found</div>
				</div>
			);
		} else {
			return <div>{error.message}</div>;
		}
	}

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
		<div>
			<div className='movie-search relative px-5 md:px-10 lg:px-24 my-6'>
				{isLoading && <Loading />}

				{!isLoading && (
					<Link
						className='bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded'
						href='/Favourites'>
						Favourite movies
					</Link>
				)}

				{showAlert && (
					<div className='fixed top-0 left-0 w-full p-2 bg-green-100 border border-green-400 text-green-700 text-center'>
						Added to Favorites
					</div>
				)}

				{!isLoading && (
					<h2 className='text-2xl font-bold mb-4 mt-10'>
						Searched Movies
					</h2>
				)}
				{!isLoading && data && data.results && (
					<div className='search-results mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
						{data.results.map((movie) => (
							<div
								key={movie.id}
								className='movie-result bg-white rounded'>
								<Image
									src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
									alt={movie.title}
									placeholder='blur'
									className='w-full h-auto mb-2'
								/>
								<div className='movie-info'>
									<Link
										href={`/movie/${movie.id}`}
										passHref
										className='mt-2 text-blue-500 text-sm hover:text-blue-700'>
										{movie.title}
									</Link>
									<p className='text-gray-700 text-xs'>
										Release Date: {movie.release_date}
									</p>
									<button
										onClick={() =>
											handleAddToFavorites(movie)
										}
										className='mt-2 bg-green-500 hover:bg-green-700 text-white text-sm py-2 px-4 rounded'>
										Add to Favorites
									</button>
								</div>
							</div>
						))}
					</div>
				)}
				{!isLoading && data && data.results.length < 1 && (
					<p className='text-red-500 text-center text-3xl mt-5'>
						Sorry, There is no movie title with this name
					</p>
				)}
			</div>
		</div>
	);
};

export default MovieSearch;
