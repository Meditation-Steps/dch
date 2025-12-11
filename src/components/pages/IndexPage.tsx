import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavigationProvider } from "../Layout/Navigation";

export default function IndexPage() {
	const { t } = useTranslation("pages");
	const { lang } = useParams<{ lang: string }>();

	return (
		<NavigationProvider config={{ next: "page01" }}>
			<div className="page-container">
				<header className="page-header">
					<img src="/images/img_01.jpg" alt="Dharma Wheel" />
					<h1 className="page-title">{t("index.title")}</h1>
					<p className="page-subtitle">{t("index.subtitle")}</p>
				</header>

				<main className="page-content">
					<p>{t("index.welcome")}</p>
				</main>

				<Link to={`/${lang}/page01`} className="close-button">
					{t("index.start")}
				</Link>
			</div>
		</NavigationProvider>
	);
}
