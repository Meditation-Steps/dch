import React from "react";
import { useTranslation } from "react-i18next";
import { NavigationProvider } from "../Layout/Navigation";

export default function Page10() {
	const { t } = useTranslation("pages");

	return (
		<NavigationProvider config={{ prev: "page09", next: "page11" }}>
			<div className="page-container">
				<header className="page-header">
					<h1 className="page-title">{t("page10.title")}</h1>
				</header>

				<main className="page-content">
					<p>{t("page10.content.p1")}</p>
					<p>{t("page10.content.p2")}</p>
					<p>{t("page10.content.p3")}</p>
				</main>
			</div>
		</NavigationProvider>
	);
}
