import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import { useOutletContext } from "react-router-dom";
interface ChartProps {
  coinId: string;
}
function Chart() {
  // 부모 Outlet context로 넘겨받은 props => useOutletContext로 받아오기
  const { coinId } = useOutletContext<ChartProps>();
  console.log(coinId);

  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return <h1>Chart</h1>;
}
export default Chart;
