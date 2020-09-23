const BaseRepository = require("./BaseRepositorie");
const schema = require("./schemas/HeroSchema");

class HeroRepository extends BaseRepository {
  constructor() {
    super({ schema });
  }
}

module.exports = HeroRepository;
