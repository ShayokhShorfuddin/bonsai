import Budget from "@/assets/budget.png";
import {
	BookCheck,
	ChartBar,
	CreditCard,
	DollarSign,
	HandCoins,
	IdCard,
	Rotate3DIcon,
} from "lucide-react";
export default function FinancialManagement() {
	return (
		<section className="mt-[12rem] px-10">
			<div className="flex flex-col lg:flex-row items-center text-center lg:text-left justify-between gap-10">
				{/* Texts */}
				<div>
					<p className="text-neutral-600">Financial Management</p>

					<p className="mt-7 text-4xl md:text-5xl font-medium">
						Track revenue & simplify billing
					</p>

					<p className="text-neutral-500 mt-7">
						<span className="font-semibold text-neutral-950">
							Get financial clarity
						</span>{" "}
						with detailed reports, recurring payments and streamlined retainer
						management
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
				<img src={Budget} alt="" className="w-2xl rounded-lg h-min" />
			</div>
		</section>
	);
}

function Features() {
	const features = [
		{ icon: BookCheck, label: "Invoicing" },
		{ icon: HandCoins, label: "Payments" },
		{ icon: IdCard, label: "Rate cards" },
		{ icon: DollarSign, label: "Budgets" },
		{ icon: CreditCard, label: "Expenses" },
		{ icon: ChartBar, label: "Forecasting" },
		{ icon: Rotate3DIcon, label: "Integrations" },
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
