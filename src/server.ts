import App from "./index";

class Server extends App {
  constructor() {
    super();
    this.listen();
  }
}

new Server();
