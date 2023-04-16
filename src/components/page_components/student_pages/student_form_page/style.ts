import styled from "styled-components";

const Container = styled.form`
  display: grid;
  height: calc(100vh - 48px);
  grid-template-rows: auto 1fr;
  overflow-y: scroll;
  gap: 24px;

  .content-wrap {
    display: grid;
    grid-auto-flow: column;
    gap: 24px;

    .personal-info-wrap {
      display: grid;
      height: fit-content;
      gap: 24px;
      .part-wrapper {
        display: grid;
        gap: 16px;

        .input-wrapper {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
      }
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
