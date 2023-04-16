import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  display: grid;
  gap: 8px;
  padding: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  background: var(--second_bg);

  .action-group {
    display: grid;
    border-radius: 8px;
    background: var(--main_bg);

    button:nth-last-child(1) {
      border: none;
    }
  }
`;

export default Container;
