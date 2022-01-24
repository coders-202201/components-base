import Component from "./Component.js";

class MenuComponent extends Component {
  constructor(parentElement, className) {
    super(parentElement, className, "nav");

    this.generateHTML();
  }

  toggle() {
    if (this.element.classList.contains("open")) {
      this.element.classList.remove("open");
    } else {
      this.element.classList.add("open");
    }
  }

  generateHTML() {
    this.element.innerHTML = `
    <ul class="links">
        <li>Section 1</li>
        <li>Section 2</li>
        <li>Section 3</li>
      </ul>
    `;
  }
}

export default MenuComponent;
