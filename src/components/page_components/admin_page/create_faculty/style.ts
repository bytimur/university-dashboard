import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 48px);
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 24px;

  .create-faculty-content-wrap {
    display: grid;
    grid-auto-flow: column;
    gap: 24px;

    .form-wrap {
      height: fit-content;
      display: grid;
      gap: 8px;
    }

    .faculty-card-wrap {
      position: relative;
      align-content: flex-start;
      display: grid;
      gap: 16px;

      .card-content {
        height: calc(100vh - 144px);
        display: grid;
        overflow-y: scroll;
        gap: 16px;
      }

      .faculty-card-header {
        position: sticky;
        display: grid;
        grid-auto-flow: column;
        gap: 16px;
        grid-template-columns: auto 1fr;

        .add-button {
          width: fit-content;
          display: grid;
          grid-auto-flow: column;
          align-items: center;
          gap: 8px;
        }
      }
    }
  }
`;

export default Container;
