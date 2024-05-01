import styled from "styled-components";
import { colors } from "../../constants/colors";
import { pxToRem } from "../../utils";
const { yellow, white, black, darkBlue } = colors;

export const BookDetailStyle = styled.div`
  .book-info-container {
    min-width: fit-content;
    width: 100%;
    display: flex;
    gap: ${pxToRem(40)};
    height: fit-content;

    .book-image {
      width: 35%;

      img {
        width: 100%;
        /* height: 100%; */
        object-fit: cover;
      }
    }
    .book-info {
      width: 65%;

      .book-info-name {
        font-size: ${pxToRem(16)};
        display: flex;
        gap: ${pxToRem(15)};
        color: ${yellow};
      }
      .book-info-rate {
        font-size: inherit;
        display: flex;
        align-items: center;
        gap: ${pxToRem(5)};
      }
      .about-book-container {
        padding: ${pxToRem(20)} ${pxToRem(0)};
        display: flex;
        flex-direction: column;
        gap: ${pxToRem(10)};

        .page-size {
          display: flex;
          gap: ${pxToRem(10)};
          font-size: ${pxToRem(20)};
          color: ${white};

          p {
            font-size: inherit;
            opacity: 0.6;
          }
        }
      }
      .book-information {
        display: flex;
        align-items: center;
        width: 100%;
        gap: ${pxToRem(20)};
        margin: ${pxToRem(30)} ${pxToRem(0)};

        p {
          text-wrap: nowrap;
          font-size: ${pxToRem(16)};
          color: ${yellow};
        }
        .line {
          width: 100%;
          height: ${pxToRem(2)};
          border: 1px solid ${yellow};
        }
      }
      .format {
        margin: ${pxToRem(40)} ${pxToRem(0)};
        color: ${yellow};
      }
      .shelf-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .shelf-books {
          display: flex;
          gap: ${pxToRem(20)};

          .shelf-book {
            text-align: center;

            p {
              color: ${white};
            }
            .line-height {
              line-height: ${pxToRem(35)};
            }
          }
        }
      }
    }
  }
  .book-info-tab-container {
    width: fit-content;
    padding: ${pxToRem(50)} ${pxToRem(0)};
  }
`;

export const QuoteCard = styled.div`
  width: 100%;
  padding: ${(pxToRem(20), pxToRem(50))};
  border-radius: ${pxToRem(15)};
  background-color: rgba(22, 22, 22, 1);
  position: relative;
  min-height: ${pxToRem(200)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    top: ${pxToRem(-15)};
    left: ${pxToRem(25)};
    position: absolute;
  }
  .content {
    font-size: ${pxToRem(16)};
    color: white;
    line-height: 30px;
  }
  .icon-wrapper {
    display: flex;
    justify-content: end;
    gap: ${pxToRem(10)};

    svg {
      color: white;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${pxToRem(50)} ${pxToRem(0)};

  p {
    cursor: pointer;
    font-size: ${pxToRem(25)};
  }
`;

export const DetailCardWrapper = styled.div`
  display: flex;
  gap: 20px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CreateBookStyle = styled.div`
  .create-book-container {
    display: flex;
    flex-direction: row;
    height: 100vh;

    .create-book-image {
      height: 100%;
      background-color: #f3f3f3;
      padding: ${pxToRem(40)} ${pxToRem(20)};
      display: flex;
      justify-content: center;
      align-items: center;

      .image-container {
        min-width: ${pxToRem(300)};
        display: flex;
        flex-direction: column;
        gap: ${pxToRem(20)};

        .image-name {
          font-size: ${pxToRem(24)};
          color: ${black};
          font-weight: 900;
        }
      }
    }
    .create-button {
      min-width: ${pxToRem(300)};
      background-color: ${darkBlue};
      height: ${pxToRem(46)};
    }
    .form-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: ${pxToRem(40)} ${pxToRem(20)};

      .form-title {
        font-size: ${pxToRem(36)};
        font-weight: 900;
        color: ${black};
      }
      form {
        width: ${pxToRem(500)};
        display: flex;
        flex-direction: column;
        gap: ${pxToRem(20)};
      }
    }
  }
  .column {
    flex-direction: column;
  }
  .w-100 {
    width: 100%;
  }
  .w-50 {
    width: 50%;
  }
`;
