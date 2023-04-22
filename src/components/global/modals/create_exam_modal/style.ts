import styled from "styled-components";

const Container = styled.form`
  display: grid;
  gap: 16px;

  .input-content-wrap {
    height: fit-content;
    display: grid;
    gap: 8px;

    .check-wrap {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }
  }
`;

export default Container;
