import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface RouteState {
  state: { name: string };
}

function Coin() {
  const [loading, setLoading] = useState(true);
  // useLocation : Link에서 주는 정보 받아옴
  // 부모 컴포넌트에서 fetch된 data(state)를 Link를 통해 받아올 수 있다.
  const { state } = useLocation() as RouteState;
  const { coinId } = useParams<"coinId">();
  useEffect(() => {
    (async () => {
      const infoData = await axios(
        `https://api.coinpaprika.com/v1/coins/${coinId}`
      );
      const priceData = await axios(
        `https://api.coinpaprika.com/v1/tickers/${coinId}`
      );
      console.log(priceData.data);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
