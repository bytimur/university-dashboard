export type TableProps = {
  headings: TableHeadingType[];
  row: (data: any) => TableRowType[];
  data: Object[];
};

export type TableHeadingType = {
  text: string;
  width?: TableColWidths;
};

export type TableRowType = {
  render?: any;
};

export type TableColWidths = "fit" | number | undefined;

export type TableOptionsReturn = {};
