import axios from "axios";
const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
  return await axios.get(`${BASE_URL}/coins`).then((res) => res.data);
}
export async function fetchCoinInfo(coinId: string) {
  return await axios.get(`${BASE_URL}/coins/${coinId}`).then((res) => res.data);
}
export async function fetchCoinTickers(coinId: string) {
  return await axios
    .get(`${BASE_URL}/tickers/${coinId}`)
    .then((res) => res.data);
}

// 니꼬자체 API
export async function fetchCoinHistory(coinId: string) {
  return await axios
    .get(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`)
    .then((res) => res.data);
}
/* //유료화 된 api
export async function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return await axios
    .get(
      `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
    )
    .then((res) => res.data);
}
*/
