import styled from "styled-components";

const Container = styled.button`
  height: 32px;
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  padding: 0px 0px 0px 8px;
  gap: 8px;
  border-bottom: 1px solid var(--stroke);
`;

export default Container;
