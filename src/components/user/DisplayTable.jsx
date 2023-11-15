import React from "react";
import { AgGridReact } from "ag-grid-react";

export default function DisplayTable({ columnFormat, data }) {
  const gridOptions = {
    defaultColDef: {
      resizable: true,
      flex: 1,
    },
    columnDefs: columnFormat,
    rowData: null,
  };
  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 700, width: "auto", paddingRight: 20 }}
    >
      <AgGridReact
        rowData={data}
        gridOptions={gridOptions}
        // domLayout="autoHeight"
        colResizeDefault="shift"
      ></AgGridReact>
    </div>
  );
}
