import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  gap: 16px;

  .filling_bid_card_wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 16px;
    border-radius: 16px;
    background: var(--main_bg);
    border: 1px solid var(--stroke);

    .info-card-item-wrap {
      height: fit-content;
      display: grid;
      gap: 2px;
    }
  }
`;

export default Container;
