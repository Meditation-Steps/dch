import React from "react";
import { useTranslation } from "react-i18next";
import { usePageNavigation } from "../Layout/Navigation";

export default function SpiritualDiscussion() {
	const { t } = useTranslation("pages");

	usePageNavigation({ prev: "svadhyaya", next: "namaskar" });

	return (
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
	);
}
