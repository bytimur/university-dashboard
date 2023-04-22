import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 48px);
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 24px;

  .tabbar-wrap {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
  }

  .table-wrap {
    height: calc(100vh - 190px);
  }

  .illustration-car-wrap {
    display: grid;
    justify-items: center;
    align-items: center;
  }
`;

export default Container;
