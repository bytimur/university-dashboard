import { TextProviderOption } from "./text-provider";
import styled, { css } from "styled-components";

const Container = styled.span<TextProviderOption>`
  font-style: normal;
  color: ${(props) => (props.color ? `var(--${props.color})` : "main_bg")};

  // bold
  ${(props) =>
    props.textType.bold === "bold10|12" &&
    css`
      font-weight: 700;
      font-size: 10px;
      line-height: 12px;
    `}
  ${(props) =>
    props.textType.bold === "bold12|14" &&
    css`
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
    `}
  ${(props) =>
    props.textType.bold === "bold14|16" &&
    css`
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
    `}
  ${(props) =>
    props.textType.bold === "bold16|18" &&
    css`
      font-weight: 700;
      font-size: 16px;
      line-height: 18px;
    `}
  ${(props) =>
    props.textType.bold === "bold18|24" &&
    css`
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
    `}
  ${(props) =>
    props.textType.bold === "bold24|32" &&
    css`
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
    `}

//  medium
    ${(props) =>
    props.textType.medium === "medium10|12" &&
    css`
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
    `}
  ${(props) =>
    props.textType.medium === "medium12|14" &&
    css`
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
    `}
  ${(props) =>
    props.textType.medium === "medium14|16" &&
    css`
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    `}
  ${(props) =>
    props.textType.medium === "medium16|18" &&
    css`
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
    `}
  ${(props) =>
    props.textType.medium === "medium18|24" &&
    css`
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
    `}
  ${(props) =>
    props.textType.medium === "medium24|32" &&
    css`
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
    `} 
    
    // regular
    ${(props) =>
    props.textType.regular === "regular10|12" &&
    css`
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
    `}
  ${(props) =>
    props.textType.regular === "regular12|14" &&
    css`
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
    `}
  ${(props) =>
    props.textType.regular === "regular14|16" &&
    css`
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
    `}
  ${(props) =>
    props.textType.regular === "regular16|18" &&
    css`
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
    `}
  ${(props) =>
    props.textType.regular === "regular18|24" &&
    css`
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
    `}
  ${(props) =>
    props.textType.regular === "regular24|32" &&
    css`
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
    `}
`;

export default Container;
