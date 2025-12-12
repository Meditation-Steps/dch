import React from "react";
import { useTranslation } from "react-i18next";
import { usePageNavigation } from "../Layout/Navigation";

export default function SamgacchhadhamMantra() {
	const { t } = useTranslation("pages");

	usePageNavigation({ prev: "kirtan", next: "meditation" });

	return (
		<div className="page-container">
				<header className="page-header">
					<img src="/dch/images/img02.png" alt="Header" />
					<h1 className="page-title">{t("page03.title")}</h1>
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
							{t("page03.mantra")}
						</em>
					</p>

					<p>
						<strong>{t("page03.translation")}</strong>
					</p>
					<p>{t("page03.meaning")}</p>
					<img
						src="/dch/images/img03.png"
						alt="Footer"
						style={{ marginTop: "2rem" }}
					/>
				</main>
			</div>
	);
}
