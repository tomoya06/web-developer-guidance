const Service = require('egg').Service;

class ShopService extends Service {
  async get(shopId) {
    const shop = await this.app.mysql.get('Shops', {
      id: shopId,
    });
    return shop;
  }
}

module.exports = ShopService;
