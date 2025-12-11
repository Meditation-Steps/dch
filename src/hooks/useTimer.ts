"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export interface UseTimerOptions {
	durationMinutes?: number;
	onComplete?: () => void;
}

export interface UseTimerReturn {
	remainingTime: number;
	isRunning: boolean;
	progress: number;
	start: () => void;
	stop: () => void;
	reset: () => void;
}

export function useTimer({
	durationMinutes = 30,
	onComplete,
}: UseTimerOptions = {}): UseTimerReturn {
	const TOTAL_TIME = durationMinutes * 60;

	const [remainingTime, setRemainingTime] = useState(TOTAL_TIME);
	const [isRunning, setIsRunning] = useState(false);

	const startTimeRef = useRef<number | null>(null);
	const pausedTimeRef = useRef<number>(0);
	const animationIdRef = useRef<number | null>(null);

	const progress = ((TOTAL_TIME - remainingTime) / TOTAL_TIME) * 100;

	// Main timer loop with automatic cleanup
	useEffect(() => {
		if (!isRunning) return;

		const tick = () => {
			const elapsed = Date.now() - (startTimeRef.current as number);
			const newRemaining = Math.max(
				0,
				TOTAL_TIME - Math.floor(elapsed / 1000),
			);

			setRemainingTime(newRemaining);

			if (newRemaining <= 0) {
				setIsRunning(false);
				onComplete?.();
			} else {
				animationIdRef.current = requestAnimationFrame(tick);
			}
		};

		startTimeRef.current = Date.now() - pausedTimeRef.current;
		animationIdRef.current = requestAnimationFrame(tick);

		// MEMORY LEAK FIX: Automatic cleanup
		return () => {
			if (animationIdRef.current !== null) {
				cancelAnimationFrame(animationIdRef.current);
				animationIdRef.current = null;
			}
		};
	}, [isRunning, TOTAL_TIME, onComplete]);

	const start = useCallback(() => {
		if (!isRunning) {
			setIsRunning(true);
		}
	}, [isRunning]);

	const stop = useCallback(() => {
		if (isRunning) {
			setIsRunning(false);
			pausedTimeRef.current = Date.now() - (startTimeRef.current as number);
		}
	}, [isRunning]);

	const reset = useCallback(() => {
		setIsRunning(false);
		setRemainingTime(TOTAL_TIME);
		pausedTimeRef.current = 0;
		startTimeRef.current = null;
	}, [TOTAL_TIME]);

	return {
		remainingTime,
		isRunning,
		progress,
		start,
		stop,
		reset,
	};
}
