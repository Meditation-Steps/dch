import React from "react";
import { useTranslation } from "react-i18next";
import { usePageNavigation } from "../Layout/Navigation";

export default function PrabhatSamgiita() {
	const { t } = useTranslation("pages");

	usePageNavigation({ prev: "index", next: "kirtan" });

	return (
		<div className="page-container">
			<header className="page-header">
				<img src="/dch/images/img02.png" alt="Header" />
				<h1 className="page-title">{t("page01.title")}</h1>
			</header>

			<main className="page-content">
				<p>{t("page01.content.p1")}</p>
				<p>{t("page01.content.p2")}</p>
			</main>
		</div>
	);
}
