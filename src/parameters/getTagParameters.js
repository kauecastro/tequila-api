const tagEnum = require('../enums/tags');

class GetTagParameters {
    constructor(req) {
      this.filters = {
        consumerId: req.query.consumerId,
        key: req.query.key,
        value: req.query.value,
      };
    }

    validate() {
      let response = [];
  
      if(this.filters.key && !tagEnum[this.filters.key]) {
        response.push('Key Invalid. Access /tags/keys route to get all disponible keys.');
      }
  
      return response;
    }
  
    getFilter() {
      let filter = {};
  
      if (this.filters.consumerId) {
        filter.consumerId = this.filters.consumerId;
      }
  
      if (this.filters.key) {
        filter.key = this.filters.key;
      }
  
      if (this.filters.value) {
        filter.value = this.filters.value;
      }
  
      return filter;
    }
  }
  
  module.exports = GetTagParameters;