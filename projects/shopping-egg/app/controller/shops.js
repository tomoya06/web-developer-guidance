const Controller = require('egg').Controller;

class ShopController extends Controller {
  async get() {
    const ctx = this.ctx;
    const shopId = ctx.params.shopId;
    const shop = await ctx.service.shop.get(shopId);
    ctx.body = shop;
  }
}

module.exports = ShopController;

