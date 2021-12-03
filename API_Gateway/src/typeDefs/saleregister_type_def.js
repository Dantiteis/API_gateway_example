const {gql} = require('apollo-server');

const saleRegisterTypeDefs = gql`
    type SaleRegister{
        registroID: String
        nombreCliente: String!
        proveedor: String!
        nombreProducto: String
        cantidad: Int
        precio: Int
        total: Int
        fecha: String
        promocion: String
    }
    type CSaleRegister{
        registroID: String
        nombreCliente: String
        proveedor: String
        nombreProducto: String
        cantidad: Int
        precio: Int
        total: Int
        fecha: String
        promocion: String
    }
    input SaleRegisterInput{
        registroID: String
        nombreCliente: String!
        proveedor: String!
        nombreProducto: String!
        cantidad: Int
        precio: Int
        total: Int
        fecha: String
        promocion: String
    }

    type Query{
        saleRegisterByNombreCliente(nombreCliente: String!): [SaleRegister]
        saleRegisterByProviderAndClient(proveedor: String!, nombreCliente: String!): [SaleRegister]
        saleRegisterByProviderAndProduct(proveedor: String!, nombreProducto: String!): [SaleRegister]
        #saleRegisterByProviderAndClienteAndProduct(proveedor: String!, nombreCliente: String!, nombreProducto: String!): [SaleRegister]
        #mySaleRegisterByClient(proveedor: String!, nombreCliente: String!): CSaleRegister
        #mySaleRegisterByProduct(proveedor: String!, nombreProducto: String!): CSaleRegister
        #mySaleRegisterByClienteAndProduct(proveedor: String!, nombreCliente: String!, nombreProducto: String!): SaleRegister
    }
    type Mutation{
        createSaleRegister(saleRegister: SaleRegisterInput!): SaleRegister
    }
`;

module.exports = saleRegisterTypeDefs;