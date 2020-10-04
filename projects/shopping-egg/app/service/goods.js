const Service = require('egg').Service;
const CONSTANT = require('../common/constant');

class GoodsService extends Service {
  async find(goodsName = '', shopId = null) {
    let sql = `select * from Goods where name like '${goodsName}%' `;
    if (shopId) {
      sql += ` and shopId = ${shopId}`;
    }
    const result = await this.app.mysql.query(sql);
    return result;
  }

  async buy(userId, goodId, amount) {
    const result = await this.app.mysql.beginTransactionScope(async conn => {
      const good = await conn.get('Goods', {
        id: goodId,
      });
      if (!good || good.remaining < amount) {
        return {
          success: false,
          msg: CONSTANT.ERROR.GOOD_NOT_ENOUGH,
        };
      }
      const cost = good.value * amount;
      const user = await conn.get('Users', {
        id: userId,
      });
      if (user.balance < cost) {
        return {
          success: false,
          msg: CONSTANT.ERROR.BALANCE_NOT_ENOUGH,
        }
      }

      await conn.insert('Orders', {
        userId: userId,
        goodId: goodId,
        amount: amount,
        value: cost,
      });
      good.remaining -= amount;
      await conn.update('Goods', good);
      user.balance -= cost;
      await conn.update('Users', user);

      return {
        success: true,
      }
    }, this.ctx);
    
    return result;
  }
}

module.exports = GoodsService;

