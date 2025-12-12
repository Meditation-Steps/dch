import React from "react";
import { usePageNavigation } from "../Layout/Navigation";
import MeditationTimer from "../Timer/MeditationTimer";

export default function KirtanPage() {
	usePageNavigation({ prev: "prabhat-samgiita", next: "samgacchhadham-mantra" });

	return <MeditationTimer durationMinutes={30} />;
}
