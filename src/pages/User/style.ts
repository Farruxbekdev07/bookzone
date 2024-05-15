import styled from "styled-components";
import { UserBackgroundImage } from "../../assets";
import { pxToRem } from "../../utils";
import { colors } from "../../constants/colors";

const {
  background,
  yellow,
  white,
  lightBlue,
  blue,
  textBlue,
  textDarkBlue,
  darkBlue,
} = colors;

export const UserInfoStyles = styled.div`
  .info {
    width: 100%;
    background-image: url(${UserBackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    padding: ${pxToRem(40)};
    background-position: right;
    border-radius: ${pxToRem(16)};

    .info-box {
      display: flex;
      width: 100%;
      gap: ${pxToRem(40)};

      .info-image-wrapper {
        width: fit-content;

        .info-image {
          width: 100%;
          position: relative;

          .user-avatar {
            font-size: ${pxToRem(96)};
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
        width: 100%;
      }
    }
  }

  .user-main {
    display: flex;
    padding: ${pxToRem(20)} ${pxToRem(0)};
    gap: ${pxToRem(40)};

    .user-main-tabs {
      width: 100%;
    }
  }

  .w-100-rem {
    width: ${pxToRem(100)};
    height: ${pxToRem(100)};
  }
  .w-200-rem {
    width: ${pxToRem(200)};
    height: ${pxToRem(200)};
  }

  @media screen and (max-width: ${pxToRem(615)}) {
    .info-box {
      flex-direction: column;
    }
  }
`;

export const UserHeaderStyles = styled.header`
  background-color: rgba(0, 0, 0, 0.08);

  .list {
    padding: 0;
    display: flex;
    gap: ${pxToRem(4)};
    height: ${pxToRem(80)};

    .list-item {
      display: flex;
      font-weight: 600;
      align-items: center;
      gap: ${pxToRem(10)};
      color: ${textDarkBlue};
      font-size: ${pxToRem(16)};
      max-width: ${pxToRem(300)};
      background-color: ${lightBlue};

      .list-item-number {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: ${textBlue};
        width: ${pxToRem(35)};
        height: ${pxToRem(35)};
        background-color: ${blue};
        border-radius: ${pxToRem(4)};
      }
    }
    .active {
      background-color: ${white};

      .active-item {
        background-color: ${darkBlue};
        color: ${white};
      }
    }
  }
`;
