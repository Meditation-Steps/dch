import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { usePageNavigation } from "../Layout/Navigation";
import MeditationTimer from "../Timer/MeditationTimer";
import "./Page.css";

export default function KirtanPage() {
	const { t } = useTranslation("pages");
	const [hideCursor, setHideCursor] = useState(false);

	usePageNavigation({ prev: "prabhat-samgiita", next: "samgacchhadham-mantra" });

	useEffect(() => {
		let cursorTimeoutId: NodeJS.Timeout;

		const handleUserActivity = () => {
			setHideCursor(false);

			clearTimeout(cursorTimeoutId);

			cursorTimeoutId = setTimeout(() => {
				setHideCursor(true);
			}, 3000);
		};

		window.addEventListener("mousemove", handleUserActivity);
		window.addEventListener("click", handleUserActivity);

		// Initial timeout
		cursorTimeoutId = setTimeout(() => {
			setHideCursor(true);
		}, 3000);

		return () => {
			window.removeEventListener("mousemove", handleUserActivity);
			window.removeEventListener("click", handleUserActivity);
			clearTimeout(cursorTimeoutId);
		};
	}, []);

	return (
		<div className="page-container" style={{ cursor: hideCursor ? "none" : "auto" }}>
			<header className="page-header">
				<h1 className="page-title">{t("page02.title")}</h1>
			</header>

			<div className="page-main">
				<div className="page-side-image">
					<img src="/dch/images/pratik.png" alt="Pratik" />
				</div>

				<div className="page-side-image">
					<img src="/dch/images/guru_white.jpeg" alt="Guru" />
				</div>
			</div>

			<MeditationTimer durationMinutes={30} />
		</div>
	);
}
