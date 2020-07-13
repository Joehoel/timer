const timer = document.getElementById("timer")
const buttons = document.querySelectorAll("[data-time]")
let countdown

function startTimer(seconds) {
	clearInterval(countdown)
	display(seconds)

	const now = Date.now()
	const then = now + seconds * 1000

	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000)
		// Check if we should stop it!
		if (secondsLeft <= 0) {
			clearInterval(countdown)

			return false
		}

		// eslint-disable-next-line no-use-before-define
		display(secondsLeft)
	}, 1000)
}

function display(seconds) {
	const minutes = Math.floor(seconds / 60)
	const remainderSeconds = seconds % 60

	const timeLeft = `${minutes}:${
		remainderSeconds > 9 ? remainderSeconds : `0${remainderSeconds}`
	}`

	document.title = timeLeft
	timer.textContent = timeLeft
}

async function installServiceWorkerAsync() {
	if ("serviceWorker" in navigator) {
		try {
			const serviceWorker = await navigator.serviceWorker.register(
				"/sw.js"
			)
		} catch (error) {
			console.error(`Failed to register service worker: ${error}`)
		}
	}
}

buttons.forEach(button =>
	button.addEventListener("click", () => {
		startTimer(button.dataset.time * 60)
	})
)
window.addEventListener("load", () => {
	display(timer.dataset.time * 60)
	// installServiceWorkerAsync()
})
