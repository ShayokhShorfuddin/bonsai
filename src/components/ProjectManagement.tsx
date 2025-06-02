import ProjectsProgress from "@/assets/projects-progress.png";
import {
	ChartBar,
	CheckCircle,
	DollarSign,
	LucideAudioLines,
	ReceiptPoundSterlingIcon,
	Sheet,
	TimerIcon,
	Users,
} from "lucide-react";
export default function ProjectManagement() {
	return (
		<section className="mt-[12rem] px-5 sm:px-10">
			<div className="flex flex-col lg:flex-row items-center text-center lg:text-left justify-between gap-10">
				{/* Texts */}
				<div>
					<p className="text-neutral-600">Project Management</p>

					<p className="mt-7 text-4xl md:text-5xl font-medium">
						Deliver projects on time and budget
					</p>

					<p className="text-neutral-500 mt-7">
						<span className="font-semibold text-neutral-950">
							Organize and monitor your project delivery
						</span>{" "}
						with integrated tools that your team will love using.
					</p>

					<Features />

					<button
						type="button"
						className="bg-neutral-950 text-white px-5 py-3 rounded-full font-medium mt-7 hover:cursor-pointer focus:ring-4 focus:ring-green-500 focus:outline-none"
					>
						Get Started
					</button>
				</div>

				{/* Images */}
				<img src={ProjectsProgress} alt="" className="w-2xl rounded-lg h-min" />
			</div>
		</section>
	);
}

function Features() {
	const features = [
		{ icon: CheckCircle, label: "Tasks" },
		{ icon: ChartBar, label: "Gantt Chart" },
		{ icon: TimerIcon, label: "Time Tracking" },
		{ icon: DollarSign, label: "Budgets" },
		{ icon: Sheet, label: "Timesheets" },
		{ icon: Users, label: "Client Portal" },
		{ icon: ReceiptPoundSterlingIcon, label: "Reports" },
		{ icon: LucideAudioLines, label: "Resource Planning" },
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
