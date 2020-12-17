const timer = document.getElementById("timer");
const buttons = document.querySelectorAll(".btn.time");
const alarm = document.querySelector("#alarm");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");

let countdown;
let time = 1500;
const volume = 0.05;

function startTimer() {
	clearInterval(countdown);
	alarm.pause();
	display(time);

	const now = Date.now();
	const then = now + time * 1000;

	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		display(secondsLeft);
		time = secondsLeft;

		if (secondsLeft <= 0) {
			clearInterval(countdown);

			alarm.volume = volume;
			alarm.loop = true;
			alarm.play();

			return false;
		}

		// eslint-disable-next-line no-use-before-define
	}, 1000);
}

function display(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;

	const timeLeft = `${minutes}:${
		remainderSeconds > 9 ? remainderSeconds : `0${remainderSeconds}`
	}`;

	document.title = timeLeft;
	timer.textContent = timeLeft;
}

async function installServiceWorkerAsync() {
	if ("serviceWorker" in navigator) {
		try {
			const serviceWorker = await navigator.serviceWorker.register("./sw.js");
		} catch (error) {
			console.error(`Failed to register service worker: ${error}`);
		}
	}
}

buttons.forEach(button =>
	button.addEventListener("click", () => {
		clearInterval(countdown);
		time = parseInt(button.dataset.time);
		display(time);
	})
);

start.addEventListener("click", startTimer);

pause.addEventListener("click", () => {
	alarm.pause();
	clearInterval(countdown);
});

window.addEventListener("DOMContentLoaded", () => {
	display(time);
	installServiceWorkerAsync();
});
