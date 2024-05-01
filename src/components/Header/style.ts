import styled from "styled-components";
import { pxToRem } from "../../utils";

export const HeaderComponent = styled.header`
  .app-bar {
    position: fixed;
    background: #191919;
    padding: ${pxToRem(0)} ${pxToRem(56)};
    border-bottom: ${pxToRem(1)} solid rgba(255, 255, 255, 0.22);

    .tool-bar {
      display: flex;
      justify-content: space-between;
      align-items: start;

      .logo {
        height: ${pxToRem(64)};
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
