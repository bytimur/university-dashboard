import { TableColWidths } from "./table";

export const getTableColWidth = (
  width: TableColWidths
): React.CSSProperties | undefined => {
  if (width == "fit") {
    return {
      width: "1%",
      whiteSpace: "nowrap",
    };
  } else if (width == undefined) {
    return undefined;
  } else {
    return {
      width: `${width}px`,
    };
  }
};
