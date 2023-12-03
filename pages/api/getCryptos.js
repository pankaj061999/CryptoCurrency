export default async function handler(req, res) {
  try {
    const apiKey = "f67a3dbf-b4fd-471d-9287-009ff069c1e7"; // Your CoinMarketCap API key
    const headers = {
      "X-CMC_PRO_API_KEY": apiKey,
      Accept: "application/json",
    };

    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?limit=100`,
      {
        headers: headers,
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}
