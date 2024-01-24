const startCountdown = (callback) => {
  let count = 10;

  const updateCountdown = () => {
    document.getElementById("countdown").textContent = count;
    count--;

    if (count >= 0) {
      setTimeout(updateCountdown, 1000);
    } else {
      callback();
    }
  };

  updateCountdown();
};

const showMessage = () => {
  document.getElementById("countdown").style.display = "none";
  document.getElementById("message").style.display = "block";
};

startCountdown(showMessage);
