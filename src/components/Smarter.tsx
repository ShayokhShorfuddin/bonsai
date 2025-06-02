import Agreement from "@/assets/agreement.png";
import Forecast from "@/assets/forecast.png";

export default function Smarter() {
	return (
		<section className="mt-30 px-5 sm:px-10">
			<p className="text-4xl md:text-5xl text-center font-medium">
				Work smarter by keeping <br /> everything in one place
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-16">
				<div>
					<img src={Agreement} alt="" className="rounded-lg" />
					<p className="text-xl font-medium mt-5">Automations</p>
					<p className="text-neutral-500 mt-2">
						Save time with automated workflows.
					</p>
				</div>
				<div>
					<img src={Forecast} alt="" className="rounded-lg" />
					<p className="text-xl font-medium mt-5">Reports</p>
					<p className="text-neutral-500 mt-2">
						Dive into key KPIs and get clarity on financials.
					</p>
				</div>
			</div>
		</section>
	);
}
