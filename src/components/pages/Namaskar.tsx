import React from "react";
import { useTranslation } from "react-i18next";
import { usePageNavigation } from "../Layout/Navigation";

export default function Namaskar() {
	const { t } = useTranslation("pages");

	usePageNavigation({ prev: "spiritual-discussion" });

	return (
		<div className="page-container">
				<header className="page-header">
					<h1 className="page-title">{t("page11.title")}</h1>
				</header>

				<main className="page-content">
					<p
						style={{
							textAlign: "center",
							fontSize: "1.5em",
							margin: "3rem 0",
						}}
					>
						<strong>{t("page11.content.intro")}</strong>
					</p>

					<p>{t("page11.content.p1")}</p>
					<p>{t("page11.content.p2")}</p>

					<p
						style={{
							textAlign: "center",
							fontSize: "1.3em",
							margin: "3rem 0",
						}}
					>
						<em>{t("page11.content.emoji")}</em>
					</p>
				</main>
			</div>
	);
}
