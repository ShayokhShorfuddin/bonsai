import Manager from "@/assets/manager.png";
import Member from "@/assets/member.png";
import Operator from "@/assets/operator.png";
import Owner from "@/assets/owner.png";

import Chain from "@/assets/chain.png";
import Growth from "@/assets/growth.png";
import Headset from "@/assets/headset.png";
import Wave from "@/assets/wave.png";

interface PeopleData {
	image: string;
	icon: string;
	title: string;
	description: string;
}

export default function Platform() {
	return (
		<section className="mt-30 px-5 sm:px-10 flex flex-col items-center">
			<p className="text-4xl md:text-5xl text-center font-medium">
				A platform built for everyone on the team
			</p>

			<p className="text-center mt-5 text-neutral-700">
				With tailored features for every role, Bonsai ensures smooth
				collaboration, efficient operations,
				<br className="hidden md:block" />
				and simplified project management across the board.
			</p>

			<button
				type="button"
				className="bg-neutral-950 text-white px-5 py-3 rounded-full font-medium mt-7 hover:cursor-pointer"
			>
				Get Started
			</button>

			<PeoplesGrid />

			<div className="h-14" />
		</section>
	);
}

function PeoplesGrid() {
	const peoplesData: PeopleData[] = [
		{
			image: Owner,
			icon: Wave,
			title: "Owners",
			description:
				"Keep sales, staffing, projects, and financials in check—with real-time metrics that power faster, better decisions",
		},
		{
			image: Operator,
			icon: Chain,
			title: "Operations",
			description:
				"Streamline reporting with live profitability, resourcing, and performance tracking—no spreadsheets, no report chasing",
		},
		{
			image: Manager,
			icon: Growth,
			title: "Project Managers",
			description:
				"Keep every project on budget, on time, and fully resourced—with less manual tracking and more automations",
		},
		{
			image: Member,
			icon: Headset,
			title: "Team Members",
			description:
				"Make work enjoyable with one sleek, all-in-one workspace that’s fast, organized, and built for focus",
		},
	];

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-18">
			{peoplesData.map((person) => (
				<div key={person.title} className="flex flex-col">
					<img src={person.image} alt="" />

					<div className="bg-neutral-950 flex flex-1 gap-x-4 p-5">
						<img src={person.icon} alt="" className="size-7" />
						<div>
							<p className="text-lg font-medium text-white">{person.title}</p>
							<p className="text-neutral-400 mt-1">{person.description}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
