import styled, { css } from "styled-components";
import { StatusIndicatorProps } from "./status-indicator";

const Container = styled.div<StatusIndicatorProps>`
  width: fit-content;
  height: 24px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  padding: 4px 8px;
  gap: 4px;
  border-radius: 8px;
  background: var(--second_bg);
  border: 1px solid var(--stroke);

  .badge {
    width: 6px;
    height: 6px;
    border-radius: 100%;
    ${(props) =>
      props.type === "new" &&
      css`
        background: var(--solid_sky);
      `}
    ${(props) =>
      props.type === "returned" &&
      css`
        background: var(--solid_yellow);
      `}
    ${(props) =>
      props.type === "Invited" &&
      css`
        background: var(--solid_green);
      `}
    ${(props) =>
      props.type === "repeated" &&
      css`
        background: var(--solid_blue);
      `}
    ${(props) =>
      props.type === "waiting" &&
      css`
        background: var(--solid_red);
      `}
    ${(props) =>
      props.type === "approved" &&
      css`
        background: var(--solid_green);
      `}
    ${(props) =>
      props.type === "pending" &&
      css`
        background: var(--solid_yellow);
      `}
    ${(props) =>
      props.type === "incomplete" &&
      css`
        background: var(--solid_yellow);
      `}
    ${(props) =>
      props.type === "rated" &&
      css`
        background: var(--solid_green);
      `}
    ${(props) =>
      props.type === "notCome" &&
      css`
        background: var(--solid_red);
      `}
    ${(props) =>
      props.type === "sent" &&
      css`
        background: var(--solid_green);
      `}
    ${(props) =>
      props.type === "paid" &&
      css`
        background: var(--solid_green);
      `}
    ${(props) =>
      props.type === "rejected" &&
      css`
        background: var(--solid_red);
      `}
  }
`;

export default Container;
