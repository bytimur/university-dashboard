import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 4px;
  width: 100%;

  .error {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 4px;
    padding-left: 8px;
  }
`;

export const InputLabel = styled.label`
  pointer-events: none;
  position: absolute;
  top: 22px;
  left: 16px;
  transform: translateY(-50%);
  transition: all 0.3s ease-in-out;
  color: var(--second_text);
`;

export const InputField = styled.input<{ isFilled: boolean }>`
  width: 100%;
  height: 44px;
  background-color: transparent;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  padding: 19px 16px 8px 16px;
  border-radius: 8px;
  border: 1px solid var(--stroke);
  background: var(--main_bg);

  &:valid + ${InputLabel}, &:focus + ${InputLabel} {
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    top: 6px;
    transform: translateY(0%);
    color: var(--second_text);
  }
`;
