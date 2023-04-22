import styled from "styled-components";
import { LoaderProps } from "./loader";

const Container = styled.div<LoaderProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};

  svg {
    animation: rotating 1.5s linear infinite;
  }
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export default Container;
