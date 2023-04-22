import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: calc(100vh - 48px);
  grid-auto-rows: auto 1fr;

  gap: 24px;

  .student-main-page-content-wrap {
    display: grid;
    gap: 24px;
    overflow-y: scroll;

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
          justify-content: start;
          gap: 8px;
        }
      }
    }

    .table-wrap {
      height: calc(100vh - 470px);
      display: grid;
      overflow: hidden;
      border-radius: 16px;
    }
  }

  .illustration-car-wrap {
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

export default Container;
