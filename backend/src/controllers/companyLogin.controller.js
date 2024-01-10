const apiResponse = require("../helpers/apiResponse");
const CompanyLoginManager = require("../managers/companyLogin.manager");

const companyLoginManager = new CompanyLoginManager();

class CompanyLoginController {
  /**
   * *Get Company By CompanyCode
   * @param {model} companyLogin.validators
   * @returns {object}
   */
  async getCompanyByCompanyCode(req, res, next) {
    try {
      const result = await companyLoginManager.getCompanyByCompanyCode(req);

      if (result) {
        return apiResponse.successResponseWithData(
          res,
          "ActionType Details.",
          result
        );
      } else {
        return apiResponse.forbiddenRequest(res, "Record Not Found.");
      }
    } catch (error) {
      return apiResponse.expectationFailedResponse(res, error);
    }
  }

  /**
   * *Update Company
   * @param {model} companyLogin.validators
   * @returns {Object}
   */
  async updateCompanyLogin(req, res, next) {
    try {
      if (!req.uploadedImage) {
        return apiResponse.forbiddenRequest(res, 'No logo uploaded.');
      }
    //   console.log("first",req.uploadedImage);

      const result = await companyLoginManager.updateCompanyLogin(req);

      if (result && result.companyID !== null) {
        return apiResponse.successResponseWithData(
          res,
          "Record Updated Successfully.",
          result
        );
      } else {
        return apiResponse.forbiddenRequest(
          res,
          "Error while updating record."
        );
      }
    } catch (error) {
      return apiResponse.expectationFailedResponse(res, error);
    }
     next();
  }
}

module.exports = CompanyLoginController;
