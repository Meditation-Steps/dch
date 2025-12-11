// Singleton AudioContext to prevent hitting browser limits
let audioContext: AudioContext | null = null;

export function getAudioContext(): AudioContext {
	if (!audioContext) {
		audioContext = new AudioContext();
	}
	return audioContext;
}

export function playNotificationSound(): void {
	try {
		const ctx = getAudioContext();
		const oscillator = ctx.createOscillator();
		const gainNode = ctx.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(ctx.destination);

		// Notification beep at 800Hz
		oscillator.frequency.value = 800;
		oscillator.type = "sine";

		// Fade out over 1 second
		gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1);

		oscillator.start(ctx.currentTime);
		oscillator.stop(ctx.currentTime + 1);
	} catch (err) {
		console.warn("Audio playback failed:", err);
	}
}

// Cleanup function (useful for testing)
export function closeAudioContext(): void {
	if (audioContext) {
		audioContext.close();
		audioContext = null;
	}
}
