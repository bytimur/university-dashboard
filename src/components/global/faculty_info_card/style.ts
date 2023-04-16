import styled from "styled-components";

const Container = styled.div`
  display: grid;
  padding: 16px;
  gap: 16px;
  border-radius: 16px;
  background: var(--main_bg);
  border: 1px solid var(--stroke);

  .faculty-info-card-header {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;

    .link-button {
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      justify-content: start;
      gap: 8px;
    }
  }
`;

export default Container;
