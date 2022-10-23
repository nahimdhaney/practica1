// const boom = require('@hapi/boom');

const bcrypt = require('bcrypt');

class UserService {

  async create(data) {
    data.password = await bcrypt.hash(data.password, 5);
    return data;
  }

}

module.exports = UserService;
