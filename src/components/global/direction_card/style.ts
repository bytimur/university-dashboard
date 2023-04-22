import styled from "styled-components";

const Container = styled.div`
  height: fit-content;
  display: grid;
  grid-template-rows: max-content;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid var(--stroke);
  background: var(--main_bg);

  .direction-content {
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

export default Container;
