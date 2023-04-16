import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid var(--solid_green);

  .header {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    gap: 8px;
  }
`;

export default Container;
