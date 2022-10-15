const { Client } = require("pg");
const DATABASE_URL="postgresql://sairaja:w1vrDBPKPOP7CRO9IPgfIA@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dbitter-marten-5761"
const client = new Client(process.env.DATABASE_URL);

(async () => {
  await client.connect();
  try {
    const results = await client.query("SELECT * FROM test1;");
    console.log(results.rows);
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    client.end();
  }
})();