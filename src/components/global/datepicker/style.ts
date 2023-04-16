import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Container = styled.div`
  height: 44px;

  input {
    display: grid;
    width: 100%;
    height: 44px;
    border-radius: 8px;
    background: var(--main_bg);
    border: 1px solid var(--stroke);
    padding-left: 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

    ::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 14px;
      color: var(--second_text);
    }
  }
`;
