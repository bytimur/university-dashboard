import styled from "styled-components";

const Container = styled.form`
  width: 350px;
  display: grid;
  gap: 24px;

  .titler {
    display: grid;
    align-items: center;
    justify-items: center;
  }

  .input-wrap {
    display: grid;
    gap: 8px;

    .input-code-wrap {
      display: grid;
      grid-auto-flow: column;
      gap: 8px;
    }
  }

  .button-wrap {
    display: grid;
    grid-auto-flow: column;
    gap: 8px;
  }
`;

export default Container;
