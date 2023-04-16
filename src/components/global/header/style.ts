import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 16px;

  .titler-wrap {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    gap: 16px;

    .titler {
      display: grid;
      gap: 2px;
    }
  }

  .button-wrap {
    display: grid;
    grid-auto-flow: column;
    gap: 8px;
  }
`;

export default Container;
