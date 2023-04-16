import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: calc(100vh - 48px);
  grid-auto-rows: auto auto 1fr;
  gap: 24px;

  .header {
    display: grid;
    gap: 2px;
  }

  .bid-wrap {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    .score-and-notification-wrap {
      display: grid;
      grid-template-rows: max-content;
      gap: 16px;

      .total-score-wrap {
        height: fit-content;
        display: grid;
        grid-auto-flow: column;
        gap: 8px;
      }
    }
  }

  .table-wrap {
    height: 250px;
    display: grid;
    overflow: hidden;
    border-radius: 16px;
  }
`;

export default Container;
