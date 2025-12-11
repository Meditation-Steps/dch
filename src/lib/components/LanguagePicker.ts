import { getLanguage, switchLanguage } from "../utils/storage.js";

export function initLanguagePicker(): void {
	const pickerContainer = document.getElementById("language-picker");
	if (!pickerContainer) return;

	const currentLang = getLanguage();

	const html = `
    <button class="lang-button ${currentLang === "ru" ? "active" : ""}" data-lang="ru">
      RU
    </button>
    <button class="lang-button ${currentLang === "en" ? "active" : ""}" data-lang="en">
      EN
    </button>
  `;

	pickerContainer.innerHTML = html;

	// Add event listeners
	pickerContainer.querySelectorAll(".lang-button").forEach((button) => {
		button.addEventListener("click", (e) => {
			const target = e.target as HTMLElement;
			const lang = target.dataset.lang as "ru" | "en";
			if (lang !== currentLang) {
				switchLanguage(lang);
			}
		});
	});
}
