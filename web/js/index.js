import BurgerComponent from "./BurgerComponent.js";
import ButtonComponent from "./ButtonComponent.js";
import MenuComponent from "./MenuComponent.js";

const menu = new MenuComponent(document.body, "main-menu");

const header = document.querySelector(".main-header");
const burger = new BurgerComponent(header, "burger", () => {
  menu.toggle();
});

const mainContent = document.querySelector(".main-content");

const callToActionButton = new ButtonComponent(
  mainContent,
  "call-to-action",
  "Do something",
  () => console.log("Something done")
);

const callToInactionButton = new ButtonComponent(
  mainContent,
  "call-to-inaction",
  "Don't do anything",
  () => console.log("Anything done")
);
