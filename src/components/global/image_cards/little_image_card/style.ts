import styled from "styled-components";

const Container = styled.div`
  max-width: 300px;
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

    .image {
      width: 100px;
      height: 80px;
      object-fit: cover;
      border-radius: 8px;
      border: 1px solid var(--stroke);
    }

    .card-titler-wrap {
      height: fit-content;
      display: grid;
      grid-auto-flow: row;
      gap: 4px;
    }
  }
`;

export default Container;
