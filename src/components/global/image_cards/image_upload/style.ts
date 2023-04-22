import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: fit-content;
  display: grid;
  padding: 8px;
  gap: 8px;
  border-radius: 16px;
  border: 1px solid var(--stroke);
  background: var(--main_bg);

  .card-content-wrap {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    gap: 8px;

    .image-content-wrap {
      display: grid;
      gap: 4px;

      .image-wrap {
        width: 100px;
        height: 80px;
        border-radius: 8px;
        overflow: hidden;
        background: transparent;
        background: var(--static_white100);
        backdrop-filter: blur(10px);
        border: 1px solid var(--stroke);

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .error-image {
        display: grid;
        grid-auto-flow: column;
        justify-content: start;
        align-items: center;
        gap: 4px;
      }
    }

    .card-titler-wrap {
      height: fit-content;
      display: grid;
      grid-auto-flow: row;
      gap: 4px;
    }
  }

  .input-container {
    position: relative;
    width: 100%;
    height: 44px;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    padding: 13px 16px;
    gap: 8px;
    gap: 10px;
    background: var(--second_bg);
    border: 1px solid var(--stroke);
    border-radius: 8px;

    input[type="file"] {
      width: 100%;
      margin: 0;
      position: absolute;
      overflow: hidden;
      color: rgba(0, 0, 0, 0);
    }

    input::-webkit-file-upload-button {
      visibility: hidden;
      color: white;
    }
  }

  .placeholder {
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

export default Container;
