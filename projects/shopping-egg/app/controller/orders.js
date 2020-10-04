const Controller = require('egg').Controller;

class OrderController extends Controller {
  async getUserOrders() {
    const ctx = this.ctx;
    const { userId } = ctx.session;
    const res = await ctx.service.orders.getUserOrders(userId);
    ctx.body = res;
  }
}

module.exports = OrderController;
