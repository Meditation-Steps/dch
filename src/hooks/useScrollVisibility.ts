import { useState, useEffect } from "react";

export interface UseScrollVisibilityOptions {
	threshold?: number;
}

export function useScrollVisibility({
	threshold = 100,
}: UseScrollVisibilityOptions = {}): boolean {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		let lastScrollY = window.scrollY;
		let ticking = false;

		const updateVisibility = () => {
			const currentScrollY = window.scrollY;

			// Show when scrolling up, or when near the top
			if (currentScrollY < lastScrollY || currentScrollY < threshold) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}

			lastScrollY = currentScrollY;
			ticking = false;
		};

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateVisibility);
				ticking = true;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [threshold]);

	return isVisible;
}
