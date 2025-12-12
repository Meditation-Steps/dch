import React from "react";
import { useTranslation } from "react-i18next";
import { usePageNavigation } from "../Layout/Navigation";
import MeditationTimer from "../Timer/MeditationTimer";

export default function MeditationPage() {
	const { t } = useTranslation("pages");

	usePageNavigation({ prev: "samgacchhadham-mantra", next: "nityam-shuddham-mantra" });

	return (
		<MeditationTimer
			durationMinutes={30}
			title={t("page05.title")}
			subtitle={t("page05.subtitle")}
		/>
	);
}
