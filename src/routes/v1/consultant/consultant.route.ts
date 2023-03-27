import { Router, IRouter, IRoute } from "express";

class ConsultantRoute {
  public router: IRouter = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {}
}

export default ConsultantRoute;
