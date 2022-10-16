# FarmFreshNews
A project for HackTX

## Inspiration
Farmers around the world have to deal with a massive influx of news about their products every day and every hour. In this digital age, information flows faster than any stream can hope to mimic. We seeked to organize this information and make clear to farmers the information they would for crop production and aggregate different types of news so they can develop a better understanding of the market conditions they will face when selling this year's harvest, and can make informed plans for future planting, growing, and harvest seasons.

## What it does
FarmFreshNews collects news sources related to relevant produce and collects them into one category. Then it performs sentiment analysis news article in each list and assigns each article a sentiment score based on the fields like headlines. This is then shown along with the article when farmers choose a produce to look at to provide them a quick overview of the article.

## How we built it
We primarily built this application though Javascript and HTML. We were able to make calls to Google Cloud's Natural Language AI to perform our sentiment analysis and passed in data for articles from our Cockroach DB server bitter-marten. We were able to collaborate with each other with Github and map out our tasks out on our whiteboard.

## Challenges we ran into
We ran into an issue with CockroachDB and Google Cloud authentication conflicting with each other. This would result in a connection refused from CockroachDB and not being able to get our backend data to the Google Cloud Engine. We were able to resolve this by having google use a GOOGLE_APPLICATION_CREDENTIALS system variable.

## Accomplishments that we're proud of
We're proud that we were able to produce an interactive website that can summarize and aggregate news sources that farmers can quickly glance and delve deeper into we want to get more specific info on how the current situation and also what the future might hold. 

## What we learned
One important skill we learned in this Hackathon is how to use CockroachDB to setup a cluster that could be collaborated on to add new data and even form a connection directly in JavaScript with Node-postgres. 

## What's next for Farm Fresh News
We'd like to have a weighted sentiment analysis that can take advantage of different variables that help contextualize the news articles they receive. This includes variables like Location and Date to give a better weighted sentiment score so farmers can pay attention to the news sources that matter the most to them.
