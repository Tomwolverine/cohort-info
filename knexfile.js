// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///student_info'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
