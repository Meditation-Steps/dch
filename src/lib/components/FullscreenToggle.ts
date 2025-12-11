export function initFullscreenToggle(): void {
	const button = document.getElementById("fullscreen-toggle");
	if (!button) return;

	const updateButtonText = () => {
		if (document.fullscreenElement) {
			button.textContent = "⤓ Выйти из полноэкранного режима";
		} else {
			button.textContent = "⤢ Полноэкранный режим";
		}
	};

	button.addEventListener("click", async () => {
		try {
			if (!document.fullscreenElement) {
				await document.documentElement.requestFullscreen();
			} else {
				await document.exitFullscreen();
			}
			updateButtonText();
		} catch (err) {
			console.error("Fullscreen toggle error:", err);
		}
	});

	// Listen for fullscreen changes (e.g., pressing ESC)
	document.addEventListener("fullscreenchange", () => {
		updateButtonText();
	});

	updateButtonText();
}

export function initFullscreenToggleEn(): void {
	const button = document.getElementById("fullscreen-toggle");
	if (!button) return;

	const updateButtonText = () => {
		if (document.fullscreenElement) {
			button.textContent = "⤓ Exit Fullscreen";
		} else {
			button.textContent = "⤢ Fullscreen";
		}
	};

	button.addEventListener("click", async () => {
		try {
			if (!document.fullscreenElement) {
				await document.documentElement.requestFullscreen();
			} else {
				await document.exitFullscreen();
			}
			updateButtonText();
		} catch (err) {
			console.error("Fullscreen toggle error:", err);
		}
	});

	document.addEventListener("fullscreenchange", () => {
		updateButtonText();
	});

	updateButtonText();
}
