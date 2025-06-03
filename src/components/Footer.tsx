import LinkedIn from "@/assets/linkedin.svg";
import X from "@/assets/x.svg";
import Youtube from "@/assets/youtube.svg";

import Logo from "@/assets/bonsai-logo-white.svg";

export default function Footer() {
	return (
		<footer className="bg-neutral-950 py-10 px-5 sm:px-10">
			<FooterLinks />
			<FooterTexts />
		</footer>
	);
}

function FooterLinks() {
	const links = [
		{
			title: "Products",
			subordinateLinks: [
				"CRM",
				"Pipeline",
				"Estimates",
				"Proposals",
				"Agreements",
				"Forms",
				"Client portal",
				"Projects",
				"Task management",
				"Time tracking",
				"Timesheets",
				"Resource planning",
				"Reporting",
				"Billing",
				"Expenses",
				"Payments",
				"Bookkeeping",
				"Rate cards",
				"Budgeting",
				"Customer stories",
				"Pricing",
			],
		},

		{
			title: "Solutions",
			subordinateLinks: [
				"Creative agencies",
				"Marketing agencies",
				"Software agencies",
				"Consulting",
				"Engineering",
				"IT Services",
				"Accounting",
				"Architecture",
				"Interior design",
				"See all industries",
				"Owners",
				"Project managers",
				"Operations",
				"Team members",
			],
		},

		{
			title: "Resources",
			subordinateLinks: [
				"Blog",
				"Utilization rate calculator",
				"Billable rate calculator",
				"Signature maker",
				"How to write a contract",
				"Self-employed taxes hub",
				"Self-employed tax deductions",
				"All resources",
			],
		},

		{
			title: "Templates",
			subordinateLinks: [
				"Contracts",
				"Proposals",
				"Invoices",
				"Forms",
				"Quotes",
				"Scopes of work",
				"Agreements",
				"Briefs",
				"Timesheets",
			],
		},

		{
			title: "Company",
			subordinateLinks: [
				"Help center",
				"Contact us",
				"Privacy",
				"Terms and conditions",
				"Careers",
				"Affiliate program",
			],
		},
	];

	return (
		<div className="grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-5 gap-x-20 gap-y-10">
			{links.map((link) => (
				<div key={link.title}>
					<p className="text-white font-medium mb-2">{link.title}</p>

					{link.subordinateLinks.map((subLink) => (
						<a href="/" key={subLink} className="text-neutral-400 mb-2 block">
							{subLink}
						</a>
					))}
				</div>
			))}
		</div>
	);
}

function FooterTexts() {
	return (
		<div>
			<div className="w-full h-[0.5px] bg-neutral-800 my-10" />

			<div className="flex justify-between items-center flex-wrap gap-y-5">
				<div className="flex gap-x-5 items-center flex-wrap gap-y-3">
					<img src={Logo} alt="" className="h-6" />
					<p className="text-neutral-500 text-sm">
						© 2025 Bonsai Technologies Inc.
					</p>
				</div>

				<div className="flex gap-x-4">
					<img src={LinkedIn} alt="" className="size-5" />
					<img src={Youtube} alt="" className="size-5" />
					<img src={X} alt="" className="size-5" />
				</div>
			</div>

			<p className="text-sm mt-5 text-neutral-500 font-medium">
				Bonsai partners with Stripe Payments Company for money transmission
				services and account services with funds held at Evolve Bank & Trust and
				Fifth Third Bank, Members FDIC. Bonsai cards (Visa® Prepaid Cards) are
				issued by Celtic Bank, Member FDIC. <br /> <br />
				*Stripe Treasury Accounts are eligible for FDIC pass-through deposit
				insurance if they meet certain requirements. The accounts are eligible
				only to the extent pass-through insurance is permitted by the rules and
				regulations of the FDIC, and if the requirements for pass-through
				insurance are satisfied. The FDIC insurance applies up to 250,000 USD
				per depositor, per financial institution, for deposits held in the same
				ownership capacity. Neither Stripe nor Bonsai are an FDIC insured
				institution. The FDIC's deposit insurance coverage only protects against
				the failure of an FDIC insured depository institution.Bonsai is not a
				law firm, and does not provide legal services, advice, or
				representation. Some product imagery is for illustrative purposes only
				and the actual product experience may differ. **Beyond the 7-day trial,
				there are no monthly fees and no minimums — usage is conditioned to
				being on a Bonsai paid plan, see details here:
				https://www.hellobonsai.com/pricing
			</p>
		</div>
	);
}
