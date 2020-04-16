const tagEnum = require('../enums/tags');

class PostTagParameters {
    constructor(req) {
      this.tag = {
        consumerId: req.body.consumerId,
        key: req.body.key,
        value: req.body.value,
      };
    }
  
    validate() {
      let response = [];
  
      if (!this.tag.consumerId) {
        response.push('consumerId Invalid');
      }

      if(this.tag.key && !tagEnum[this.tag.key]) {
        response.push('Key Invalid. Access /tags/keys route to get all disponible keys.');
      }
  
      if (!this.tag.key) {
        response.push('Key Invalid. Access the /keys route to get all disponible keys.');
      }
  
      if (!this.tag.value) {
        response.push('value Invalid');
      }
  
      return response;
    }
  }
  
  module.exports = PostTagParameters;