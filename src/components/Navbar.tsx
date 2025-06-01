import BonsaiLogo from "@/assets/bonsai-logo.svg";

export default function Navbar() {
	return (
		<header>
			<nav className="flex justify-between items-center mt-3 mx-5 text-sm">
				{/* Logo and links */}
				<ul className="flex gap-7 items-center">
					<li>
						<a href="/">
							<img src={BonsaiLogo} alt="Bonsai logo" className="w-28" />
						</a>
					</li>
					<li>
						<a
							href="/"
							className="hover:text-neutral-400 transition-colors duration-300"
						>
							Products
						</a>
					</li>
					<li>
						<a
							href="/"
							className="hover:text-neutral-400 transition-colors duration-300"
						>
							Solutions
						</a>
					</li>
					<li>
						<a
							href="/"
							className="hover:text-neutral-400 transition-colors duration-300"
						>
							Resources
						</a>
					</li>
					<li>
						<a
							href="/"
							className="hover:text-neutral-400 transition-colors duration-300"
						>
							Customer stories
						</a>
					</li>
					<li>
						<a
							href="/"
							className="hover:text-neutral-400 transition-colors duration-300"
						>
							Price
						</a>
					</li>
				</ul>

				{/* Buttons */}
				<ul className="flex gap-4 items-center font-medium">
					<li>
						<a
							href="/"
							className="hover:text-neutral-400 transition-colors duration-300"
						>
							Login
						</a>
					</li>
					<li>
						<button
							type="button"
							className="px-4 py-2.5 border border-neutral-300 rounded-full hover:bg-neutral-950 hover:text-white transition-colors duration-200 cursor-pointer"
						>
							Book a demo
						</button>
					</li>
					<li>
						<button
							type="button"
							className="px-4 py-2.5 bg-neutral-950 rounded-full text-white cursor-pointer"
						>
							Get started
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
}
