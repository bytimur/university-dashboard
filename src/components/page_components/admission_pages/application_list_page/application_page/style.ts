import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 48px);
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 24px;

  .tabbar-wrap {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
  }

  .application-page-content-wrap {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr auto;
    align-content: flex-start;
    gap: 24px;
    overflow: scroll;

    .content-personal-info {
      display: grid;
      gap: 24px;
    }

    .image-file-wrap {
      height: fit-content;
      display: grid;
      gap: 16px;

      .image-file-content-wrap {
        display: grid;
        gap: 8px;
      }
    }
  }
`;

export default Container;
