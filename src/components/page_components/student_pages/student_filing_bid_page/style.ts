import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: calc(100vh - 48px);
  grid-template-rows: auto 1fr;
  overflow-y: scroll;
  gap: 24px;

  .content-wrap {
    display: grid;
    gap: 24px;
    grid-auto-flow: column;
    grid-template-columns: 1fr auto;

    .bid-info-card-wrap {
      display: grid;
      gap: 24px;
    }

    .bid-image-card-wrap {
      height: fit-content;
      display: grid;
      gap: 16px;

      .bid-image-card-content {
        display: grid;
        gap: 8px;
      }
    }
  }
`;

export default Container;
