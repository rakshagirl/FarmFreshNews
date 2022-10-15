const http = require('http');

const hostname = '127.0.0.1';
const port = 3100;

// Client Connection - Start
const { Client } = require("pg");
const DATABASE_URL="postgresql://sairaja:w1vrDBPKPOP7CRO9IPgfIA@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dbitter-marten-5761"
// Client Connection - End
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  init_connection(res);
  // sentiment_analysis("I am so mad right now");
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function init_connection(res){
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
}

async function sentiment_analysis(text) {
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');
  // const keyfile = require("../../../../../virtual-rarity-365619-febe11feac95.json")

  const config = {
	  projectId: "farm-fresh-news",
	  keyFilename: "../../../../../farm-fresh-news-b2f156736747.json"
	};

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

