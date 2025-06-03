import CTA from "./components/CTA";
import ClientManagement from "./components/ClientManagement";
import Companies from "./components/Companies";
import Consolidate from "./components/Consolidate";
import FinancialManagement from "./components/FinancialManagement";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Platform from "./components/Platform";
import ProjectManagement from "./components/ProjectManagement";
import Smarter from "./components/Smarter";
import Testimonials from "./components/Testimonials";

export default function App() {
	return (
		<>
			<Navbar />

			<main id="main">
				<Landing />
				<Companies />
				<ClientManagement />
				<ProjectManagement />
				<FinancialManagement />
				<Testimonials />
				<Smarter />
				<Platform />
				<CTA />
				<Consolidate />
				<Footer />
			</main>
		</>
	);
}
