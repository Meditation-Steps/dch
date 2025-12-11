import React from "react";
import { useTranslation } from "react-i18next";
import { NavigationProvider } from "../Layout/Navigation";

export default function Page01() {
	const { t } = useTranslation("pages");

	return (
		<NavigationProvider config={{ prev: "index", next: "page02" }}>
			<div className="page-container">
				<header className="page-header">
					<img src="/images/img02.png" alt="Header" />
					<img
						src="/images/img_01.jpg"
						alt="Dharma Wheel"
						style={{ width: "150px" }}
					/>
					<h1 className="page-title">{t("page01.title")}</h1>
				</header>

				<main className="page-content">
					<p>{t("page01.content.p1")}</p>
					<p>{t("page01.content.p2")}</p>
				</main>
			</div>
		</NavigationProvider>
	);
}
