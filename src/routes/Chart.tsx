import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import { useLocation, useOutletContext } from "react-router-dom";
import ReactApexChart from "react-apexcharts";
import { Helmet } from "react-helmet";
import { RouteState } from "./Coin";
interface IChartProps {
  coinId: string;
}
interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}
function Chart() {
  const { state } = useLocation() as RouteState;
  // 부모 Outlet context로 넘겨받은 props => useOutletContext로 받아오기
  const { coinId } = useOutletContext<IChartProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    { refetchInterval: 10000 }
  );
  return (
    <div>
      <Helmet>
        <link
          rel="icon"
          type="image/png"
          href={`https://coinicons-api.vercel.app/api/icon/${state?.symbol}`}
          sizes="16x16"
        />
      </Helmet>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ReactApexChart
          type="line"
          series={[
            {
              name: "Price",
              // 니꼬샘 API는 close 데이터가 string이기 때문에 parseFloat를 통해 형 변환
              // ?? [] : 데이터가 null이 되는 걸 방지, null 대신 빈 배열로 바꿔줌
              data: data?.map((price) => parseFloat(price.close)) ?? [],
            },
          ]}
          options={{
            theme: { mode: "dark" },
            chart: {
              height: 300,
              width: 500,
              toolbar: { show: false },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 3,
            },
            yaxis: { show: false },
            xaxis: {
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },
              type: "datetime",
              categories: data?.map((price) =>
                // 니꼬쌤 API 호출 보내는 경우, tine_close에 현재 날짜를 초단위로 들어오게 되어 이를 변환해줘야 함
                new Date(price.time_close * 1000).toISOString()
              ),
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
            },
            colors: ["#0fbcf9"],
            tooltip: {
              y: { formatter: (value) => `$ ${value.toFixed(2)}` },
            },
          }}
        />
      )}
    </div>
  );
}
export default Chart;
