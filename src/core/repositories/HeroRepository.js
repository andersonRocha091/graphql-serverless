const BaseRpository = require("./BaseRepositorie");
const schema = require("./schemas/HeroSchema");

class HeroRepository extends BaseRpository {
  constructor() {
    super({ schema });
  }
}

module.exports = HeroRepository;
