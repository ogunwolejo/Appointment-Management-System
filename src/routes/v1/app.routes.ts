import { Router, IRouter, IRoute } from "express";
import AppAuth from "./auth/app.auth";
import AdminRoute from "./admin/admin.route";
import ClientRoute from "./clients/client.route";
import ConsultantRoute from "./consultant/consultant.route";

class AppRoute {
  public router: IRouter = Router();
  private appAuth = new AppAuth();
  private adminRoute = new AdminRoute();
  private clientRoute = new ClientRoute();
  private consultantRoute = new ConsultantRoute();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.use("/auth", this.appAuth.router);
    this.router.use("/admin", this.adminRoute.router)
    this.router.use("/consultant", this.consultantRoute.router)
    this.router.use("/client", this.clientRoute.router);
  }
}

export default AppRoute;
