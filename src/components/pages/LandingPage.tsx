import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LandingPage() {
	const navigate = useNavigate();
	const { i18n } = useTranslation();

	useEffect(() => {
		// Get language from localStorage or use fallback
		const storedLang = localStorage.getItem("i18nextLng");
		const lang = storedLang && ["ru", "en"].includes(storedLang) ? storedLang : "ru";

		// Set the language in i18next if needed
		if (i18n.language !== lang) {
			i18n.changeLanguage(lang);
		}

		// Redirect to the language-specific route
		navigate(`/${lang}`, { replace: true });
	}, [navigate, i18n]);

	// Show nothing while redirecting
	return null;
}
