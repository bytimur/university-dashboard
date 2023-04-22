import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 48px);
  display: grid;
  gap: 24px;

  .main-wrap {
    display: grid;
    gap: 24px;
    overflow-y: scroll;

    .university-titler {
      max-width: 720px;
      display: grid;
      grid-auto-flow: column;
      justify-content: start;
      align-items: center;
      gap: 16px;
    }

    .university-photo-wrap {
      display: grid;
      gap: 16px;

      .photo-titler {
        display: grid;
        grid-auto-flow: column;
        justify-content: space-between;
      }

      .univer-image {
        width: 100%;
        height: 400px;
        border-radius: 8px;
        object-fit: cover;
      }
    }

    .main-info-about-univer-wrap {
      display: grid;
      gap: 16px;

      .main-info-content {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 24px;

        .main-info-content-descript {
          display: grid;
          gap: 24px;

          .button-link {
            display: grid;
            grid-auto-flow: column;
            justify-content: start;
            gap: 8px;
          }
        }
      }
    }

    .faculty-wrap {
      display: grid;
      gap: 16px;
    }
  }
`;

export default Container;
