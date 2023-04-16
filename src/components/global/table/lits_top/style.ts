import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  gap: 8px;
  border-right: 1px solid var(--stroke);

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default Container;
