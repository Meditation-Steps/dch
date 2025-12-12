import React from "react";
import { useTranslation } from "react-i18next";
import { usePageNavigation } from "../Layout/Navigation";

export default function IndexPage() {
	const { t } = useTranslation("pages");

	// Set navigation config for this page
	usePageNavigation({ next: "prabhat-samgiita" });

	return (
		<div className="page-container">
			<header className="page-header">
				<h1 className="page-title">{t("index.title")}</h1>
				<p className="page-subtitle">{t("index.subtitle")}</p>
			</header>

			<main className="page-content">
				<p>{t("index.welcome")}</p>
			</main>
		</div>
	);
}
