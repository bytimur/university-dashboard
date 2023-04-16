import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  display: grid;
  align-items: center;
  padding: 16px;
  gap: 16px;
  border-radius: 16px;
  border: 1px solid var(--stroke);
  background: var(--second_bg);

  .header {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr auto;
  }

  .button-wrap {
    display: grid;
    justify-content: center;
  }
`;

export default Container;
