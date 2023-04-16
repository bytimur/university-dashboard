import styled, { css } from "styled-components";

const Container = styled.button`
  cursor: pointer;
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;

  span {
    z-index: 1;
  }

  .background {
    position: absolute;
    width: 100%;
    height: 36px;
    border-radius: 4px;
    background: var(--second_bg);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

export default Container;

/* ${(props) =>
    props.isActive &&
    css`
      background: var(--second_bg);
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    `} */
