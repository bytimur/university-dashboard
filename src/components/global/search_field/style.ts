import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 44px;
  display: grid;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--stroke);
  background: var(--main_bg);

  input {
    width: 100%;
    height: 100%;
    padding: 0px 16px 0px 42px;

    ::placeholder {
      text-justify: center;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: var(--second_text);
    }
  }

  .icon {
    position: absolute;
    left: 16px;
    top: 13px;
  }
`;

export default Container;
