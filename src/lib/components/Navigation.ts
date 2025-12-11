interface NavigationConfig {
	prev?: string;
	next?: string;
	home: string;
}

export function initNavigation(config: NavigationConfig): void {
	const navContainer = document.getElementById("navigation");
	if (!navContainer) return;

	const basePath = import.meta.env.BASE_URL || "/";

	let html = '<div class="navigation">';

	if (config.prev) {
		html += `<a href="${basePath}${config.prev}" class="nav-button">← Назад</a>`;
	}

	html += `<a href="${basePath}${config.home}" class="nav-button">🏠 Главная</a>`;

	if (config.next) {
		html += `<a href="${basePath}${config.next}" class="nav-button">Вперёд →</a>`;
	}

	html += "</div>";

	navContainer.innerHTML = html;
}

export function initNavigationEn(config: NavigationConfig): void {
	const navContainer = document.getElementById("navigation");
	if (!navContainer) return;

	const basePath = import.meta.env.BASE_URL || "/";

	let html = '<div class="navigation">';

	if (config.prev) {
		html += `<a href="${basePath}${config.prev}" class="nav-button">← Previous</a>`;
	}

	html += `<a href="${basePath}${config.home}" class="nav-button">🏠 Home</a>`;

	if (config.next) {
		html += `<a href="${basePath}${config.next}" class="nav-button">Next →</a>`;
	}

	html += "</div>";

	navContainer.innerHTML = html;
}
