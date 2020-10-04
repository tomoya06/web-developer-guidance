const Controller = require('egg').Controller;

class GoodsController extends Controller {
  async search() {
    const ctx = this.ctx;
    const { name, storeId: shopId } = ctx.query;
    const goods = await ctx.service.goods.find(name, shopId);
    ctx.body = goods;
  }

  async buy() {
    const ctx = this.ctx;
    const { userId } = ctx.session;
    const { goodId, amount } = ctx.request.body;
    const res = await ctx.service.goods.buy(userId, goodId, amount);
    ctx.body = res;
  }
}

module.exports = GoodsController;
