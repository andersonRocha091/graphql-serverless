const BaseRepository = require("./BaseRepositorie");
const schema = require("./schemas/SkillSchema");

class SkillRepository extends BaseRepository {
  constructor() {
    super({ schema });
  }
}

module.exports = SkillRepository;
