import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 16px;

  .direction-button {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 8px;
  }
`;

export default Container;
