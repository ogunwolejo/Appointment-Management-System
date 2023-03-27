import express from "express";
import { join } from "path";
import { readFileSync } from "fs";
import { createServer } from "https";
import { Socket } from "net";
import cors from "cors";
import config from "config";
import { connect } from "mongoose";

import AppRoutes from "./routes/v1/app.routes";

//dotenv.config();

class App {
  public app = express();

  private router = new AppRoutes();

  constructor() {
    this.initializes();
    this.navigation();
  }

  private initializes() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  private navigation() {
    this.app.use("/v1", this.router.router);
  }

  public listen() {
    createServer(
      {
        cert: readFileSync(join(__dirname, "cert", "cert.pem")),
        key: readFileSync(join(__dirname, "cert", "key.pem")),
      },
      this.app
    )
      .listen(config.get("PORT"), async () => {
        const db = await this.connectedToDatabase();
        //console.log(db);
      })
      .on("connection", (socket: Socket) =>
        console.log("connected with Sockets")
      );
  }

  private async connectedToDatabase() {
    const db = await connect(`${config.get("MONGO_URL")}`, {
      //@ts-ignore
      useUnifiedTopology: true,
      autoIndex: true,
    });
    return db;
  }
}

export default App;
