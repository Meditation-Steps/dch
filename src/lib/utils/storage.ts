export function getLanguage(): "ru" | "en" {
	return (localStorage.getItem("language") as "ru" | "en") || "ru";
}

export function setLanguage(lang: "ru" | "en"): void {
	localStorage.setItem("language", lang);
}

export function getCurrentPath(): string {
	return window.location.pathname;
}

export function switchLanguage(newLang: "ru" | "en"): void {
	const currentPath = getCurrentPath();
	const basePath = import.meta.env.BASE_URL || "/";

	// Extract the path after the language prefix
	const pathMatch = currentPath.match(/\/(ru|en)\/(.+)/);
	const pagePath = pathMatch ? pathMatch[2] : "index.html";

	// Construct new URL with updated language
	const newPath = `${basePath}${newLang}/${pagePath}`;

	// Save language preference and navigate
	setLanguage(newLang);
	window.location.href = newPath;
}
