const saleRegisterResolvers = {
    Query: {
        saleRegisterByNombreCliente: async (_, { nombreCliente }, {dataSources}) => {
                return await dataSources.saleRegisterAPI.saleRegisterByNombreClienteRequest(nombreCliente);
        },
        saleRegisterByProviderAndClient: async (_, { proveedor, nombreCliente }, {dataSources}) => {
            return await dataSources.saleRegisterAPI.saleRegisterByProviderAndClientRequest(proveedor, nombreCliente);
        },
        saleRegisterByProviderAndProduct: async (_, { proveedor, nombreProducto }, {dataSources}) => {
            return await dataSources.saleRegisterAPI.saleRegisterByProviderAndProductRequest(proveedor, nombreProducto);
        },
        /*
        saleRegisterByProviderAndClientAndProduct: async (_, { proveedor, nombreCliente, nombreProducto }, {dataSources}) => {
            return await dataSources.saleRegisterAPI.saleRegisterByProviderAndClientAndProductRequest(proveedor, nombreCliente, nombreProducto);
        },
        
        mySaleRegisterByClient: async (_, { proveedor, nombreCliente }, {dataSources}) => {
            return await dataSources.saleRegisterAPI.mySaleRegisterByClientRequest(proveedor, nombreCliente);
        },
        mySaleRegisterByProduct: async (_, { proveedor, nombreProducto }, {dataSources}) => {
            return await dataSources.saleRegisterAPI.mySaleRegisterByProductRequest(proveedor, nombreProducto);
        }
        
        mySaleRegisterByClientAndProduct: async (_, { proveedor, nombreCliente, nombreProducto }, {dataSources}) => {
            return await dataSources.saleRegisterAPI.mySaleRegisterByClientAndProductRequest(proveedor, nombreCliente, nombreProducto);
        }
        */
    },
    Mutation: {
        createSaleRegister: async (_, { saleRegister }, {dataSources}) => {
            return await dataSources.saleRegisterAPI.createSaleRegister(saleRegister);
        }
    }
};

module.exports = saleRegisterResolvers;