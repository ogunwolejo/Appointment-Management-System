import { Router, IRouter, IRoute } from "express";
import IAuthController from "../../../controller/auth.controller";

class AppAuth {
  public router: IRouter = Router();
  private authController = new IAuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/login", this.authController.login);
  }
}

export default AppAuth;
