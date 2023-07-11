import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./Router";
import { RecoilRoot } from "recoil";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // react 버전이 18이면 타입스크립트에서 react query를 못 불러옵니다.
  // => npm i @tanstack/react-query
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </RecoilRoot>
);
