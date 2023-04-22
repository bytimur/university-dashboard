import styled from "styled-components";

const Container = styled.div`
  display: grid;
  gap: 4px;

  .date-input-container {
    position: relative;
    display: grid;
    grid-auto-flow: column;
    padding-left: 16px;
    height: 44px;
    border-radius: 8px;
    background: var(--main_bg);
    border: 1px solid var(--stroke);

    input {
      width: 100%;
      height: 100%;
      ::placeholder {
        font-size: 14px;
        color: var(--second_text);
      }
    }

    input[type="date"] {
      ::placeholder {
        color: var(--second_text);
      }
      ::-webkit-calendar-picker-indicator {
        opacity: 0;
        position: absolute;
        right: 12px;
        top: 12px;
        width: 18px;
        height: 18px;
        z-index: 1;
        cursor: pointer;
      }
      border: none;
      outline: none;
      padding-right: 15px;
      font-size: 14px;
      font-weight: 500;
      color: var(--main_text);
    }

    .input-icon-wrap {
      position: absolute;
      right: 14px;
      top: 12px;
    }
  }

  .eror-message {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    align-items: center;
    padding-left: 8px;
    gap: 4px;
  }
`;

export default Container;
