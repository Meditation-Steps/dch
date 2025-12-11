import React from "react";
import { NavigationProvider } from "../Layout/Navigation";
import MeditationTimer from "../Timer/MeditationTimer";

export default function Page02() {
	return (
		<NavigationProvider config={{ prev: "page01", next: "page03" }}>
			<MeditationTimer durationMinutes={30} />
		</NavigationProvider>
	);
}
