import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 48px);
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 24px;

  .info-wrap {
    display: grid;
    grid-template-rows: auto auto 1fr;
    overflow: scroll;
    gap: 24px;

    .score-wrap {
      display: grid;
      grid-auto-flow: column;
      gap: 8px;
    }
  }
`;

export default Container;
