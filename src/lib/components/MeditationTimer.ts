import { formatTime } from "../utils/formatTime.js";

export class MeditationTimer {
	private readonly TOTAL_TIME: number;
	private remainingTime: number;
	private animationId: number | null = null;
	private startTime: number | null = null;
	private pausedTime = 0;

	private elements = {
		display: null as HTMLElement | null,
		progressBar: null as HTMLElement | null,
		startBtn: null as HTMLButtonElement | null,
		stopBtn: null as HTMLButtonElement | null,
		resetBtn: null as HTMLButtonElement | null,
	};

	constructor(durationMinutes = 30) {
		this.TOTAL_TIME = durationMinutes * 60;
		this.remainingTime = this.TOTAL_TIME;
		this.initElements();
		this.attachEventListeners();
		this.updateDisplay();
	}

	private initElements(): void {
		this.elements.display = document.getElementById("timer-display");
		this.elements.progressBar = document.getElementById("progress-bar");
		this.elements.startBtn = document.getElementById("start-btn") as HTMLButtonElement;
		this.elements.stopBtn = document.getElementById("stop-btn") as HTMLButtonElement;
		this.elements.resetBtn = document.getElementById("reset-btn") as HTMLButtonElement;

		if (!this.elements.display || !this.elements.progressBar) {
			console.error("Timer elements not found in DOM");
		}
	}

	private attachEventListeners(): void {
		this.elements.startBtn?.addEventListener("click", () => this.start());
		this.elements.stopBtn?.addEventListener("click", () => this.stop());
		this.elements.resetBtn?.addEventListener("click", () => this.reset());
	}

	private start(): void {
		if (this.animationId) return;

		this.startTime = Date.now() - this.pausedTime;

		const tick = () => {
			const elapsed = Date.now() - (this.startTime as number);
			this.remainingTime = Math.max(0, this.TOTAL_TIME - Math.floor(elapsed / 1000));

			this.updateDisplay();
			this.updateProgressBar();

			if (this.remainingTime <= 0) {
				this.complete();
			} else {
				this.animationId = requestAnimationFrame(tick);
			}
		};

		this.animationId = requestAnimationFrame(tick);
		this.updateButtonStates("running");
	}

	private stop(): void {
		if (!this.animationId) return;

		cancelAnimationFrame(this.animationId);
		this.animationId = null;
		this.pausedTime = Date.now() - (this.startTime as number);
		this.updateButtonStates("paused");
	}

	private reset(): void {
		this.stop();
		this.remainingTime = this.TOTAL_TIME;
		this.pausedTime = 0;
		this.startTime = null;
		this.updateDisplay();
		this.updateProgressBar();
		this.updateButtonStates("idle");
	}

	private updateDisplay(): void {
		if (!this.elements.display) return;
		this.elements.display.textContent = formatTime(this.remainingTime);
	}

	private updateProgressBar(): void {
		if (!this.elements.progressBar) return;
		const progress = ((this.TOTAL_TIME - this.remainingTime) / this.TOTAL_TIME) * 100;
		this.elements.progressBar.style.height = `${progress}%`;
	}

	private updateButtonStates(state: "idle" | "running" | "paused" | "completed"): void {
		if (!this.elements.startBtn || !this.elements.stopBtn || !this.elements.resetBtn) return;

		switch (state) {
			case "running":
				this.elements.startBtn.disabled = true;
				this.elements.stopBtn.disabled = false;
				this.elements.resetBtn.disabled = false;
				break;
			case "paused":
				this.elements.startBtn.disabled = false;
				this.elements.stopBtn.disabled = true;
				this.elements.resetBtn.disabled = false;
				break;
			case "completed":
			case "idle":
				this.elements.startBtn.disabled = false;
				this.elements.stopBtn.disabled = true;
				this.elements.resetBtn.disabled = false;
				break;
		}
	}

	private complete(): void {
		this.stop();
		this.playNotificationSound();
		this.showVisualAlert();
		this.updateButtonStates("completed");
	}

	private playNotificationSound(): void {
		// Create a simple beep using Web Audio API
		try {
			const audioContext = new AudioContext();
			const oscillator = audioContext.createOscillator();
			const gainNode = audioContext.createGain();

			oscillator.connect(gainNode);
			gainNode.connect(audioContext.destination);

			oscillator.frequency.value = 800; // Frequency in Hz
			oscillator.type = "sine";

			gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
			gainNode.gain.exponentialRampToValueAtTime(
				0.01,
				audioContext.currentTime + 1,
			);

			oscillator.start(audioContext.currentTime);
			oscillator.stop(audioContext.currentTime + 1);
		} catch (err) {
			console.warn("Audio playback failed:", err);
		}
	}

	private showVisualAlert(): void {
		const alert = document.createElement("div");
		alert.className = "timer-alert";
		alert.innerHTML = `
      <h2>⏰ Время истекло!</h2>
      <p>Медитация завершена</p>
      <button id="close-alert">Закрыть</button>
    `;

		document.body.appendChild(alert);

		const closeBtn = document.getElementById("close-alert");
		closeBtn?.addEventListener("click", () => {
			alert.remove();
		});

		// Auto-remove after 10 seconds
		setTimeout(() => {
			if (alert.parentElement) {
				alert.remove();
			}
		}, 10000);
	}

	public destroy(): void {
		if (this.animationId) {
			cancelAnimationFrame(this.animationId);
		}
		this.elements.startBtn?.removeEventListener("click", () => this.start());
		this.elements.stopBtn?.removeEventListener("click", () => this.stop());
		this.elements.resetBtn?.removeEventListener("click", () => this.reset());
	}
}

// English version with translated alert
export class MeditationTimerEn extends MeditationTimer {
	private showVisualAlert(): void {
		const alert = document.createElement("div");
		alert.className = "timer-alert";
		alert.innerHTML = `
      <h2>⏰ Time's Up!</h2>
      <p>Meditation completed</p>
      <button id="close-alert">Close</button>
    `;

		document.body.appendChild(alert);

		const closeBtn = document.getElementById("close-alert");
		closeBtn?.addEventListener("click", () => {
			alert.remove();
		});

		setTimeout(() => {
			if (alert.parentElement) {
				alert.remove();
			}
		}, 10000);
	}
}
