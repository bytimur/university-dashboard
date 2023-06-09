import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 48px);
  display: grid;
  grid-template-rows: max-content;
  overflow-y: scroll;
  gap: 24px;

  .faculty-content-wrap {
    display: grid;
    gap: 16px;
  }

  .illustration-wrap {
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

export default Container;
