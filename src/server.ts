import App from "./index";
import config from "config";
import { join } from "path";
//import { randomBytes } from "crypto";

process.env["NODE_CONFIG_DIR"] = join(__dirname, "config");

class Server extends App {
  constructor() {
    super();
    /*console.log(
      randomBytes(200, (err, buff) => {
        const t = buff.toString("hex");
        console.log(t);
      })
    );*/
    this.listen();
  }
}

new Server();
