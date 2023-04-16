import styled from "styled-components";

const Container = styled.form`
  display: grid;
  gap: 16px;

  .check-wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`;

export default Container;
