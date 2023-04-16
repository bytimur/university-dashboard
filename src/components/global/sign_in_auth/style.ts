import styled from "styled-components";

const Container = styled.form`
  max-width: 350px;
  display: grid;
  gap: 24px;

  .tabbar-changer-wrap {
    height: 44px;
    display: grid;
    grid-auto-flow: column;
    padding: 0px 4px;
    border-radius: 8px;
    background: var(--main_bg);
    border: 1px solid var(--stroke);
  }

  .titler {
    display: grid;
    align-items: center;
    justify-items: center;
  }

  .input-wrap {
    display: grid;
    gap: 8px;

    .input-cont {
      position: relative;

      .icon {
        position: absolute;
        top: 5px;
        right: 5px;
      }
    }
  }

  .forget-password {
    display: grid;
    justify-content: end;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--second_text);
  }

  .registration-text {
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    gap: 8px;
  }
`;

export default Container;
