import styled from "styled-components";
import { pxToRem } from "../../../utils";
import { colors } from "../../../constants/colors";

const { dark } = colors;

export const AccountMenuComponent = styled.div`
  .tooltip {
    display: flex;
    align-items: center;
    height: ${pxToRem(64)};
    text-align: center;

    .avatar {
      width: ${pxToRem(40)};
      height: ${pxToRem(40)};
    }
  }
  .link {
    text-decoration: none;
    color: ${dark};
  }
`;
