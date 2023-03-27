import { NextFunction, Request, Response } from "express";

class IAuthController {
  public login = async (req: Request, res: Response, next: NextFunction) => {
    return res.send("1");
  };
}

export default IAuthController;
