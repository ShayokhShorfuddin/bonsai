import Anagram from "@/assets/anagram.png";
import Switchboard from "@/assets/switchboard.png";
import Symmetric from "@/assets/symmetric.png";
import Tlhmarketing from "@/assets/tlhmarketing.png";
import Zabalmedia from "@/assets/zabalmedia.png";

export default function Companies() {
	return (
		<section className="mt-40 overflow-x-hidden">
			<p className="text-center font-medium text-lg">
				Join 10,000+ companies using Bonsai to streamline their operations.
			</p>

			<CompaniesMarquee />
		</section>
	);
}

function CompaniesMarquee() {
	const companyLogos = [
		Switchboard,
		Symmetric,
		Tlhmarketing,
		Zabalmedia,
		Anagram,
	];

	return (
		<div className="flex gap-8 w-max mt-10 select-none group">
			{/* Duplicate logos for infinite marque effect */}
			<ul className="flex items-center gap-8 animate-company-marque group-hover:animate-pause">
				{companyLogos.map((logo, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<li key={index}>
						<img src={logo} alt="" className="h-10 opacity-[0.5]" />
					</li>
				))}
			</ul>

			<ul className="flex items-center gap-8 animate-company-marque group-hover:animate-pause">
				{companyLogos.map((logo, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<li key={index}>
						<img src={logo} alt="" className="h-10 opacity-[0.5]" />
					</li>
				))}
			</ul>

			<ul className="flex items-center gap-8 animate-company-marque group-hover:animate-pause">
				{companyLogos.map((logo, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<li key={index}>
						<img src={logo} alt="" className="h-10 opacity-[0.5]" />
					</li>
				))}
			</ul>
		</div>
	);
}
