import styled from "styled-components";
import { pxToRem } from "../../utils";
import { colors } from "../../constants/colors";
const { yellow, background, white } = colors;

export const HomePageStyles = styled.div`
  .search-bar-container {
    width: 100%;
    display: flex;
    align-items: end;

    .search-bar {
      width: 100%;
      height: ${pxToRem(170)};
      background-color: rgba(25, 25, 25, 1);
      box-shadow: ${pxToRem(0)} ${pxToRem(0)} ${pxToRem(30)}
        rgba(43, 39, 39, 0.5);
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: ${pxToRem(10)};
      border-radius: ${pxToRem(15)};

      .search {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: ${pxToRem(20)};
        padding: ${pxToRem(0)} ${pxToRem(20)};

        .search-input {
          background-color: rgba(64, 64, 64, 1);
          border-radius: ${pxToRem(15)};
          max-width: ${pxToRem(750)};

          &::placeholder {
            font-size: ${pxToRem(24)};
          }
        }

        input {
          outline: none;
          color: ${yellow};
          border: none;
        }
        fieldset {
          border-color: ${yellow};
        }

        label {
          color: ${yellow};
        }

        .search-button {
          width: ${pxToRem(180)};
          height: ${pxToRem(56)};
          text-transform: uppercase;
          color: rgba(60, 39, 16, 1);
          font-size: ${pxToRem(18)};
          display: flex;
          gap: ${pxToRem(7)};

          .search-icon {
            font-size: ${pxToRem(24)};
          }
        }
      }
    }
  }
  .home-page-container {
    padding: ${pxToRem(40)} ${pxToRem(0)};

    .home-page-tabs {
      position: relative;
      padding: ${pxToRem(20)} ${pxToRem(0)};

      .create-book {
        max-width: ${pxToRem(180)} !important;
        height: ${pxToRem(56)};
        position: absolute;
        right: 0;
      }
    }
  }
`;

export const DetailPageStyle = styled.div`
  .detail-container {
    background: ${background};
    top: ${pxToRem(64)};

    .detail-container-flex {
      display: flex;
      gap: ${pxToRem(20)};

      .detail-image {
        min-width: fit-content;
        max-width: 100%;
        width: ${pxToRem(700)};
        object-fit: contain;
      }
      .date-of-living-container {
        padding: ${pxToRem(50)} ${pxToRem(20)};
        display: flex;
        justify-content: center;
        align-items: center;

        .date-of-living {
          width: fit-content;
          display: flex;
          gap: ${pxToRem(20)};
          align-items: center;

          .horizontal-rule {
            color: ${yellow};
            font-weight: 900;
            font-size: ${pxToRem(48)};
          }
        }
      }
      .about-this-life {
        max-width: 60%;
        padding: ${pxToRem(50)} ${pxToRem(50)} ${pxToRem(50)} ${pxToRem(100)};

        .creativity {
          padding: ${pxToRem(30)} ${pxToRem(0)};
          display: flex;
          gap: ${pxToRem(10)};

          .author-description {
            font-size: ${pxToRem(12)};
            color: ${white};
            width: ${pxToRem(400)};
            line-height: ${pxToRem(20)};
            opacity: 0.8;
          }
        }
        .author-books {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: ${pxToRem(20)};
          padding: ${pxToRem(30)} ${pxToRem(0)};
        }
      }
    }
  }
`;
