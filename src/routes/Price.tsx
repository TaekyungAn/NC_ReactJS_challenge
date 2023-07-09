import { useLocation } from "react-router-dom";
import { RouteState } from "./Coin";
import { Helmet } from "react-helmet";

function Price() {
  const { state } = useLocation() as RouteState;

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
      price
    </div>
  );
}
export default Price;
