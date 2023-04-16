import { BigImageCardProps } from "./personal-info-card";
import styled from "styled-components";

const Container = styled.div<BigImageCardProps>`
  position: relative;
  width: 345px;
  display: grid;
  padding: 0px;
  gap: 16px;

  span {
    display: grid;
    justify-content: center;
  }

  .image-wrap {
    background: transparent;
    /* background: rgba(3, 3, 15, 0.1); */
    background: ${(props) => `url(${props.photo})`};
    backdrop-filter: blur(10px);

    .main-image {
      width: 100%;
      height: 260px;
    }
  }

  .button-wrap {
    display: grid;
    grid-auto-flow: column;
    gap: 8px;
  }
`;

export default Container;
