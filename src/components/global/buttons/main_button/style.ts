import { MainButtonProps } from "./main-button";
import styled, { css } from "styled-components";

const Container = styled.button<MainButtonProps>`
  width: ${(props) =>
    `${
      props.options?.width !== "100%"
        ? `${
            props.options?.width ? `${props.options?.width}px` : "fit-content"
          }`
        : "100%"
    }`};
  height: 44px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: max-content;
  align-items: center;
  justify-content: center;
  padding: 13px 16px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--stroke);
  background: var(--static_white100);

  ${(props) =>
    props.options?.type === "fill" &&
    css`
      border: 1px solid var(--main_text);
      background: var(--static_primary_solid);
    `}
`;

export default Container;
