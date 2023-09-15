import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

interface Movie {
	id: number;
	title: string;
	release_date: string;
	poster_path: string; 
	runtime: number;
	overview: string;
}

interface SearchResults {
	results: Movie[];
}

export const moviesApi = createApi({
	reducerPath: "moviesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.themoviedb.org/3/",
		prepareHeaders(headers) {
			headers.set(
				"Authorization",
				`Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjA2MjY2NzVmNmEzMzU3N2E3M2RjOGVkNDEwZDZkYSIsInN1YiI6IjY0ZmVjOTJhMmRmZmQ4MDBjNjJjMTE4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FwNYEuLNLiNucltB2rU4n2p2GDjQSoHoUBvIu905DUg`
			);
			return headers;
		},
	}),
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath];
		}
	},
	endpoints: (builder) => ({
		getMovieDetailsById: builder.query<Movie, number>({
			query: (id) => `movie/${id}`,
		}),
		searchMovies: builder.query<SearchResults, string>({
			query: (title) => `search/movie?query=${title}`,
		}),
		getTopRatedMovies: builder.query<SearchResults, void>({
			query: () => "movie/top_rated",
		}),
	}),
});

export const {
	useGetMovieDetailsByIdQuery,
	useSearchMoviesQuery,
	useGetTopRatedMoviesQuery,
} = moviesApi;
