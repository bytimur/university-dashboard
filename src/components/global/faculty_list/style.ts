import styled from "styled-components";

const Container = styled.div`
  display: grid;

  .faculty-list-header {
    height: 48px;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr auto;
    padding: 8px 0px;
    gap: 16px;
    border-bottom: 1px solid var(--main_text);

    .button {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: max-content;
      align-items: center;
      gap: 8px;
    }

    .student-quantity {
      display: grid;
      justify-content: end;
    }
  }

  .direction-list-wrap {
    height: 48px;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr auto;
    align-items: center;
    border-bottom: 1px solid var(--stroke);

    .direction-list-info-wrap {
      display: grid;
      grid-auto-flow: column;
    }

    .direction-list-info-content {
      display: grid;
      padding: 0px 8px;
    }
  }
`;

export default Container;
