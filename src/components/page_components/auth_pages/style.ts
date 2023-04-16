import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 48px);
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto;
  gap: 16px;

  .illustration-wrap {
    display: grid;
    justify-items: center;
    align-items: center;
    background: var(--main_bg);
  }

  .auth-wrap {
    display: grid;
    justify-items: center;
    align-items: center;
    padding: 0px 96px 0 96px;
  }
`;

export default Container;
