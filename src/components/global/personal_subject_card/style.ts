import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 44px;
  display: grid;
  align-items: center;
  padding: 7px 16px;
  gap: 8px;
  border-radius: 8px;
  background: var(--main_bg);
  border: 1px solid var(--stroke);

  .titler-wrap {
    display: grid;
    gap: 2px;
  }
`;

export default Container;
