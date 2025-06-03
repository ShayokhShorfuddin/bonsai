import ButtonBG from "@/assets/button-bg.png";
import Star from "@/assets/star.svg";
import Willian from "@/assets/willian.png";

export default function Consolidate() {
	return (
		<section className="mt-[12rem] py-30 px-5 sm:px-10 flex flex-col md:flex-row justify-center items-center gap-y-5 gap-x-20 bg-neutral-950">
			{/* Texts */}
			<div>
				<p className="text-white text-4xl md:text-5xl font-medium max-w-lg leading-tight md:leading-14">
					Consolidate projects, clients, and billing into one integrated
					platform.
				</p>

				<div className="flex gap-x-2 items-center mt-5">
					<div className="flex gap-x-0.5">
						<img src={Star} alt="" className="size-4" />
						<img src={Star} alt="" className="size-4" />
						<img src={Star} alt="" className="size-4" />
						<img src={Star} alt="" className="size-4" />
						<img src={Star} alt="" className="size-4" />
					</div>

					<p className="text-neutral-500 text-sm font-medium">1020+ Reviews</p>
				</div>
			</div>

			{/* Images */}
			<div className="flex flex-col max-w-lg">
				{/* Button */}
				<div className="relative w-fit">
					<button
						type="button"
						className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-neutral-950 font-semibold px-6 py-3 rounded-full z-10 text-sm hover:cursor-pointer text-nowrap"
					>
						Get Started
					</button>

					<img src={ButtonBG} alt="" className="rounded-md" />
				</div>

				{/* Testimony */}
				<div className="p-5 bg-[#262626] rounded-md mt-5">
					<p className="text-neutral-400 font-medium text-lg">
						“Bonsai streamlines operations in our thriving team of 32+ people.
						Its blend of simplicity and data-driven insights are invaluable as
						we scale and grow.”
					</p>

					<div className="flex gap-x-3 mt-6">
						<img src={Willian} alt="" className="size-8 rounded-full" />

						<div>
							<p className="text-white text-sm">Willian</p>
							<p className="text-neutral-400 text-sm">CEO, Zabal Media</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
