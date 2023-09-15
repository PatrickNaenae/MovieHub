"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Movie {
	id: number;
	title: string;
	release_date: string;
	poster_path: string;
}

const Favorite = () => {
	const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

	useEffect(() => {
		const storedFavorites = JSON.parse(
			localStorage.getItem("favoriteMovies") || "[]"
		);

		if (Array.isArray(storedFavorites)) {
			setFavoriteMovies(storedFavorites);
		}
	}, []);

	const handleRemoveFavorite = (movie: Movie) => {
		const updatedFavorites = favoriteMovies.filter(
			(m) => m.id !== movie.id
		);
		setFavoriteMovies(updatedFavorites);
		localStorage.setItem(
			"favoriteMovies",
			JSON.stringify(updatedFavorites)
		);
	};

	return (
		<div className='bg-white min-h-[100vh] h-max rounded-lg p-4 shadow-md text-center'>
			<h2 className='text-2xl font-bold mb-4'>Favorite Movies</h2>
			{favoriteMovies.length > 0 ? (
				<div className=' mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{favoriteMovies.map((movie) => (
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
								onClick={() => handleRemoveFavorite(movie)}
								className='mt-2 bg-red-500 hover:bg-red-700 text-white text-sm py-2 px-4 rounded'>
								Remove from Favorites
							</button>
						</div>
					))}
				</div>
			) : (
				<p className="mb-8">You've not added any movie to your favorite movie yet</p>
			)}
			<Link
				className='bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded'
				href='/'>
				Go Back to Home Page
			</Link>
		</div>
	);
};

export default Favorite;
