import styled from "styled-components";
import { pxToRem } from "../../../utils";
import { colors } from "../../../constants/colors";
const { lightBlue, textDarkBlue, darkBlue, textBlack } = colors;

export const AccountStyles = styled.div`
  .account-container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: ${pxToRem(80)};
    padding: ${pxToRem(50)} ${pxToRem(80)};

    .avatar-wrapper {
      width: ${pxToRem(200)};
      height: ${pxToRem(200)};
      position: relative;

      .avatar {
        width: inherit;
        height: inherit;
        font-size: ${pxToRem(64)};
        cursor: pointer;
      }
      .camera {
        cursor: pointer;
        width: ${pxToRem(50)};
        height: ${pxToRem(50)};
        position: absolute;
        bottom: ${pxToRem(0)};
        right: ${pxToRem(0)};
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${lightBlue};
        border-radius: ${pxToRem(8)};
        box-shadow: 1px 3px 3px gray;

        img {
          width: ${pxToRem(35)};
        }
      }
    }
    form {
      max-width: ${pxToRem(1200)};
      width: 100%;
      min-width: ${pxToRem(500)};
      padding: ${pxToRem(50)} ${pxToRem(0)};
      display: flex;
      flex-direction: column;
      gap: ${pxToRem(20)};

      .input-wrapper {
        width: 100%;

        .input-label {
          color: ${textDarkBlue};
          margin-bottom: ${pxToRem(10)};
        }
      }
      .save-changes-button {
        display: flex;
        align-items: end;
        justify-content: end;
        height: ${pxToRem(100)};

        button {
          width: ${pxToRem(150)};
          height: ${pxToRem(45)};
          background-color: ${darkBlue};
        }
      }
      .form-title {
        font-size: ${pxToRem(18)};
        color: ${textBlack};
      }
    }
  }
  .column {
    flex-direction: column;
  }
`;
