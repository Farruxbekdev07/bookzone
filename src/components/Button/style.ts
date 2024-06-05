import styled from "styled-components";
import { pxToRem } from "../../utils";
import { colors } from "../../constants/colors";
const { yellow } = colors;

export const StyledButton = styled.div`
  .button {
    height: ${pxToRem(46)};
  }
  .button-background {
    background-color: ${yellow};

    &:hover {
      background-color: ${yellow};
    }
  }
`;
