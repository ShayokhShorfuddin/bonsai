import Jillian from "@/assets/jillian.png";
import Johnny from "@/assets/johnny.png";
import Makayla from "@/assets/makayla.png";
import Robert from "@/assets/robert.png";
import Star from "@/assets/star.svg";
import Taylor from "@/assets/taylor.png";
import Willian from "@/assets/willian.png";

interface Testimonial {
	image: string;
	name: string;
	designation: string;
	testimony: string;
}

export default function Testimonials() {
	return (
		<section className="flex flex-col items-center mt-30 px-5 sm:px-10">
			<p className="text-4xl md:text-5xl font-medium text-center">
				See why customers love <br className="hidden sm:block" /> using Bonsai
			</p>

			<button
				type="button"
				className="bg-neutral-950 text-white px-5 py-3 rounded-full font-medium mt-7 hover:cursor-pointer w-fit"
			>
				Get Started
			</button>

			<TestimonialGrid />

			<button
				type="button"
				className="hidden lg:block px-5 py-2.5 border border-neutral-300 rounded-full hover:bg-neutral-950 hover:text-white transition-colors duration-200 cursor-pointer mt-10 font-medium"
			>
				See Customer Stories
			</button>
		</section>
	);
}

function TestimonialGrid() {
	const testimonials: Testimonial[] = [
		{
			testimony:
				"With Bonsai's project insights, I get a real-time view on our budget and business financials. It costs me a click, instead of a full-time job. I calculated saving $150,000 a year.",
			image: Willian,
			name: "Willian",
			designation: "Founder",
		},
		{
			testimony:
				"Project management is so much easier. Now everyone is on the same page. Information stays organized from the moment a lead becomes a client and throughout the project.",
			image: Johnny,
			name: "Johnny",
			designation: "Owner",
		},
		{
			testimony:
				"Bonsai has been a great tool for our business. We wanted to find an all in one solution that was seamless for clients to use and the team has been a great resource when we have questions!",
			image: Makayla,
			name: "Makayla",
			designation: "Co-Director",
		},
		{
			testimony:
				"In our project board, we have full visibility of steps from client onboarding all the way through to billing. We can track every client project without missing any steps.",
			image: Jillian,
			name: "Jillian",
			designation: "Founder",
		},
		{
			testimony:
				"Time is our most precious asset. Instead of taking 1 hour to dig up a report, it now takes us 5 minutes. That is one of our most important gains in productivity with Bonsai.",
			image: Robert,
			name: "Robert",
			designation: "Founder",
		},
		{
			testimony:
				"We went from 4 hours to 15 minutes to send beautiful proposals. It takes us 0 minutes to send nicely designed invoices with auto-invoicing.",
			image: Taylor,
			name: "Taylor",
			designation: "Head of Operations",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
			{testimonials.map((testimonial) => (
				<TestimonialCard key={testimonial.name} {...testimonial} />
			))}
		</div>
	);
}

function TestimonialCard({ testimony, image, name, designation }: Testimonial) {
	return (
		<div className="border border-neutral-200 p-5 rounded-xl">
			<ul className="flex items-center gap-x-0.5">
				<li>
					<img src={Star} alt="" />
				</li>
				<li>
					<img src={Star} alt="" />
				</li>
				<li>
					<img src={Star} alt="" />
				</li>
				<li>
					<img src={Star} alt="" />
				</li>
				<li>
					<img src={Star} alt="" />
				</li>
			</ul>

			<p className="font-medium mt-4">{testimony}</p>

			<div className="flex items-center gap-x-2 mt-5">
				<img src={image} alt="" className="size-7 rounded-full" />
				<p className="text-sm font-medium">{`${name}, ${designation}`}</p>
			</div>
		</div>
	);
}
