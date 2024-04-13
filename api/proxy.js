const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const path = req.url.replace('/api/proxy', '');

    const response = await axios({
      url: `https://api.cloudflare.com/client/v4/accounts/${process.env.6d0eda71212a9ce25a5e47b40f45b5d3}/ai/run${path}`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.surnanqPoo2llV2NTCzRXjTIgj_r3V3kanNEWv_B}`,
      },
      data: req.body,
      timeout: 30000,
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
};
