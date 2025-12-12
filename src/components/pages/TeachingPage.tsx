import React from "react";
import { useTranslation } from "react-i18next";
import { usePageNavigation } from "../Layout/Navigation";

export default function TeachingPage() {
	const { t } = useTranslation("pages");

	usePageNavigation({ prev: "guru-puja", next: "svadhyaya" });

	return (
		<div className="page-container">
				<header className="page-header">
					<h1 className="page-title">{t("page08.title")}</h1>
				</header>

				<main className="page-content">
					<p
						style={{
							fontSize: "1.2em",
							fontStyle: "italic",
							margin: "2rem 0",
						}}
					>
						{t("page08.quote")}
					</p>

					<p style={{ textAlign: "right", marginTop: "2rem" }}>
						<strong>{t("page08.author")}</strong>
					</p>

					<img
						src="/dch/images/img03.png"
						alt="Footer"
						style={{ marginTop: "3rem" }}
					/>
				</main>
			</div>
	);
}
