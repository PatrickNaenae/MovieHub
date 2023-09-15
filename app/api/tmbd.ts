import axios from "axios";

const API_KEY = "0f0626675f6a33577a73dc8ed410d6da"; 

const tmdb = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	params: {
		api_key: API_KEY,
	},
});

export default tmdb;
