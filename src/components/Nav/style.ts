import styled from "styled-components";
import { colors } from "../../constants/colors";
import { pxToRem } from "../../utils";

const { white } = colors;

export const Navigation = styled.nav`
  height: 100%;

  .list {
    padding: 0;
    display: flex;
    height: ${pxToRem(64)};

    .list-item {
      height: 100%;
      min-width: 120px;
      font-size: ${pxToRem(18)};
      padding: 0;

      a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${white};
        text-decoration: none;
      }
    }
    .active {
      border-bottom: 2px solid ${white};
    }
  }
  .first-child-active:nth-child(1) {
    border-bottom: 2px solid ${white};
  }
`;
