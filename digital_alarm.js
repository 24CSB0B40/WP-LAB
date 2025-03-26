function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("date").textContent = now.toDateString();
  }
  setInterval(updateClock, 1000);
  
 
  document.getElementById("light-theme").onclick = () => {
    document.body.style.backgroundColor = "rgb(228, 243, 233)";
    document.body.style.color = "black";
  };
  
  document.getElementById("dark-theme").onclick = () => {
    document.body.style.backgroundColor = "#282c34";
    document.body.style.color = "white";
  };
  
  document.getElementById("neon-theme").onclick = () => {
    document.body.style.backgroundColor = "#7beeab";
    document.body.style.color = "black";
  };
  
  document.getElementById("custom-theme").onclick = () => {
    document.body.style.backgroundColor = "#f8f18ff1";
    document.body.style.color = "black";
  };
  
  let alarmTime = null;
  document.getElementById("set-alarm").onclick = () => {
    alarmTime = document.getElementById("alarm-time").value;
    alert(`Alarm set for ${alarmTime}`);
  };
  setInterval(() => {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    if (alarmTime === currentTime) {
      alert("Wake up! Alarm ringing!");
      alarmTime = null; 
    }
  }, 1000);
  
  
  let stopwatchInterval, stopwatchTime = 0;
  document.getElementById("start-stopwatch").onclick = () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(() => {
      stopwatchTime++;
      const minutes = Math.floor(stopwatchTime / 60).toString().padStart(2, "0");
      const seconds = (stopwatchTime % 60).toString().padStart(2, "0");
      document.getElementById("stopwatch-display").textContent = `${minutes}:${seconds}`;
    }, 1000);
  };
  document.getElementById("pause-stopwatch").onclick = () => clearInterval(stopwatchInterval);
  document.getElementById("reset-stopwatch").onclick = () => {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById("stopwatch-display").textContent = "00:00:00";
  };
  
  let countdownInterval;
  document.getElementById("start-countdown").onclick = () => {
    const minutes = parseInt(document.getElementById("countdown-minutes").value) || 0;
    const seconds = parseInt(document.getElementById("countdown-seconds").value) || 0;
    let totalSeconds = minutes * 60 + seconds;
  
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(countdownInterval);
        alert("Time's up!");
      } else {
        totalSeconds--;
        const displayMinutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
        const displaySeconds = (totalSeconds % 60).toString().padStart(2, "0");
        document.getElementById("progress-bar").textContent = `${displayMinutes}:${displaySeconds}`;
      }
    }, 1000);
  };
  