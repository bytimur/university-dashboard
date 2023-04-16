import styled from "styled-components";
import { SelectStyleProps } from "./select";

const Container = styled.div<SelectStyleProps>`
  width: 100% !important;
  position: relative;
  display: grid;
  gap: 8px;

  label {
    padding: 0 16px;
  }

  .react-select-container {
    .react-select__control {
      min-height: 44px;
      background-color: var(--main_bg);
      border: 1px solid var(--stroke);
      outline: none !important;
      border-radius: 8px;
    }
    .react-select__control--is-focused {
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
    }

    .react-select__input-container {
      margin: 0;
      color: var(--main_text);
    }
    .react-select__input {
      color: var(--main_text) !important;
    }
    .react-select__value-container {
      width: 100%;
      padding: 0 0 0 16px;
      margin: 8px 8px 8px 0;
    }
    .react-select__single-value {
      color: var(--main_text) !important;
    }

    .react-select__indicators {
      padding-right: 16px;
    }
    .react-select__indicator-separator {
      display: none;
    }

    .react-select__multi-value {
      max-width: 250px;
      background-color: var(--stroke);
      .react-select__multi-value__label {
        color: var(--main_text);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      .react-select__multi-value__remove {
        svg {
          fill: var(--text);
        }
        :hover {
          background: var(--static_red);
          svg {
            fill: var(--static_white);
          }
        }
      }
    }
    .react-select__placeholder {
      font-size: 14px;
      color: var(--second_text);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .react-select__menu {
      z-index: 10;
      background-color: var(--main_bg);
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid var(--stroke);
      outline: none;
      box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1);

      .react-select__menu-list {
        /* width */
        ::-webkit-scrollbar {
          width: 5px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: var(--transparent);
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: var(--gray30);
          border-radius: 5px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: var(--gray60);
        }
      }
    }
  }

  .custom-option {
    cursor: pointer;
    height: 44px;

    .option_wrapper {
      height: 100%;
      display: grid;
      gap: 16px;
      grid-auto-flow: column;
      justify-content: space-between;
      align-items: center;
      margin-left: 16px;
      padding-right: 16px;
      border-bottom: 1px solid var(--stroke);
    }

    .option--last {
      border: none;
    }

    span {
      font-size: 17px;
      font-weight: 400;
      color: var(--text);
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    :hover {
      background-color: var(--static_blue10);
    }
  }

  .option--disabled {
    cursor: inherit;
    background-color: var(--stroke);
    :hover {
      background-color: var(--stroke);
    }
  }

  .no-options {
    width: 100%;
    height: 44px;
    text-align: center;
    line-height: 44px;
    font-size: 17px;
    font-weight: 500;
    color: var(--gray30);
  }

  .error_message {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    gap: 8px;
  }
`;

export default Container;
