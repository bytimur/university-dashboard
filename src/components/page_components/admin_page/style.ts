import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 48px);
  display: grid;
  gap: 24px;
  grid-auto-rows: auto 1fr;

  .faculty-list-wrap {
    display: grid;
    align-content: flex-start;
    overflow: scroll;
    gap: 16px;
  }

  .illustration-car-wrap {
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

export default Container;
