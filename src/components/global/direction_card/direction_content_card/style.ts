import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 8px;

  .direction-info-wrap {
    height: fit-content;
    display: grid;
    gap: 10px;
    padding: 16px;
    border-radius: 8px;
    background: var(--second_bg);

    .info {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: 10px;
    }
  }
`;

export default Container;
