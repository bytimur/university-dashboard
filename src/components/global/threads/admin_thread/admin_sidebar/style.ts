import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-right: 24px;
  border-radius: 32px;
  background: var(--main_text);
  overflow: hidden;

  .sidebar-nav {
    display: grid;
    grid-template-rows: max-content;
    gap: 24px;
  }

  .sidebar-button-wrap {
    display: grid;
    grid-template-rows: max-content;
  }
`;

export default Container;
