import { Router, IRouter, IRoute } from "express";
import AppAuth from "./auth/app.auth";

class AppRoute {
  public router: IRouter = Router();
  private appAuth = new AppAuth();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.use("/auth", this.appAuth.router);
  }
}

export default AppRoute;
