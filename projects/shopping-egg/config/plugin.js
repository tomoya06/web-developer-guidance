'use strict';

/** @type Egg.EggPlugin */
module.exports = {

  mysql: {
    enable: true,
    package: 'egg-mysql',
  },

  redis: {
    enable: true,
    package: 'egg-redis',
  },

  sessionRedis: {
    enable: true,
    package: 'egg-session-redis',
  }
};

