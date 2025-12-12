import React from "react";
import { useTranslation } from "react-i18next";
import { usePageNavigation } from "../Layout/Navigation";

export default function NityamShuddhamMantra() {
	const { t } = useTranslation("pages");

	usePageNavigation({ prev: "meditation", next: "guru-puja" });

	return (
		<div className="page-container">
				<header className="page-header">
					<h1 className="page-title">{t("page06.title")}</h1>
					<p className="page-subtitle">{t("page06.subtitle")}</p>
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
							{t("page06.mantra")}
						</em>
					</p>

					<p>
						<strong>{t("page06.translation")}</strong>
					</p>
					<p>{t("page06.meaning")}</p>
				</main>
			</div>
	);
}
