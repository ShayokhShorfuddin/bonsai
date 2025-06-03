import CardBG1 from "@/assets/card-bg-1.png";
import CardBG2 from "@/assets/card-bg-2.png";
import CardBG3 from "@/assets/card-bg-3.png";

import Consulting from "@/assets/consulting.png";
import Projects from "@/assets/projects.png";
import SmithCo from "@/assets/smith-co.png";

import Desktop from "@/assets/desktop.png";
import Star from "@/assets/star.svg";
import {
	Book,
	BookCheck,
	Check,
	CheckCircleIcon,
	Code,
	CreditCard,
	Database,
	DollarSign,
	HandCoins,
	Handshake,
	IdCard,
	Library,
	Paperclip,
	Presentation,
	Sheet,
	Timer,
	User,
} from "lucide-react";

export default function Landing() {
	return (
		<section aria-label="Landing section" className="mt-26 px-5 sm:px-10">
			<p className="text-sm text-neutral-500 font-medium text-center">
				Welcome to Bonsai
			</p>

			<h1 className="text-4xl md:text-6xl font-medium text-center mt-5 max-w-2xl mx-auto">
				The unified platform for service businesses
			</h1>

			<p className="text-center mt-7 text-sm md:text-base">
				Consolidate your projects, clients, and billing operations into one{" "}
				<br className="hidden xs:block" />
				integrated, easy-to-use platform.
			</p>

			<div className="flex justify-center mt-7 gap-0.5">
				<img src={Star} alt="" />
				<img src={Star} alt="" />
				<img src={Star} alt="" />
				<img src={Star} alt="" />
				<img src={Star} alt="" />

				<p className="text-sm text-neutral-500 ml-1">1,020+ Reviews</p>
			</div>

			<Features />

			<img
				src={Desktop}
				alt="Desktop"
				className="w-full rounded-md xs:rounded-xl mt-5"
			/>

			<CardsGrid />
		</section>
	);
}

function Features() {
	const features = [
		{ icon: Database, label: "CRM" },
		{ icon: Code, label: "Pipeline" },
		{ icon: User, label: "Client Portal" },
		{ icon: DollarSign, label: "Estimates" },
		{ icon: Paperclip, label: "Proposals" },
		{ icon: Handshake, label: "Agreements" },
		{ icon: Book, label: "Forms" },
		{ icon: Presentation, label: "Projects" },
		{ icon: Check, label: "Tasks" },
		{ icon: Timer, label: "Time tracking" },
		{ icon: Sheet, label: "Timesheets" },
		{ icon: Library, label: "Resourcing" },
		{ icon: BookCheck, label: "Invoicing" },
		{ icon: HandCoins, label: "Payments" },
		{ icon: CreditCard, label: "Expenses" },
		{ icon: IdCard, label: "Rate cards" },
		{ icon: CheckCircleIcon, label: "Bookkeeping" },
	];

	return (
		<div className="flex gap-8 mt-14 overflow-x-hidden bg-neutral-100 py-2 rounded-md w-full select-none group">
			{/* Two uls for infinite marque effect */}
			<ul className="flex items-center gap-8 animate-feature-marque group-hover:animate-pause">
				{features.map((feature, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<li key={index} className="flex items-center gap-2">
						<feature.icon size={17} />
						<p className="text-nowrap text-sm">{feature.label}</p>
					</li>
				))}
			</ul>

			<ul className="flex items-center gap-8 animate-feature-marque group-hover:animate-pause">
				{features.map((feature, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<li key={index} className="flex items-center gap-2">
						<feature.icon size={17} />
						<p className="text-nowrap text-sm">{feature.label}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

function CardsGrid() {
	const cardsData = [
		{
			image: SmithCo,
			background: CardBG1,
			title: "Client Management",
			description:
				"Everything you need to estimate and close more projects, collaborate with clients, and provide a top-notch client experience.",
		},
		{
			image: Projects,
			background: CardBG3,
			title: "Project Management",
			description:
				"Organize and monitor your project delivery with integrated tools that your team will love using.",
		},
		{
			image: Consulting,
			background: CardBG2,
			title: "Finance Management",
			description:
				"Monitor revenue with detailed finance reports. Put billing on autopilot with recurring payments and retainers.",
		},
	];

	// TODO: Fix image overflow issues on smaller screens
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-10">
			{cardsData.map((card) => (
				<div key={card.title} className="flex flex-col group">
					{/* Texts */}
					<div className="p-5 flex-1">
						<p className="text-xl font-medium">{card.title}</p>
						<p className="text-md font-medium text-neutral-500 mt-4">
							{card.description}
						</p>
					</div>

					{/* Image */}
					<div className="h-80 mt-5 relative">
						<img
							src={card.image}
							alt=""
							className="absolute z-10 max-w-3/4 rounded-t-lg bottom-0 left-1/2 transform -translate-x-1/2 group-hover:scale-105 transition-transform duration-300"
						/>

						<div className="absolute inset-0 w-full h-full bg-[#e9e7e3] transition-opacity duration-400 group-hover:opacity-0" />
						<img
							src={card.background}
							alt=""
							className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-400 group-hover:opacity-100"
						/>
					</div>
				</div>
			))}
		</div>
	);
}
