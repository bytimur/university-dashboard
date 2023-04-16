import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  padding: 16px;
  gap: 16px;
  border-radius: 16px;
  background: var(--main_bg);
  border: 1px solid var(--stroke);

  .header {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr auto;

    .titler {
      display: grid;
      gap: 4px;
    }
  }

  .bid-info-wrap {
    display: grid;
    gap: 10px;
    padding: 16px;
    border-radius: 8px;
    background: var(--second_bg);

    .bid-info-content {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 1fr auto;
    }
  }
`;

export default Container;
