import styled from "styled-components";
import { pxToRem } from "../../../utils";
import { colors } from "../../../constants/colors";
const { yellow } = colors;

export const CardStyles = styled.div`
  .card {
    min-width: ${pxToRem(225)};
    min-height: ${pxToRem(325)};
    background-color: transparent;
    box-shadow: none;

    .card-media {
      border-radius: ${pxToRem(15)};
    }
    .card-content {
      padding-top: ${pxToRem(16)};

      .card-title {
        font-size: ${pxToRem(24)};
        color: ${yellow};
        text-wrap: wrap;
      }
      .card-author-name {
        font-size: ${pxToRem(16)};
        color: gray;
        text-wrap: wrap;
      }
      .card-description {
        font-size: ${pxToRem(16)};
        color: gray;
        display: flex;
        align-items: center;
        gap: ${pxToRem(5)};

        .card-star-icon {
          color: white;
        }
      }
    }
  }
`;
