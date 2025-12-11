export function initScrollNavigation(): void {
	const navigation = document.querySelector(".navigation") as HTMLElement;
	if (!navigation) return;

	let lastScrollY = window.scrollY;
	let ticking = false;

	const updateNavigation = () => {
		const currentScrollY = window.scrollY;

		// Show navigation when scrolling up, hide when scrolling down
		if (currentScrollY < lastScrollY || currentScrollY < 100) {
			navigation.classList.remove("hidden");
		} else {
			navigation.classList.add("hidden");
		}

		lastScrollY = currentScrollY;
		ticking = false;
	};

	window.addEventListener("scroll", () => {
		if (!ticking) {
			window.requestAnimationFrame(updateNavigation);
			ticking = true;
		}
	});
}
