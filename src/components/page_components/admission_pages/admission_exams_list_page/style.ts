import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 48px);
  display: grid;
  grid-template-rows: max-content;
  gap: 16px;

  .illustration-wrap {
    height: calc(100vh - 224px);
    display: grid;
    justify-items: center;
    align-items: center;
  }
`;

export default Container;
