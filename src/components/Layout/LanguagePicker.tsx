import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./TopBar.css";

export default function LanguagePicker() {
	const { i18n } = useTranslation();
	const navigate = useNavigate();
	const location = useLocation();
	const [isVisible, setIsVisible] = useState(false);
	const [isFadingOut, setIsFadingOut] = useState(false);
	const fadeOutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const handleMouseEnter = () => {
		// Clear any pending timeouts
		if (fadeOutTimeoutRef.current) {
			clearTimeout(fadeOutTimeoutRef.current);
			fadeOutTimeoutRef.current = null;
		}
		if (hideTimeoutRef.current) {
			clearTimeout(hideTimeoutRef.current);
			hideTimeoutRef.current = null;
		}

		// Show overlay and cancel fade-out
		setIsVisible(true);
		setIsFadingOut(false);
	};

	const handleMouseLeave = () => {
		// Wait 500ms before starting fade out animation
		fadeOutTimeoutRef.current = setTimeout(() => {
			setIsFadingOut(true);
			fadeOutTimeoutRef.current = null;

			// After fade-out animation completes (300ms), remove from DOM
			hideTimeoutRef.current = setTimeout(() => {
				setIsVisible(false);
				setIsFadingOut(false);
				hideTimeoutRef.current = null;
			}, 300);
		}, 500);
	};

	const handleLanguageChange = (newLang: "ru" | "en") => {
		// Extract path parts (e.g., /ru/prabhat-samgiita -> ["", "ru", "prabhat-samgiita"])
		const pathParts = location.pathname.split("/").filter(Boolean);

		// First part is the language, rest is the page path
		const currentLang = pathParts[0];
		const pagePath = pathParts.slice(1).join("/");

		// Change language in i18next
		i18n.changeLanguage(newLang);

		// Navigate to same page in new language
		// If there's a page path, include it; otherwise just go to the index
		const newPath = pagePath ? `/${newLang}/${pagePath}` : `/${newLang}`;
		navigate(newPath, { replace: true });
	};

	return (
		<div
			className="language-picker-wrapper"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div
				id="language-picker"
				className="icon-button language-picker"
			>
				<img
					src="/dch/images/language.png"
					alt="Language"
				/>
			</div>
			{isVisible && (
				<div className={`language-overlay ${isFadingOut ? "fade-out" : ""}`}>
					<div
						className={`language-option ${i18n.language === "ru" ? "active" : ""}`}
						onClick={() => handleLanguageChange("ru")}
					>
						RU
					</div>
					<div
						className={`language-option ${i18n.language === "en" ? "active" : ""}`}
						onClick={() => handleLanguageChange("en")}
					>
						EN
					</div>
				</div>
			)}
		</div>
	);
}
