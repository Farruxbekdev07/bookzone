import styled from "styled-components";
import { UserBackgroundImage } from "../../assets";
import { pxToRem } from "../../utils";
import { colors } from "../../constants/colors";

const { background, yellow, dark, white, gray } = colors;

export const UserInfoStyles = styled.div`
  .info {
    width: 100%;
    background-image: url(${UserBackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    padding: ${pxToRem(40)} ${pxToRem(80)};
    background-position: right;
    border-radius: ${pxToRem(16)};

    .info-box {
      display: flex;
      width: fit-content;
      gap: ${pxToRem(40)};

      .info-image-wrapper {
        width: fit-content;

        .info-image {
          width: 100%;
          position: relative;

          .user-avatar {
            width: ${pxToRem(200)};
            height: ${pxToRem(200)};
          }

          .star {
            background-color: ${background};
            position: absolute;
            right: ${pxToRem(15)};
            top: ${pxToRem(150)};
            border: ${pxToRem(2)} solid ${yellow};
            padding: ${pxToRem(10)};
            width: ${pxToRem(45)};
            height: ${pxToRem(45)};
          }
        }
      }

      .info-bio-wrapper {
        padding: ${pxToRem(15)} ${pxToRem(0)};
      }
    }
  }

  .user-main {
    display: flex;
    padding: ${pxToRem(20)} ${pxToRem(0)};
    gap: ${pxToRem(40)};

    .user-main-now-read {
      width: fit-content;
      display: flex;
      flex-direction: column;
      gap: ${pxToRem(20)};

      .user-main-statistics {
        min-width: ${pxToRem(400)};
        display: flex;
        flex-direction: column;
        gap: ${pxToRem(30)};
        padding: ${pxToRem(25)};
        background-color: ${dark};
        border-radius: ${pxToRem(14)};

        .statistics-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .statistics-card-wrapper {
          display: flex;
          flex-direction: column;
          gap: ${pxToRem(16)};

          .statistics-card {
            display: flex;
            width: 100%;
            gap: ${pxToRem(20)};
            align-items: end;

            .card-image {
              width: ${pxToRem(35)};
              height: ${pxToRem(50)};
              object-fit: cover;
            }

            .card-content {
              display: flex;
              justify-content: space-between;

              .title {
                font-size: ${pxToRem(16)};
                color: ${white};
              }
              .progress {
                color: white;
                font-size: ${pxToRem(12)};
              }
            }

            .progress-bar-wrapper {
              display: flex;
              width: 100%;
              justify-content: space-between;
              gap: ${pxToRem(20)};
              margin-top: ${pxToRem(10)};

              .progress-bar {
                width: ${pxToRem(180)};
                height: ${pxToRem(25)};
                background-color: white;
                border-radius: ${pxToRem(5)};

                .progress {
                  height: 100%;
                  background-color: ${yellow};
                  border-radius: ${pxToRem(5)};
                }
              }

              .progress-bar-button {
                height: ${pxToRem(25)};
                font-size: ${pxToRem(10)};
                width: ${pxToRem(100)};
                background-color: ${yellow};
                color: rgba(60, 39, 16, 1);
                &:hover {
                  background-color: ${yellow};
                }
              }
            }
          }
        }

        .statistics-button {
          background-color: ${yellow};
          width: 100%;
          height: ${pxToRem(45)};
          color: rgba(100, 81, 61, 1);

          &:hover {
            background-color: ${yellow};
          }
        }
      }
    }

    .user-main-audio-books {
      min-width: ${pxToRem(400)};
      min-height: ${pxToRem(300)};
      background-color: ${dark};
      border-radius: ${pxToRem(14)};
      padding: ${pxToRem(25)};

      .audio-books {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: ${pxToRem(20)};
        margin: ${pxToRem(10)} ${pxToRem(0)};

        .book {
          width: ${pxToRem(50)};
          height: ${pxToRem(70)};
          object-fit: cover;
          border-radius: ${pxToRem(5)};
        }

        .second-book {
          width: ${pxToRem(70)};
          height: ${pxToRem(100)};
        }
      }

      .audio-note {
        width: 100%;
        margin-top: ${pxToRem(10)};

        img {
          width: 100%;
        }
      }

      .audio-control-container {
        display: flex;
        justify-content: center;

        .audio-control {
          display: flex;
          gap: ${pxToRem(40)};

          .audio-control-play {
            display: flex;
            gap: ${pxToRem(20)};
          }
        }
      }

      .audio-book-card-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: ${pxToRem(20)} ${pxToRem(0)};
        gap: ${pxToRem(10)};

        .audio-book-card {
          display: flex;
          padding: ${pxToRem(10)} ${pxToRem(15)};
          justify-content: space-between;
          align-items: center;
          border-radius: ${pxToRem(5)};
          width: ${pxToRem(300)};
          cursor: pointer;
          position: relative;
          background-color: ${background};
          opacity: 2;
          color: ${gray};

          .audio-book-card-image {
            width: ${pxToRem(35)};
            height: ${pxToRem(50)};
            overflow: hidden;
          }

          .card-name {
            font-size: ${pxToRem(14)};
            color: ${yellow};
          }
        }
        .active {
          opacity: 1;
          background-color: transparent;
          border: ${pxToRem(2)} solid ${yellow};
        }
      }
    }

    .user-main-tabs {
      width: 100%;
    }
  }
`;
