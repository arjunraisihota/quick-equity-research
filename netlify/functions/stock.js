
const fetch = require('node-fetch');

exports.handler = async function(event) {
  const { ticker } = event.queryStringParameters;

  if (!ticker) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing ticker symbol' }),
    };
  }

  try {
    const res = await fetch(`https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=demo`);
    const data = await res.json();

    if (!data || data.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'No data found for this ticker.' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data[0]),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Fetch failed', details: error.message }),
    };
  }
};
