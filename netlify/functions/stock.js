exports.handler = async (event, context) => {
  const ticker = event.queryStringParameters.ticker;
  const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${ticker}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data." })
    };
  }
};
