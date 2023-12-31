import React from "react";
import Image from "next/image";
import Link from "next/link";
import chotech_logo from "../public/images/chotech_logo.png";

const Footer = () => {
	return (
		<footer
			aria-label='Site Footer'
			className='bg-black text-xs text-white'>
			<div className='mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24'>
				<div className='w-full px-2 md:px-10 grid gap-8'>
					<div>
						<ul className='flex items-center flex-col space-y-5'>
							<div className='mt-8 flex justify-start gap-6 md:gap-8'>
								<Link
									href='#'
									rel='noreferrer'
									target='_blank'
									className='text-green-700 transition hover:text-green-900'>
									<span className='sr-only'>Facebook</span>
									<svg
										className='h-6 w-6'
										fill='currentColor'
										viewBox='0 0 24 24'
										aria-hidden='true'>
										<path
											fillRule='evenodd'
											d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
											clipRule='evenodd'
										/>
									</svg>
								</Link>
								<Link
									href='#'
									rel='noreferrer'
									target='_blank'
									className='text-green-700 transition hover:text-green-900'>
									<span className='sr-only'>LinkedIn</span>
									<svg
										fill='currentColor'
										className='h-5 w-5'
										version='1.1'
										id='Layer_1'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 310 310'>
										<g id='XMLID_801_'>
											<path
												id='XMLID_802_'
												d='M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z'
											/>
											<path
												id='XMLID_803_'
												d='M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z'
											/>
											<path
												id='XMLID_804_'
												d='M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z'
											/>
										</g>
									</svg>
								</Link>
								<Link
									href='#'
									rel='noreferrer'
									target='_blank'
									className='text-green-700 transition hover:text-green-900'>
									<span className='sr-only'>Instagram</span>
									<svg
										className='h-6 w-6'
										fill='currentColor'
										viewBox='0 0 24 24'
										aria-hidden='true'>
										<path
											fillRule='evenodd'
											d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
											clipRule='evenodd'
										/>
									</svg>
								</Link>

								<Link
									href='#'
									rel='noreferrer'
									target='_blank'
									className='text-green-700 transition hover:text-green-900'>
									<span className='sr-only'>Twitter</span>
									<svg
										className='h-6 w-6'
										fill='currentColor'
										viewBox='0 0 24 24'
										aria-hidden='true'>
										<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
									</svg>
								</Link>
							</div>
						</ul>
					</div>
				</div>
				<div className='mt-12 border-t border-green-700 pt-6 w-full md:flex justify-center md:space-x-10 items-center align-middle'>
					<p className='mt-4 text-center text-sm text-white sm:order-first sm:mt-0'>
						&copy; 2023 MovieHub by Bocco Aniefiok Patrick
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
