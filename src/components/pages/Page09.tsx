import React from "react";
import { useTranslation } from "react-i18next";
import { NavigationProvider } from "../Layout/Navigation";

export default function Page09() {
	const { t } = useTranslation("pages");

	return (
		<NavigationProvider config={{ prev: "page08", next: "page10" }}>
			<div className="page-container">
				<header className="page-header">
					<h1 className="page-title">{t("page09.title")}</h1>
					<p className="page-subtitle">{t("page09.subtitle")}</p>
				</header>

				<main className="page-content">
					<p>{t("page09.content.p1")}</p>
					<p>{t("page09.content.p2")}</p>
					<p
						style={{
							textAlign: "center",
							marginTop: "3rem",
							fontSize: "1.1em",
						}}
					>
						<em>{t("page09.content.quote")}</em>
					</p>
				</main>
			</div>
		</NavigationProvider>
	);
}
