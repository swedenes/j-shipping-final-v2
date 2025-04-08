const axios = require('axios');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST method allowed' });
  }

  const { productList, countryCode } = req.body;

  try {
    const response = await axios.post(
      'https://developers.cjdropshipping.com/api2.0/v1/logistic/freightCalculate',
      {
        productList,
        countryCode
      },
      {
        headers: {
          'Authorization': '36c9924720cc40bc860bf602f1e3f373',
          'Content-Type': 'application/json'
        }
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      error: 'CJ API Error',
      details: error.response?.data || error.message
    });
  }
};
