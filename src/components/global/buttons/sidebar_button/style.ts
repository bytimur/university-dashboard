import styled, { css } from "styled-components";

type Iprops = {
  isActive: boolean;
};

const Container = styled.button<Iprops>`
  width: 100%;
  height: 44px;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 13px 24px;
  gap: 8px;
  background: var(--main_text);
  border-left: 4px solid var(--main_text);
  ${(props) =>
    props.isActive &&
    css`
      background: var(--stroke);
      border-left: 4px solid var(--static_primary_solid);
    `}

  .left-side {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: max-content;
    gap: 4px;
  }
  .right-side {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: max-content;
    align-items: center;
    gap: 8px;
  }
`;

export default Container;
