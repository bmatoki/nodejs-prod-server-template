module.exports = {
  apps: [
    {
      name: 'server-template',
      script: 'app.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8080,
        COMPANY: '{company_name_here}',
      },
    },
  ],

};
