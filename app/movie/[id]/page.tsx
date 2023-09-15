"use client";

import { useParams } from "next/navigation";
import { useGetMovieDetailsByIdQuery } from "../../GlobalRedux/slices/moviesSlice";
import Loading from "../../loading";
import Link from 'next/link'

const MovieDetails = () => {
	const params = useParams();
	const { id } = params;
	const { data, error, isLoading } = useGetMovieDetailsByIdQuery(Number(id));

	if (isLoading) return <Loading />;

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

	const movie = data;

	return (
		<div className='w-[100vw] mx-auto flex flex-col gap-8 items-center justify-center h-[100vh]'>
			<Link
				className='bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded'
				href='/'>
				Go Back to Home Page
			</Link>
			<div className='bg-white rounded-lg p-6 shadow-md w-[80%] md:w-[50%] '>
				<h2
					className='text-2xl font-bold mb-4'
					data-testid='movie-title'>
					{movie?.title}
				</h2>
				<p
					className='text-gray-700 mb-2'
					data-testid='movie-release-date'>
					{movie?.release_date}
				</p>
				<p className='text-gray-700 mb-2' data-testid='movie-runtime'>
					{movie?.runtime} minutes
				</p>
				<p className='text-gray-700' data-testid='movie-overview'>
					{movie?.overview}
				</p>
			</div>
		</div>
	);
};

export default MovieDetails;
