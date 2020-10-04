const Service = require('egg').Service;
const CONSTANT = require('../common/constant');

const USER_COLUMNS = ['name', 'balance', 'createTm', 'updateTm'];

class UserService extends Service {

  async find(username) {
    const user = await this.app.mysql.select('Users', {
      where: { name: username, },
      columns: USER_COLUMNS,
      limit: 1,
    });
    return user;
  }

  async findById(userId) {
    const user = await this.app.mysql.select('Users', {
      where: { id: userId, },
      columns: USER_COLUMNS,
      limit: 1,
    });
    return user;
  }

  async login(username, password) {
    const user = await this.app.mysql.select('Users', {
      where: {
        name: username,
        passwd: password,
      },
      columns: USER_COLUMNS,
      limit: 1,
    });
    return user;
  }
}

module.exports = UserService;
