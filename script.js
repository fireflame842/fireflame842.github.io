// Password protection
const correctPasswords = ["athucutiepie","iloveneha","and"];

function unlockSite() {
  document.getElementById("password-container").style.display = "none";
  document.getElementById("protected-content").classList.remove("hidden");

  const music = document.getElementById("bg-music");
  if (music) {
    const playPromise = music.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => console.log("Autoplay blocked until user interacts."));
    }
  }
}

function checkPassword() {
  const input = document.getElementById("passwordInput").value.trim().toLowerCase();
  if (correctPasswords.includes(input)) {
    unlockSite();
  } else {
    alert("Wrong password! Try again 💙");
  }
}

document.getElementById("unlockButton").addEventListener("click", checkPassword);
document.getElementById("passwordInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") checkPassword();
});

// Countdown
const countdown = () => {
  const targetDate = new Date("October 23, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

  if (diff <= 0) {
    clearInterval(interval);
    document.getElementById("countdown").style.display = "none";
    document.getElementById("message").classList.remove("hidden");
  }
};

const interval = setInterval(countdown, 1000);
countdown();

// Scroll
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.2 }
);
sections.forEach((section) => observer.observe(section));

// Floating blus
const orbContainer = document.getElementById("orbs");
const stitchImg = "stitch.png";

for (let i = 0; i < 15; i++) {
  const orb = document.createElement("img");
  orb.src = stitchImg;
  orb.classList.add("orb");
  const size = Math.random() * 40 + 30;
  orb.style.width = `${size}px`;
  orb.style.left = `${Math.random() * 100}%`;
  orb.style.animationDuration = `${12 + Math.random() * 15}s`;
  orb.style.animationDelay = `${Math.random() * 10}s`;
  orbContainer.appendChild(orb);
}

// Parallax
window.addEventListener("scroll", () => {
  document.querySelectorAll(".parallax").forEach((el) => {
    const speed = 0.3;
    const offset = window.scrollY * speed;
    el.style.transform = `translateY(${offset}px)`;
  });
});
