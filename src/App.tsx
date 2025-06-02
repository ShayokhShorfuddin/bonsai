import ClientManagement from "./components/ClientManagement";
import Companies from "./components/Companies";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

export default function App() {
	return (
		<>
			<Navbar />

			<main id="main">
				<Landing />
				<Companies />
				<ClientManagement />
			</main>
		</>
	);
}
