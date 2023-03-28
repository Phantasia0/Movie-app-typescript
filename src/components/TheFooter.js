import { Component } from "../core/template";
import aboutStore from "../store/about";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    const { github } = aboutStore.state;
    this.el.innerHTML = /* html */ `
      <div>
        <a href="${github}">
          My GitHub
        </a>
      </div>
      <div>
        <a href="${github}">
          ${new Date().getFullYear()}
          Phantasia0
        </a>
      </div>
    `;
  }
}
