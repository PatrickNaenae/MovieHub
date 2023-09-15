'use client'

import React, { useState, ChangeEvent } from "react";
import { FcSearch } from "react-icons/fc";

interface HeaderProps {
	onSearch: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setSearchTerm(e.target.value);
		onSearch(e.target.value);
	};

	return (
		<div className="bg-[url('/images/jw.png')] bg-cover bg-no-repeat bg-center relative w-[100vw] h-[70vh] md:px-24 pt-5">
			<div className=' flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-4 w-full'>
				<div className='flex-shrink-0 lg:w-[5%]'>
					<div className='font-bold text-xl text-white'>MovieHub</div>
				</div>
				<div className='w-[80%] md:w-[60%]'>
					<form>
						<div className='relative w-full'>
							<input
								type='text'
								value={searchTerm}
								onChange={handleInputChange}
								placeholder='What do you want to watch?'
								className='border text-white w-full bg-transparent border-white rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 pr-10 placeholder-white'
							/>

							<div className='absolute inset-y-0 right-2 pl-3 flex items-center pointer-events-none'>
								<FcSearch
									className='h-5 w-5 text-gray-400'
									aria-hidden='true'
								/>
							</div>
						</div>
					</form>
				</div>
				<div className='flex lg:w-[8%] items-center justify-between hidden md:block'>
					<p className='text-white cursor-pointer'>Sign In</p>
				</div>
			</div>
		</div>
	);
};

export default Header;
