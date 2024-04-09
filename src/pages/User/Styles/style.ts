import styled from "styled-components";
import { colors } from "../../../constants/colors";
const { textYellow, colorGray, audioBookBg } = colors;

export const StyledComponent = styled.div`
  .text {
    width: 100%;
    font-family: sans-serif;
    font-weight: 400;
    font-size: 22px;
    color: gray;
  }

  .flex {
    display: flex;
  }

  .gap-10 {
    gap: 10px;
  }

  .name {
    font-size: 32px;
  }

  .mt-10 {
    margin-top: 10px;
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

  .grid-icon {
    font-size: 36px;
    color: ${colorGray};
  }
  .iconButton {
    width: 40px;
    height: 40px;
    color: ${textYellow};

    svg {
      font-size: 32px;
    }
  }
  .play {
    padding: 0;
    width: 40px !important;
    height: 40px;
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
    top: 22px;
    left: -14px;
    width: 25px;
    height: 25px;
  }
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
    gap: 20px;
  }
`;
