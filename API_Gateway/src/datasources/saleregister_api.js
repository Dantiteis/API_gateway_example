const serverConfig = require('../server');
const {RESTDataSource} = require('apollo-datasource-rest');

class SaleRegisterAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.sale_register_api_url;
    }
    async saleRegisterByNombreClienteRequest(nombreCliente){
        return await this.get(`/saleregisters/${nombreCliente}`);
    }
    async saleRegisterByProviderAndClientRequest(proveedor, nombreCliente){
        return await this.get(`/saleregistersc/${proveedor}/${nombreCliente}`);
    }
    async saleRegisterByProviderAndProductRequest(proveedor, nombreProducto){
        return await this.get(`/saleregistersp/${proveedor}/${nombreProducto}`);
    }
    /*
    async saleRegisterByProviderAndClientAndProductRequest(proveedor, nombreCliente, nombreProducto){
        return await this.get(`/saleregisters/${proveedor}/${nombreCliente}/${nombreProducto}`);
    }
    
    async mySaleRegisterByClientRequest(proveedor, nombreCliente){
        return await this.get(`/saleregistersc/${proveedor}/${nombreCliente}`);
    }
    
    async mySaleRegisterByProductRequest(proveedor, nombreProducto){
        return await this.get(`/saleregistersp/${proveedor}/${nombreProducto}`);
    }
    
    async mySaleRegisterByClientAndProductRequest(proveedor, nombreCliente, nombreProducto){
        return await this.get(`/saleregisters/${proveedor}/${nombreCliente}/${nombreProducto}`);
    }
    */
    async createSaleRegister(saleRegister){
        return await this.post('/saleregister/', saleRegister);
    }
}

module.exports = SaleRegisterAPI;
