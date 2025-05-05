import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
	return (
		<div
			// added p-32 || min-h-screen because default chrome zoom is 100% or 100vh
			className="container flex flex-col items-center justify-center mx-auto min-h-screen md:px-20 lg:px-32 w-full overflow-hidden"
			id="About"
		>
			<h1 className="text-2xl sm:text-4xl font-bold mb-2">
				About{' '}
				<span className="underline underline-offset-4 decoration-1 under font-light">
					Our Brand
				</span>
			</h1>
			<p className="text-gray-500 max-w-80 text-center mb-8">
				Passionate About Properties, Dedicated to Your Vision
			</p>
			<div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
				<img
					src={assets.brand_img}
					className="w-full sm:w-1/2 max-w-lg"
					alt=""
				/>
				<div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
					<div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
						<div>
							<p className="text-4xl font-medium text-gray-800">10+</p>
							<p>Years of Excellence</p>
						</div>
						<div>
							<p className="text-4xl font-medium text-gray-800">12+</p>
							<p>Projects Completed</p>
						</div>
						<div>
							<p className="text-4xl font-medium text-gray-800">20+</p>
							<p>Mn. Sq. Ft. Delivered</p>
						</div>
						<div>
							<p className="text-4xl font-medium text-gray-800">25+</p>
							<p>Ongoing Projects</p>
						</div>
					</div>
					<p className="my-10 max-w-lg">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
						veniam dignissimos, odio unde deserunt molestiae at nulla dolore
						quasi recusandae vitae, mollitia voluptatem ipsam doloribus impedit,
						dolores doloremque. Molestias, commodi! Nostrum, voluptatem! Et
						sapiente vel hic repellendus!
					</p>
					<button className="bg-blue-600 text-white px-8 py-2 rounded">
						Learn More
					</button>
				</div>
			</div>
		</div>
	);
};

export default About;
