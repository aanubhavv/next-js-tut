import Hello from "@/components/Hello"
import AlbumsServer from "@/components/AlbumsServer";

export default function Home() {
	console.log('Server component')

	return (
		<main>
			<div className="text-5xl underline">Hello World</div>
			<Hello />
			<AlbumsServer />
		</main>
	);
}
