// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/cookbook.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // needed when using foreign keys
    pool: {
      afterCreate: (conn, done) => { // Runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // Turn on FK enforcement
      }
    },
  }
};
