import { TabBarProps } from "./tab-bar.d";
import styled, { css } from "styled-components";

type IProps = {
  isActive: boolean;
};

const Container = styled.div<IProps>`
  cursor: pointer;
  width: 100%;
  height: 44px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: max-content;
  align-items: center;
  padding: 13px 16px;
  gap: 8px;
  border-bottom: 1px solid var(--stroke);

  ${(props) =>
    props.isActive &&
    css`
      border-bottom: 1px solid var(--main_text);
    `}
`;

export default Container;
