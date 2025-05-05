import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setShowMobileMenu(false); // Automatically close mobile menu
				document.body.style.overflow = 'auto'; // Restore scroll
			}
		};

		window.addEventListener('resize', handleResize);

		// Lock or unlock scroll when mobile menu is toggled
		if (showMobileMenu) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		// Cleanup
		return () => {
			window.removeEventListener('resize', handleResize);
			document.body.style.overflow = 'auto';
		};
	}, [showMobileMenu]);
	return (
		<div className="absolute top-0 left-0 w-full z-10">
			<div className="container mx-auto flex justify-between items-center py-5 px-6 md:px-20 lg:px-32 bg-transparent">
				<img src={assets.logo} alt="company logo" />
				<ul className="hidden md:flex gap-7 text-white">
					<a href="#Header" className="cursor-pointer hover:text-gray-400">
						Home
					</a>
					<a href="#About" className="cursor-pointer hover:text-gray-400">
						About
					</a>
					<a href="#Projects" className="cursor-pointer hover:text-gray-400">
						Projects
					</a>
					<a
						href="#Testimonials"
						className="cursor-pointer hover:text-gray-400"
					>
						Testimonials
					</a>
				</ul>
				<button className="hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer">
					Sign Up
				</button>
				<img
					onClick={() => setShowMobileMenu(true)}
					src={assets.menu_icon}
					className="md:hidden w-7 cursor-pointer"
					alt="hamburger menu"
				/>
			</div>
			{/* Mobile-Menu */}
			<div
				className={`md:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transition-transform duration-300 z-50 ${
					showMobileMenu ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<div className="flex justify-end p-6 cursor-pointer">
					<img
						onClick={() => setShowMobileMenu(false)}
						src={assets.cross_icon}
						className="w-6"
						alt=""
					/>
				</div>
				<ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
					<a
						onClick={() => setShowMobileMenu(false)}
						href="#Header"
						className="px-4 py-2 rounded-full inline-block"
					>
						Home
					</a>
					<a
						onClick={() => setShowMobileMenu(false)}
						href="#About"
						className="px-4 py-2 rounded-full inline-block"
					>
						About
					</a>
					<a
						onClick={() => setShowMobileMenu(false)}
						href="#Projects"
						className="px-4 py-2 rounded-full inline-block"
					>
						Projects
					</a>
					<a
						onClick={() => setShowMobileMenu(false)}
						href="#Testimonials"
						className="px-4 py-2 rounded-full inline-block"
					>
						Testimonials
					</a>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
