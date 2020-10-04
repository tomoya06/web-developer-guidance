'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/user/login', controller.users.login);
  router.get('/user/info/:userName', controller.users.info);
  router.get('/user/myself', controller.users.myInfo);
  
  router.get('/goods/search', controller.goods.search);
  router.post('/goods/buy', controller.goods.buy);

  router.get('/shops/info/:shopId', controller.shops.get);

  router.get('/orders/list', controller.orders.getUserOrders);
};
