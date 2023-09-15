"use client";
import { useState } from "react";
import MovieGrid from "@/components/MovieGrid";
import Header from "@/components/Header";
import MovieSearch from "@/components/MovieSearch";
import Footer from "@/components/Footer";
// import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
	const [isSearching, setIsSearching] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (searchTerm: string) => {
		setIsSearching(searchTerm !== "");
		setSearchTerm(searchTerm);
	};

	return (
		<main className='w-screen min-h-screen overflow-hidden'>
			<Header onSearch={handleSearch} />
			{isSearching ? (
				<MovieSearch searchTerm={searchTerm} />
			) : (
				<MovieGrid />
			)}
			<Footer />
		</main>
	);
}
