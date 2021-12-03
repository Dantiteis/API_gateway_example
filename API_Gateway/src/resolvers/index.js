const saleRegisterResolvers = require('./saleregister_resolvers');
const lodash = require('lodash');


const resolvers = lodash.merge(saleRegisterResolvers);

module.exports = resolvers;