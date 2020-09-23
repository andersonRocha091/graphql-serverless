const resolvers = {
  //GET
  Query: {
    async getHero(root, args, context, info) {
      return context.Hero.findAll(args);
    },
  },
  //POST (atualizacao, cadastro, remocao)
  Mutation: {
    async createHero(root, args, context, info) {
      const { id } = await context.Hero.create(args);
      return id;
    },
  },
};

module.exports = resolvers;
