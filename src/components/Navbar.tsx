import BonsaiLogo from "@/assets/bonsai-logo.svg";
import Close from "@/assets/close.svg";
import Menu from "@/assets/menu.svg";
import { useState } from "react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header>
			<nav className="flex justify-between items-center mt-3 mx-5 text-sm">
				<a
					href="#main"
					className="absolute top-0 left-0 -translate-x-full focus:translate-x-0 p-5 bg-green-500"
				>
					Skip to main content
				</a>

				{/* Logo and links */}
				<ul className="flex gap-7 items-center">
					<li>
						<a href="/">
							<img src={BonsaiLogo} alt="Bonsai logo" className="w-28" />
						</a>
					</li>
					<li className="hidden lg:block">
						<a
							href="/"
							className="hover:text-neutral-400 transition-colors duration-300"
						>
							Products
						</a>
					</li>
					<li className="hidden lg:block">
						<a
							href="/"
							className="hover:text-neutral-400 transition-colors duration-300"
						>
							Solutions
						</a>
					</li>
					<li className="hidden lg:block">
						<a
							href="/"
							className="hover:text-neutral-400 transition-colors duration-300"
						>
							Resources
						</a>
					</li>
					<li className="hidden lg:block">
						<a
							href="/"
							className="hover:text-neutral-400 transition-colors duration-300"
						>
							Customer stories
						</a>
					</li>
					<li className="hidden lg:block">
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
							className="hidden lg:block hover:text-neutral-400 transition-colors duration-300"
						>
							Login
						</a>
					</li>
					<li>
						<button
							type="button"
							className="hidden lg:block px-4 py-2.5 border border-neutral-300 rounded-full hover:bg-neutral-950 hover:text-white transition-colors duration-200 cursor-pointer"
						>
							Book a demo
						</button>
					</li>
					<li>
						<button
							type="button"
							className="hidden xs:block px-4 py-2.5 bg-neutral-950 rounded-full text-white cursor-pointer focus:ring-4 focus:ring-green-500 focus:outline-none"
						>
							Get started
						</button>
					</li>
					<li>
						<button
							type="button"
							className="lg:hidden py-2.5 px-2 hover:cursor-pointer"
							onClick={() => {
								if (isMenuOpen) {
									document.body.style.overflow = "auto";
									setIsMenuOpen(false);
								} else {
									document.body.style.overflow = "hidden";
									setIsMenuOpen(true);
								}
							}}
						>
							<img
								src={isMenuOpen ? Close : Menu}
								alt={isMenuOpen ? "Close menu" : "Show menu"}
							/>
						</button>
					</li>
				</ul>

				<NavbarDropdown isMenuOpen={isMenuOpen} />
			</nav>
		</header>
	);
}

function NavbarDropdown({ isMenuOpen }: { isMenuOpen: boolean }) {
	return (
		<ul
			className={`absolute lg:hidden flex flex-col left-0 top-15 w-full h-svh text-lg font-medium gap-y-6 ${!isMenuOpen && "hidden"} z-10 text-center px-5 bg-white`}
		>
			<li className="mt-10">
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
					className="px-4 py-2.5 border border-neutral-300 rounded-full hover:bg-neutral-950 hover:text-white transition-colors duration-200 cursor-pointer w-full"
				>
					Book a demo
				</button>
			</li>
			<li>
				<button
					type="button"
					className="px-4 py-2.5 bg-neutral-950 rounded-full text-white cursor-pointer focus:ring-4 focus:ring-green-500 focus:outline-none w-full"
				>
					Get started
				</button>
			</li>
		</ul>
	);
}
