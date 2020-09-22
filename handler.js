"use strict";

const { ApolloServer, gql } = require("apollo-server-lambda");
const setupDynamoDBClient = require("./src/core/util/SetupDynamoDb");
setupDynamoDBClient();

const HeroFactory = require("./src/core/factories/HeroFactory");
const SkillFactory = require("./src/core/factories/Skillfactory");
const isLocal = process.env.IS_LOCAL;
const schema = require("./src/graphql");

// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// const mocks = {};
// const resolvers = {
//   Query: {
//     hello: () => "Hello world!",
//   },
// };

const settings = {
  schema,
  //permitir execucao no frontend e obtenção dos schemas
  introspection: isLocal,
  //frontend
  playground: isLocal,
  formatError(error) {
    console.error("[Global error logger]", error);

    return error;
  },
  formatResponse(response) {
    console.log("[Global logger]", response);
    return response;
  },
  // graphql: {
  //   settings: {
  //     ["request.credentials"]: "same-origin",
  //   },
  // },
};

const server = new ApolloServer(settings);

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: "*",
    // credentials: false,
  },
  endpointURL: "/graphql",
});

// async function main() {
//   console.log("creating factories...");
//   const skillFactory = await SkillFactory.createInstance();
//   const heroFactory = await HeroFactory.createInstance();

//   console.log("inserting skill item");
//   const skillId = `${new Date().getTime()}`;
//   await skillFactory.create({
//     id: skillId,
//     name: "mage",
//     value: 50,
//   });

//   console.log("getting skill item");

//   const [skill] = await skillFactory.findOne(skillId);
//   console.log("skillItem", skill.toJSON());

//   const allSkills = await skillFactory.findAll();
//   console.log("allSkills", allSkills.toJSON());

//   console.log("\n--------------------\n");

//   console.log("Inserting hero item...");

//   const heroId = `${new Date().getTime()}`;
//   await heroFactory.create({
//     id: heroId,
//     name: "Batman",
//     skills: [skillId],
//   });

//   console.log("getting a hero");

//   const hero = await heroFactory.findOne(heroId);
//   console.log("hero", hero.toJSON());

//   const allHeroes = await heroFactory.findAll();
//   console.log("allHeroes", allHeroes);

//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       hero: {
//         hero,
//         allHeroes,
//       },
//       skill: {
//         skill,
//         allSkills,
//       },
//     }),
//   };
// }

// module.exports.test = main;
