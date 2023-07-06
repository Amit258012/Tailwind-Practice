function Home() {
	return (
		<div className="grid lg:grid-cols-2 h-screen bg-sky-100 grid-cols-1">
			<div>
				<h1 className="font-sans font-bold text-sky-800 text-2xl mt-36 mb-6 ">
					Welcome to my Practice Tour!
				</h1>
				<p className="p-4 text-center mx-20">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Ipsam facere recusandae molestiae! Pariatur assumenda
					architecto id corrupti, aspernatur omnis doloremque
					voluptatum vero eum modi rerum magnam maxime natus aperiam
					dolorum?
				</p>
				<button className="py-3 px-8 bg-blue-600 rounded-lg mt-36 text-white font-bold ">
					Apply now
				</button>
				<button className="py-3 px-8 bg-slate-600 rounded-lg mt-36 mx-6 text-white">
					Learn more
				</button>
			</div>
			<div className="flex flex-col justify-around my-20 mx-auto">
				<p className=" text-gray-900 font-medium text-center  text-2xl w-3/4 mx-auto">
					Let's Work Remotly & Enjoy Both Family Time & Work.
				</p>
				<img
					src="hero.svg"
					alt="hero"
					className=" place-items-center w-full h-full"
				/>
			</div>
		</div>
	);
}

export default Home;
