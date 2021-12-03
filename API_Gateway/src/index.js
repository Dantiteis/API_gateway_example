const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers')
const SaleRegisterAPI = require('./datasources/saleregister_api')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        saleRegisterAPI: new SaleRegisterAPI()
    }),
    introspection: true,
    playground: true
})


server.listen(process.env.PORT || 4000).then(({url})=>{
    console.log(`🚀 Server ready at ${url}`)
})