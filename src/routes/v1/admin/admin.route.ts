import { Router, IRouter, IRoute } from "express";

class AdminRoute {
  public router: IRouter = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {}
}

export default AdminRoute;
