import { notification } from "./notification";

const timer = document.getElementById("timer") as HTMLSpanElement;
const buttons = document.querySelectorAll(".btn.time") as NodeListOf<HTMLButtonElement>;
const alarm = document.querySelector("#alarm") as HTMLMediaElement;
const start = document.querySelector(".start") as HTMLButtonElement;
const pause = document.querySelector(".pause") as HTMLButtonElement;

let countdown: NodeJS.Timeout;
let time = 1500;
const volume = 0.05;

function startTimer() {
  clearInterval(countdown);

  pause.textContent = "Pause";
  alarm!.pause();
  display(time);

  const now = Date.now();
  const then = now + time * 1000;

  countdown = setInterval(async () => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    display(secondsLeft);
    time = secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(countdown);

      alarm.volume = volume;
      alarm.loop = true;
      alarm.play();
      notification("Timer is done", {
        body: "Time to take a 5 minute break!",
      });
      pause.textContent = "Reset";

      return false;
    }

    // eslint-disable-next-line no-use-before-define
  }, 1000);
}

function display(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;

  const timeLeft = `${minutes}:${remainderSeconds > 9 ? remainderSeconds : `0${remainderSeconds}`}`;

  document.title = timeLeft;
  timer.textContent = timeLeft;
}

buttons.forEach((button: HTMLButtonElement) =>
  button.addEventListener("click", () => {
    clearInterval(countdown);
    time = parseInt(button.dataset.time!);
    display(time);
  })
);

start.addEventListener("click", startTimer);

pause.addEventListener("click", () => {
  alarm.pause();
  clearInterval(countdown);
});

window.addEventListener("DOMContentLoaded", async () => {
  display(time);
  await Notification.requestPermission();
});

//#region service worker
const sw = "./sw.js"; // it is needed because parcel will not recognize this as a file and not precess in its manner

navigator.serviceWorker
  .register(sw)
  .then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker == null) {
        return;
      }
      installingWorker.onstatechange = () => {
        if (installingWorker.state === "installed") {
          if (navigator.serviceWorker.controller) {
            console.log(
              "New content is available and will be used when all " +
                "tabs for this page are closed. See https://bit.ly/CRA-PWA."
            );
          } else {
            console.log("Content is cached for offline use.");
          }
        }
      };
    };
  })
  .catch(error => {
    console.error("Error during service worker registration:", error);
  });
//#endregion
