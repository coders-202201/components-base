import Component from "./Component.js";

class ButtonComponent extends Component {
  action;

  constructor(parentElement, className, text, action) {
    super(parentElement, className, "button");

    this.action = action;

    this.generateHTML(text);

    this.addListeners();
  }

  generateHTML(text) {
    this.element.textContent = text;
  }

  addListeners() {
    this.element.addEventListener("click", this.action);
  }
}

export default ButtonComponent;
