import Component from "./Component.js";

class BurgerComponent extends Component {
  actionOnClick;

  constructor(parentElement, className, actionOnClick) {
    super(parentElement, className, "div");
    this.actionOnClick = actionOnClick;

    this.generateHTML();

    this.addListeners();
  }

  generateHTML() {
    this.element.innerHTML = `
        <div></div>
        <div></div>
        <div></div>
        `;
  }

  addListeners() {
    this.element.addEventListener("click", this.actionOnClick);
  }
}

export default BurgerComponent;
