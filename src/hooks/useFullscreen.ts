"use client";

import { useState, useEffect, useCallback } from "react";

export interface UseFullscreenReturn {
	isFullscreen: boolean;
	isSupported: boolean;
	toggle: () => Promise<void>;
}

export function useFullscreen(): UseFullscreenReturn {
	const [isFullscreen, setIsFullscreen] = useState(false);

	// Check if fullscreen API is supported
	const isSupported =
		typeof document !== "undefined" &&
		(document.fullscreenEnabled ||
			(document as any).webkitFullscreenEnabled ||
			(document as any).mozFullScreenEnabled ||
			(document as any).msFullscreenEnabled);

	// Update state when fullscreen changes
	useEffect(() => {
		if (!isSupported) return;

		const handleFullscreenChange = () => {
			const fullscreenElement =
				document.fullscreenElement ||
				(document as any).webkitFullscreenElement ||
				(document as any).mozFullScreenElement ||
				(document as any).msFullscreenElement;

			setIsFullscreen(!!fullscreenElement);
		};

		document.addEventListener("fullscreenchange", handleFullscreenChange);
		document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
		document.addEventListener("mozfullscreenchange", handleFullscreenChange);
		document.addEventListener("MSFullscreenChange", handleFullscreenChange);

		return () => {
			document.removeEventListener("fullscreenchange", handleFullscreenChange);
			document.removeEventListener(
				"webkitfullscreenchange",
				handleFullscreenChange,
			);
			document.removeEventListener(
				"mozfullscreenchange",
				handleFullscreenChange,
			);
			document.removeEventListener(
				"MSFullscreenChange",
				handleFullscreenChange,
			);
		};
	}, [isSupported]);

	const toggle = useCallback(async () => {
		if (!isSupported) return;

		try {
			if (!isFullscreen) {
				// Enter fullscreen
				const docElement = document.documentElement;
				if (docElement.requestFullscreen) {
					await docElement.requestFullscreen();
				} else if ((docElement as any).webkitRequestFullscreen) {
					await (docElement as any).webkitRequestFullscreen();
				} else if ((docElement as any).mozRequestFullScreen) {
					await (docElement as any).mozRequestFullScreen();
				} else if ((docElement as any).msRequestFullscreen) {
					await (docElement as any).msRequestFullscreen();
				}
			} else {
				// Exit fullscreen
				if (document.exitFullscreen) {
					await document.exitFullscreen();
				} else if ((document as any).webkitExitFullscreen) {
					await (document as any).webkitExitFullscreen();
				} else if ((document as any).mozCancelFullScreen) {
					await (document as any).mozCancelFullScreen();
				} else if ((document as any).msExitFullscreen) {
					await (document as any).msExitFullscreen();
				}
			}
		} catch (err) {
			console.warn("Fullscreen toggle failed:", err);
		}
	}, [isFullscreen, isSupported]);

	return {
		isFullscreen,
		isSupported,
		toggle,
	};
}
