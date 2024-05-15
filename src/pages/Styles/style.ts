import styled from "styled-components";
import { colors } from "../../constants/colors";
import { pxToRem } from "../../utils";
const { yellow, white, dark, gray, darkBlue } = colors;

export const StyledComponent = styled.div`
  .text {
    font-family: sans-serif;
    font-weight: 400;
  }
  .text-8 {
    font-size: ${pxToRem(22)};
  }
  .text-10 {
    font-size: ${pxToRem(10)};
  }
  .text-12 {
    font-size: ${pxToRem(12)};
  }
  .text-13 {
    font-size: ${pxToRem(13)};
  }
  .text-14 {
    font-size: ${pxToRem(14)};
  }
  .text-16 {
    font-size: ${pxToRem(16)};
  }
  .text-18 {
    font-size: ${pxToRem(18)};
  }
  .text-20 {
    font-size: ${pxToRem(20)};
  }
  .text-22 {
    font-size: ${pxToRem(22)};
  }
  .text-24 {
    font-size: ${pxToRem(24)};
  }
  .text-25 {
    font-size: ${pxToRem(25)};
  }
  .text-31 {
    font-size: ${pxToRem(31)};
  }
  .text-32 {
    font-size: ${pxToRem(32)};
  }
  .text-36 {
    font-size: ${pxToRem(36)};
  }
  .text-39 {
    font-size: ${pxToRem(39)};
  }
  .text-48 {
    font-size: ${pxToRem(48)};
  }
  .opacity-30 {
    opacity: 0.3;
  }
  .opacity-60 {
    opacity: 0.6;
  }
  .opacity-80 {
    opacity: 0.8;
  }
  .flex {
    display: flex;
  }
  .gap-10 {
    gap: ${pxToRem(10)};
  }
  .mt-10 {
    margin-top: ${pxToRem(10)};
  }
  .text-center {
    text-align: center;
  }
  .text-yellow {
    color: ${yellow};
  }
  .text-white {
    color: ${white};
  }
  .text-gray {
    color: ${gray};
  }
  .uppercase {
    text-transform: uppercase;
  }
  .grid-icon {
    font-size: ${pxToRem(36)};
    color: ${white};
  }
  .iconButton {
    width: ${pxToRem(40)};
    height: ${pxToRem(40)};
    color: ${yellow};

    svg {
      font-size: ${pxToRem(32)};
    }
  }
  .w-100 {
    width: 100%;
  }
  .w-50 {
    width: 50%;
  }
  .play {
    padding: 0;
    width: ${pxToRem(40)} !important;
    height: ${pxToRem(40)};
    background-color: ${yellow};
    color: ${dark};

    &:hover {
      background-color: ${yellow};
    }
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
    font-size: ${pxToRem(16)};
    color: ${yellow};
    text-align: center;
    font-family: sans-serif;
    text-transform: uppercase;
    font-weight: 400 !important;
  }
  .description {
    font-size: ${pxToRem(16)};
    opacity: 0.8;
    color: ${white};
    line-height: ${pxToRem(24)};
    padding: ${pxToRem(15)} ${pxToRem(0)};
  }
  .grid {
    display: grid;
    gap: ${pxToRem(10)};
  }
  .justify-center {
    justify-content: center;
  }
  .gap-10 {
    gap: ${pxToRem(10)};
  }
  .no-data {
    display: grid;
    justify-content: center;
    align-items: center;
    height: 25vh;
  }
  .pointer {
    cursor: pointer;
  }
`;

export const RegisterComponent = styled.div`
  .register-wrapper {
    display: flex;
    height: 100vh;

    .register-image-wrapper {
      height: 100%;
      padding: ${pxToRem(100)} ${pxToRem(40)};
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${yellow};

      .register-image {
        width: 100%;
        max-width: ${pxToRem(700)};
        height: fit-content;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .register-form-wrapper {
      height: 100%;
      display: flex;
      padding: ${pxToRem(50)} ${pxToRem(30)};
      justify-content: center;
      align-items: center;

      .register-form {
        width: 100%;
        max-width: ${pxToRem(600)};

        .register-form-title {
          width: 100%;
          margin-bottom: ${pxToRem(30)};

          .register-title {
            font-size: ${pxToRem(36)};
            font-weight: 900;
          }
          .register-link {
            font-size: ${pxToRem(13)};
            font-weight: 400;

            a {
              text-decoration: none;
              color: blue;
            }
          }
        }
        form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: ${pxToRem(20)};

          button {
            height: ${pxToRem(56)};
            background-color: ${darkBlue};
            font-size: ${pxToRem(18)};
            font-weight: 500;

            &:hover {
              background-color: ${darkBlue};
            }
          }
        }
      }
    }
  }
  .w-50 {
    width: 50%;
  }
  .w-100 {
    width: 100%;
  }
  .row {
    flex-direction: row;
  }
  .column {
    flex-direction: column;
  }
`;
