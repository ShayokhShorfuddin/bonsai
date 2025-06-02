export default function CTA() {
	return (
		<section className="mt-30 px-5 sm:px-10 flex flex-col items-center">
			<p className="text-center text-4xl md:text-5xl font-medium">
				Get started in 30 seconds.
			</p>
			<p className="text-center mt-5 text-neutral-800 font-medium">
				Simplify your business operations and consolidate your projects, clients
				and team <br className="hidden md:block" /> into one integrated,
				easy-to-use platform.
			</p>

			<div className="flex flex-col xs:flex-row items-center mt-8 gap-x-5 gap-y-2.5">
				<button
					type="button"
					className="bg-neutral-950 text-white px-5 py-3 rounded-full font-medium hover:cursor-pointer"
				>
					Get Started
				</button>

				<button
					type="button"
					className="px-4 py-2.5 border border-neutral-300 rounded-full cursor-pointer font-medium"
				>
					Book a demo
				</button>
			</div>
		</section>
	);
}
