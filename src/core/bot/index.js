const logger = require('@lib/logger');

const bot = () => {
  logger.info('SSSSH! Bot is trading');
};

module.exports = () => {
  logger.info('Let me tell you something. There’s no nobility in poverty. I’ve been a rich man and I’ve been a poor man. And I choose rich every f**king time. – Jordan Belfort');
  logger.info('Starting CPTB! Feel free to abort while you can');
  setInterval(() => {
    bot();
  }, 1000);
};