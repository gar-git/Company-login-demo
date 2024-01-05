const CompanyLoginData = require("../datalayers/companyLogin.data");

const companyLoginData = new CompanyLoginData();

class CompanyLoginManager {
;  /**
   * *Get Company By CompanyCode
   * @param {model} companyLogin.validators
   * @returns {object}
   */
  async getCompanyByCompanyCode(req) {
    try {
      const result = await companyLoginData.getCompanyByCompanyCode(req);
    //   console.log(result);
      let company = {};

      if (result && result.length > 0) {
        const module = result[0][0];
        console.log(module);
        company = {
          companyID: module.companyID,
          companyName: module.companyName,
          companyCode: module.companyCode,
          companyLogo: module.companyLogo,
        };
      }
      return company;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * *Update Company
   * @param {model} companyLogin.validators
   * @returns {Object}
   */
  async updateCompanyLogin(req) {
    // console.log("first",req.uploadedImage);
    try {
        let uploadedImage = '';
        if(req.uploadedImage) {
            uploadedImage = req.uploadedImage;
            // console.log("first",uploadedImage);
        }
      const result = await companyLoginData.updateCompanyLogin(req, uploadedImage);
      return result[0];
    } catch (error) {}
  }
}

module.exports = CompanyLoginManager;
