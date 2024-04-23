import styled from "styled-components";
import { colors } from "../../constants/colors";
import { pxToRem } from "../../utils";
const { yellow, white, dark } = colors;

export const BookDetailStyle = styled.div`
  
`;
export const QuoteCard = styled.div`
  width: 100%;
  padding: ${(pxToRem(20), pxToRem(50))};
  /* border: 1px solid red; */
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
