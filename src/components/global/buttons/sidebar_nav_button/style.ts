import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--stroke);

  .nav-titler {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 8px;
    padding: 24px 0px 24px 24px;
    cursor: pointer;

    .image {
      width: 48px;
      height: 48px;
      border-radius: 100px;
    }

    .content {
      height: fit-content;
      display: grid;
      grid-auto-flow: row;
      gap: 4px;

      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .nav-button {
    display: grid;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 36px 36px 36px 0px;
  }
`;

export default Container;
