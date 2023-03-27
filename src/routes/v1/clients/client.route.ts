import { Router, IRouter, IRoute } from "express";

class ClientRoute {
  public router: IRouter = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {}
}

export default ClientRoute;
