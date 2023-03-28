import { Component } from "../core/template";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/Phantasia0">
          My GitHub
        </a>
      </div>
      <div>
        <a href="https://github.com/Phantasia0">
          ${new Date().getFullYear()}
          Phantasia0
        </a>
      </div>
    `;
  }
}
