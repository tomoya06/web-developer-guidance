const Service = require('egg').Service;

class OrderService extends Service {
  async getUserOrders(userId) {
    const sql = `SELECT od.*, gd.name AS goodName, sp.name AS shopName
    FROM Orders od 
    JOIN Goods gd ON od.goodId = gd.id
    JOIN Shops sp ON gd.shopId = sp.id
    WHERE od.userId = ${userId}
    `;
    const res = await this.app.mysql.query(sql);
    return res;
  }
}

module.exports = OrderService;
