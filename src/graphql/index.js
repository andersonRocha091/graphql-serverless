const { readdirSync } = require("fs");
const {
  makeExecutableSchema,
  mergeSchemas,
  gql,
} = require("apollo-server-lambda");

// // console.log(schemaOficial);
const ownSchemas = readdirSync(__dirname)
  //pega tudo ignorando o index.js da pasta graphql
  .filter((file) => file !== "index.js")
  //Faz o require de cada um dos itens das pastas (hero, skill, etc)
  .map((folder) => require(`./${folder}`))
  //Criar um schema do GraphQL juntanto os schemas e resolvers
  .map((item) => {
    return makeExecutableSchema({
      typeDefs: gql(item.schema),
      resolvers: item.resolvers,
    });
  });
/**
 * Hero resolver
 * {
 *    Query:{getHero}
 * }
 *
 * skill resolver
 * {
 *    Query: {getSkill}
 * }
 *
 * skill + hero  = substitui o conteudo de query
 */
module.exports = mergeSchemas({ schemas: ownSchemas });
