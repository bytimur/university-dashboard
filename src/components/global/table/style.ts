import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100%;
  overflow-y: scroll;

  table {
    height: fit-content;
    border-spacing: 0;
  }
  thead {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  th {
    padding: 16px 8px 18px 0px;
    text-align: start;
    background: var(--second_bg);
    border-bottom: 2px solid var(--main_text);
  }

  td {
    width: fit-content;
    padding: 8px 8px 8px 0px;
    border-bottom: 1px solid var(--stroke);
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
  }

  tr {
    th:nth-child(1),
    td:nth-child(1) {
      padding-left: 16px;
    }
    th:nth-last-child(1),
    td:nth-last-child(1) {
      padding-right: 16px;
    }
  }
`;

export default Container;
