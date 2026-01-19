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
    const audio = new Audio("//audio/chime.mp3");
    audio.play();
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
