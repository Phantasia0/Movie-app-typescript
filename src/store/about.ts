import { Store } from "../core/template";

interface State {
  photo: string;
  name: string;
  email: string;
  blog: string;
  github: string;
  algorithm: string;
}

export default new Store<State>({
  photo: "https://velog.velcdn.com/images/ncprog1/post/07bf7706-3cdd-4235-bf9d-f9962d1614d0/image.png",
  name: "Phantasia0 / WonJun",
  email: "theemail@gmail.com",
  blog: "https://google.com",
  github: "https://github.com/Phantasia0",
  algorithm: "https://github.com/Phantasia0/UpsolvingWithMyCode",
});
