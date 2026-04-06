import bgImage from "./bg.png";
import "./styles.css";
import homePage from "./home.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";

const content = document.getElementById("content");
const buttons = {
  home: document.getElementById("home-button"),
  menu: document.getElementById("menu-button"),
  contact: document.getElementById("contact-button"),
};

const loadFull = function load(page) {
  content.textContent = "";
  content.appendChild(page);
};

document.addEventListener("DOMContentLoaded", () => {
  loadFull(homePage());
});

buttons.home.addEventListener("click", () => {
  loadFull(homePage());
});

buttons.menu.addEventListener("click", () => {
  loadFull(menuPage());
});

buttons.contact.addEventListener("click", () => {
  loadFull(contactPage());
});
