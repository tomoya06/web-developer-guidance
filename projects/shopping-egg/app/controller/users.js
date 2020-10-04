const Controller = require('egg').Controller;
const ms = require('ms');

const CONSTANT = require('../common/constant');

class UserController extends Controller {
  async info() {
    const ctx = this.ctx;
    const userName = ctx.params.userName;
    const user = await ctx.service.users.find(userName);
    ctx.body = user;
  }

  async myInfo() {
    const ctx = this.ctx;
    const { userId } = ctx.session;
    if (!userId) {
      ctx.body = {
        success: false,
        msg: CONSTANT.ERROR.NOT_LOGIN,
      }
      return;
    }
    const user = await ctx.service.users.findById(userId);
    ctx.body = user;
  }

  async login() {
    const ctx = this.ctx;
    const { username, password } = ctx.request.body;
    const user = await ctx.service.users.login(username, password);
    
    if (!user) {
      ctx.body = {
        success: false,
        msg: CONSTANT.ERROR.LOGIN_ERROR,
      }
    }
    ctx.session.userId = user.id;
    ctx.session.maxAge = ms('7d');
    ctx.body = {
      success: true,
      user,
    };
  }
}

module.exports = UserController;
