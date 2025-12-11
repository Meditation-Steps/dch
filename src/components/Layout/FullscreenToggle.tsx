import React from "react";
import { useTranslation } from "react-i18next";
import { useFullscreen } from "../../hooks/useFullscreen";

export default function FullscreenToggle() {
	const { t } = useTranslation("common");
	const { isFullscreen, isSupported, toggle } = useFullscreen();

	// Hide button if fullscreen is not supported
	if (!isSupported) {
		return null;
	}

	const title = isFullscreen
		? t("fullscreen.exit")
		: t("fullscreen.enter");

	return (
		<button
			id="fullscreen-toggle"
			className="fullscreen-toggle"
			onClick={toggle}
			title={title}
			type="button"
		>
			{title}
		</button>
	);
}
