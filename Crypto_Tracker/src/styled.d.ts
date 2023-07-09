import "styled-components";

// styled-components 테마의 정의 확장
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}
