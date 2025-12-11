import React from "react";
import { useTranslation } from "react-i18next";
import { NavigationProvider } from "../Layout/Navigation";

export default function Page07() {
	const { t } = useTranslation("pages");

	return (
		<NavigationProvider config={{ prev: "page06", next: "page08" }}>
			<div className="page-container">
				<header className="page-header">
					<h1 className="page-title">{t("page07.title")}</h1>
					<p className="page-subtitle">{t("page07.subtitle")}</p>
				</header>

				<main className="page-content">
					<p
						style={{
							textAlign: "center",
							fontSize: "1.3em",
							lineHeight: 2,
							margin: "2rem 0",
						}}
					>
						<em style={{ whiteSpace: "pre-line" }}>
							{t("page07.mantra")}
						</em>
					</p>

					<p>
						<strong>{t("page07.translation")}</strong>
					</p>
					<p>{t("page07.meaning")}</p>
				</main>
			</div>
		</NavigationProvider>
	);
}
