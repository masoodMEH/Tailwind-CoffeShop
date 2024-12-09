const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const submenu = document.querySelector(".submenu");

const nav = document.querySelector(".nav");
const navOpenBtn = document.querySelector(".nav-icon");
const navCloseBtn = document.querySelector(".nav-close-btn");

const overlay = document.querySelector(".overlay");

// Dark & Light Theme
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Dark & Light Toggle Theme Btn in mobile mode
toggleThemeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

submenuOpenBtn.addEventListener("click", (e) => {
  e.currentTarget.parentElement.classList.toggle("text-orange-300");
  submenu.classList.toggle("submenu--open");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.remove("-right-64");
  nav.classList.add("right-0");
  overlay.classList.add("overlay--visible");
});

navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("right-0");
  nav.classList.add("-right-64");
  overlay.classList.remove("overlay--visible");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("right-0");
  nav.classList.add("-right-64");
  overlay.classList.remove("overlay--visible");
});
