import React from "react";
import { TableProps } from "./table";
import LitsTop from "./lits_top";
import Container from "./style";
import { getTableColWidth } from "./table-options";

const Table = (props: TableProps) => {
  const { headings, row, data } = props;

  const map_headings = headings.map((item, index) => (
    <th key={index} style={getTableColWidth(item.width)}>
      <LitsTop title={item.text} />
    </th>
  ));

  const map_footers = headings.map((_, index) => <td key={index} />);

  return (
    <Container {...props}>
      <table>
        <thead>
          <tr>{map_headings}</tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {row(item).map((rowItem, rowIndex) => (
                <td
                  key={rowIndex}
                  title={
                    typeof rowItem.render === "string"
                      ? rowItem.render
                      : undefined
                  }
                >
                  {rowItem.render}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>{map_footers}</tr>
        </tfoot>
      </table>
    </Container>
  );
};

export default Table;
