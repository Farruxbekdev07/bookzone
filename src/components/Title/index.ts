import styled from "styled-components";
import { pxToRem } from "../../utils";
import { colors } from "../../constants/colors";
const { yellow } = colors;

export const TitleStyles = styled.h1`
  .title {
    font-size: ${pxToRem(24)};
    color: ${yellow};
    text-wrap: wrap;
  }
`;
