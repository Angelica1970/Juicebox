// inside db/seed.js

// grab our client with destructuring from the export in index.js
const { client } = require('./index');

async function testDB() {
    try {
      client.connect();
  
      const result = await client.query(`SELECT * FROM users;`);
      const {rows} = await client.query(`SELECT * FROM users;`);
      console.log(rows);
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      client.end();
    }
  }

testDB();