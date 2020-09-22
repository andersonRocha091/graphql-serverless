const resolvers = {
  //GET
  Query: {
    async getHero(root, args, context, info) {
      return "Hello World!";
    },
  },
  //POST (atualizacao, cadastro, remocao)
  Mutation: {
    async createHero(root, args, context, info) {
      return "Hello World!";
    },
  },
};

module.exports = resolvers;
