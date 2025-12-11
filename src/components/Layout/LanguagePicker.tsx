import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LanguagePicker() {
	const { i18n } = useTranslation();
	const navigate = useNavigate();
	const location = useLocation();

	const handleLanguageChange = (newLang: "ru" | "en") => {
		// Extract current page from path (e.g., /ru/page01 -> page01)
		const pathParts = location.pathname.split("/");
		const currentPage = pathParts[pathParts.length - 1] || "";

		// Change language in i18next
		i18n.changeLanguage(newLang);

		// Navigate to same page in new language
		navigate(`/${newLang}/${currentPage}`, { replace: true });
	};

	return (
		<div id="language-picker" className="language-picker">
			<button
				type="button"
				className={`language-button ${i18n.language === "ru" ? "active" : ""}`}
				onClick={() => handleLanguageChange("ru")}
			>
				RU
			</button>
			<button
				type="button"
				className={`language-button ${i18n.language === "en" ? "active" : ""}`}
				onClick={() => handleLanguageChange("en")}
			>
				EN
			</button>
		</div>
	);
}
