import React from "react";
import { useTranslation } from "react-i18next";
import { NavigationProvider } from "../Layout/Navigation";

export default function Page08() {
	const { t } = useTranslation("pages");

	return (
		<NavigationProvider config={{ prev: "page07", next: "page09" }}>
			<div className="page-container">
				<header className="page-header">
					<img
						src="/images/img_01.jpg"
						alt="Dharma Wheel"
						style={{ width: "150px" }}
					/>
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
						src="/images/img03.png"
						alt="Footer"
						style={{ marginTop: "3rem" }}
					/>
				</main>
			</div>
		</NavigationProvider>
	);
}
