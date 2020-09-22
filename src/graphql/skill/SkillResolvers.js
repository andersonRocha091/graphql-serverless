const resolvers = {
  //GET
  Query: {
    async getSkill(root, args, context, info) {
      return "Hello World!";
    },
  },
  //POST (atualizacao, cadastro, remocao)
  Mutation: {
    async createSkill(root, args, context, info) {
      return "Hello World!";
    },
  },
};

module.exports = resolvers;
