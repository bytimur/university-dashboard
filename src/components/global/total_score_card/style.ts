import styled from "styled-components";

const Container = styled.div`
  width: 125px;
  height: 44px;
  display: grid;
  grid-template-rows: max-content;
  align-items: center;
  gap: 2px;
  padding: 7px 16px;
  border-radius: 8px;
  background: var(--main_bg);
  border: 1px solid var(--stroke);

  span {
    max-width: 90px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default Container;
