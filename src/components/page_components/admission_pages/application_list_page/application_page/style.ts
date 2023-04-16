import styled from "styled-components";

const Container = styled.div`
  display: grid;
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
    gap: 24px;

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
