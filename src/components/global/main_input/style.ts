import styled from "styled-components";

import { InputStyleProps } from "./input";

const Container = styled.div<InputStyleProps>`
  position: relative;
  display: grid;
  width: 100%;
  gap: 8px;

  label {
    padding: 0 16px;
  }

  .input_container {
    display: grid;
    grid-template-columns: 1fr auto;
    width: 100%;
    height: 44px;
    border-radius: 8px;
    background-color: var(--main_bg);
    border: 1px solid var(--stroke);
    overflow: hidden;

    input {
      width: 100%;
      height: 100%;
      font-size: 14px;
      color: var(--main_text);
      padding: 0 16px;
      ::placeholder {
        color: var(--second_text);
      }
    }
    .adder {
      z-index: 1;
      cursor: pointer;
      width: 100%;
      height: 100%;
      padding-right: 16px;
      line-height: 44px;
      color: var(--gray60);
    }
    .password_eye {
      height: 100%;
      display: grid;
      align-items: center;
      z-index: 1;
      padding-right: 16px;
    }
  }

  .error_message {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 4px;
    padding-left: 8px;
  }
`;

export default Container;
