import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: grid;
  justify-content: end;
  height: 36px;

  .action-bar-wrap {
    position: absolute;
    top: 36px;
    right: 0px;
    z-index: 1;
  }
`;

export default Container;
