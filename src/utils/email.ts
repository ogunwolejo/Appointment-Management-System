import config from "config";
const SibApiV3Sdk = require("sib-api-v3-typescript");

class IEmail {
  public apiInstance = new SibApiV3Sdk.AccountApi();

  // Configure API key authorization: apiKey
  private setApiKey = () =>
    this.apiInstance.setApiKey(
      SibApiV3Sdk.AccountApiApiKeys.apiKey,
      "YOUR API KEY"
    );
}
