import Deals from "@/assets/deals.png";
import {
	Book,
	CircleDollarSignIcon,
	Code2Icon,
	Handshake,
	Paperclip,
	User,
	Users,
} from "lucide-react";
export default function ClientManagement() {
	return (
		<section className="mt-[12rem] px-5 sm:px-10">
			<div className="flex flex-col lg:flex-row items-center text-center lg:text-left justify-between gap-10">
				{/* Texts */}
				<div>
					<p className="text-neutral-600">Client Management</p>

					<p className="mt-7 text-4xl md:text-5xl font-medium">
						Streamline your client workflow
					</p>

					<p className="text-neutral-500 mt-7">
						<span className="font-semibold text-neutral-950">
							Manage leads and automate your client workflow
						</span>{" "}
						while delivering a top-notch experience.
					</p>

					<Features />

					<button
						type="button"
						className="bg-neutral-950 text-white px-5 py-3 rounded-full font-medium mt-7 hover:cursor-pointer"
					>
						Get Started
					</button>
				</div>

				{/* Images */}
				<img src={Deals} alt="" className="w-2xl rounded-lg h-min" />
			</div>
		</section>
	);
}

function Features() {
	const features = [
		{ icon: User, label: "CRM" },
		{ icon: Handshake, label: "Deals" },
		{ icon: CircleDollarSignIcon, label: "Estimates" },
		{ icon: Paperclip, label: "Proposals" },
		{ icon: Book, label: "Contracts" },
		{ icon: User, label: "Retainers" },
		{ icon: Book, label: "Forms" },
		{ icon: Users, label: "Client Portal" },
		{ icon: Code2Icon, label: "Automation" },
	];

	return (
		<ul className="flex flex-wrap justify-center lg:justify-start gap-2 mt-6 select-none">
			{features.map((feature) => (
				<li
					key={feature.label}
					className="flex items-center gap-3 border border-neutral-300 rounded-md p-2 hover:bg-neutral-100 transition-colors duration-200"
				>
					<feature.icon size={16} />
					<p className="text-sm font-medium">{feature.label}</p>
				</li>
			))}
		</ul>
	);
}
