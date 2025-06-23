
const fetch = require('node-fetch');

exports.handler = async (event) => {
  const ticker = event.queryStringParameters.ticker;
  const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${ticker}`;
  const resp = await fetch(url);
  const data = await resp.json();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
};
