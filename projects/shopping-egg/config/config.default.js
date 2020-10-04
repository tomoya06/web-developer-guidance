/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    mysql: {
      client: {
        host: '172.20.123.58',
        port: '3306',
        user: 'admin',
        password: '11111111',
        database: 'demo_store',
      },
    },
    security: {
      csrf: false,
    },
    redis: {
      client: {
        host: '172.20.123.58',
        port: '6379',
        password: '11111111',
        db: '0',
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1601736432560_6090';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
