import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: calc(100vh - 48px);
  grid-template-rows: auto auto 1fr;
  gap: 24px;

  .tabbar-wrap {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
  }
`;

export default Container;
