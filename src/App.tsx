import ClientManagement from "./components/ClientManagement";
import Companies from "./components/Companies";
import FinancialManagement from "./components/FinancialManagement";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import ProjectManagement from "./components/ProjectManagement";

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
			</main>
		</>
	);
}
