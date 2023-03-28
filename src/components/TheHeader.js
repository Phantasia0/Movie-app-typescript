import { Component } from "../core/template";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          {
            name: "Search",
            href: "#/",
          },
          {
            name: "Movie",
            href: "#/movie?id=tt0133093",
          },
          {
            name: "About",
            href: "#/about",
          },
        ],
      },
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a href="#/" class="logo"><span>OMDbAPI</span>.COM</a>
      <nav>
        <ul>
          ${this.state.menus.map((menu) => /* html */ `<li><a href="${menu.href}">${menu.name}</a></li>`).join("")}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://velog.velcdn.com/images/ncprog1/post/35481f99-7826-41ad-92e5-884c81c11adf/image.png" alt="logo"/>
      </a>
    `;
  }
}
