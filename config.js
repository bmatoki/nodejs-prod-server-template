module.exports = {
  production: {
    logger: {
      morganLevel: 'tiny',
      level: 'warn',
    },
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    },
    mail: {
      smtp: 'smtp.gmail.com',
      ssl: true,
      port: 465,
      username: '',
      password: '',
      techadmin: '',
      errorAlertThershold: 10,
      alertFrequency: '0 0 */1 * * *', // cron syntax sec min hour days etc
    },
  },
  development: {
    logger: {
      morganLevel: 'dev',
      level: 'debug',
    },
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    },
    mail: {
      smtp: 'smtp.gmail.com',
      ssl: true,
      port: 465,
      username: '',
      password: '',
      techadmin: '',
      errorAlertThershold: 10,
      alertFrequency: '0 0 */1 * * *', // cron syntax sec min hour days etc
    },
  },
  test: {
    logger: {
      morganLevel: 'dev',
      level: 'debug',
    },
    mail: {
      smtp: 'smtp.gmail.com',
      ssl: true,
      port: 465,
      username: '',
      password: '',
      techadmin: '',
      errorAlertThershold: 10,
      alertFrequency: '0 0 */1 * * *', // cron syntax sec min hour days etc
    },
    test: {
      decryptHash: '',
    },
  },
};
