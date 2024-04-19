import styled from "styled-components";
import { colors } from "../../../constants/colors";
import { pxToRem } from "../../../utils";
const { textYellow, colorGray, audioBookBg } = colors;

export const StyledComponent = styled.div`
  .text {
    width: 100%;
    font-family: sans-serif;
    font-weight: 400;
    font-size: ${pxToRem(22)};
    color: gray;
  }

  .flex {
    display: flex;
  }

  .gap-10 {
    gap: ${pxToRem(10)};
  }

  .name {
    font-size: ${pxToRem(32)};
  }

  .mt-10 {
    margin-top: ${pxToRem(10)};
  }

  .text-center {
    text-align: center;
  }

  .text-yellow {
    color: ${textYellow};
  }

  .text-white {
    color: white;
  }

  .text-gray {
    color: ${colorGray};
  }

  .grid-icon {
    font-size: ${pxToRem(36)};
    color: ${colorGray};
  }
  .iconButton {
    width: ${pxToRem(40)};
    height: ${pxToRem(40)};
    color: ${textYellow};

    svg {
      font-size: ${pxToRem(32)};
    }
  }
  .play {
    padding: 0;
    width: ${pxToRem(40)} !important;
    height: ${pxToRem(40)};
    background-color: ${textYellow};
    color: ${audioBookBg};
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .audio-card-img {
    position: absolute;
    top: ${pxToRem(22)};
    left: -${pxToRem(14)};
    width: ${pxToRem(25)};
    height: ${pxToRem(25)};
  }
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${pxToRem(225)}, 1fr));
    gap: ${pxToRem(20)};
    padding-top: ${pxToRem(40)};
  }

  .title {
    font-size: ${pxToRem(36)};
    color: ${textYellow};
    text-align: center;
    font-family: Georgia, "Times New Roman", Times, serif;
    text-transform: uppercase;
    font-weight: 400 !important;
  }

  .description {
    font-size: ${pxToRem(16)};
    color: ${colorGray};
    line-height: ${pxToRem(24)};
    padding: ${pxToRem(15)} ${pxToRem(0)};
  }

  .details-title {
    font-size: ${pxToRem(48)};
    font-family: Georgia, "Times New Roman", Times, serif;
  }
`;
