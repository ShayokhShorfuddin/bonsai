import Foo from "./components/Foo";
import Navbar from "./components/Navbar";

export default function App() {
	return (
		<>
			<Navbar />

			<main id="main">
				<Foo />
			</main>
		</>
	);
}
