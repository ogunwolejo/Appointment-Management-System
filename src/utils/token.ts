import jsonwebtoken from "jsonwebtoken";
import { IToken as Token } from "../interface/token.interface";
import config from "config";

class EToken {
  public getToken = (args: Token): string => {
    return jsonwebtoken.sign(args, config.get("tokenSecret"), {
      expiresIn: 60 * 20, //20mins
      algorithm: "HS384",
    });
  };

  public getRefreshToken = (args: Token): string => {
    return jsonwebtoken.sign(args, config.get("tokenSecret"), {
      expiresIn: 60 * 60 * 24 * 125, //125days
      algorithm: "HS384",
    });
  };

  public verifyToken = (arg: string) => {
    return jsonwebtoken.verify(arg, config.get("tokenSecret"), {});
  };

  public decodeToken = (arg: string) => {
    return jsonwebtoken.decode(arg);
  };
}

export default EToken;
