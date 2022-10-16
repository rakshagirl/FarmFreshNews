const http = require('http');

const hostname = '127.0.0.1';
const port = 3100;

// Client Connection - Start
const { Client } = require("pg");
const DATABASE_URL="[REDACTED]"
// Client Connection - End
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  rows = init_connection(res);
  for (let i=0; i<rows.length;i++) {
    sentiment_analysis(rows[i]);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function init_connection(res){
    const client = new Client(process.env.DATABASE_URL);
    (async () => {
    await client.connect();
    try {
        const results = await client.query("SELECT * FROM FarmFresh;");
        console.log(results.rows);
    } catch (err) {
        console.error("error executing query:", err);
    } finally {
        client.end();
    }
    })();
    return results.rows();
}

async function sentiment_analysis(text) {
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');

  // Instantiates a client
  const client = new language.LanguageServiceClient();

  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Detects the sentiment of the text
  const [result] = await client.analyzeSentiment({document: document});
  const sentiment = result.documentSentiment;

  console.log(`Text: ${text}`);
  console.log(`Sentiment score: ${sentiment.score}`);
  console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
}