import { useLocation, useOutletContext } from "react-router-dom";
import { RouteState } from "./Coin";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import { IChartProps, IHistorical } from "./Chart";

function Price() {
  const { state } = useLocation() as RouteState;
  const { coinId } = useOutletContext<IChartProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
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
      <div>
        {isLoading
          ? "Loading Price..."
          : data?.map((price) => <div>고점:{price.high}</div>)}
      </div>
    </div>
  );
}
export default Price;
