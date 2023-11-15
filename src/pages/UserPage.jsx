import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import axios from "../config/axios";
import DisplayTable from "../components/user/DisplayTable";

function UserPage() {
  const gridRef = useRef(); // Optional - for accessing Grid's API

  const [allUser, setAllUser] = useState([]);

  console.log(allUser);

  // Each Column Definition results in one Column.
  const adGridColumnFormat = [
    { field: "id", headerName: "User ID", filter: true, flex: 1 },
    { field: "firstName", headerName: "LastName", filter: true, flex: 1 },
    { field: "lastName", headerName: "FirstName", filter: true, flex: 1 },
    { field: "email", headerName: "Email", filter: true, flex: 1 },
    // { field: "birthMonth", headerName: "Birth Month", filter: true },
    // { field: "birthDate", headerName: "Birth Date", filter: true },
    { field: "isActive", headerName: "Status", filter: true, flex: 1 },
    { field: "mobile", headerName: "Mobile", filter: true, flex: 1 },
    { field: "activeAt", headerName: "Active At", flex: 1 },
    { field: "expiredDate", headerName: "Expired Date", filter: true, flex: 1 },
    {
      field: "subscriptionId",
      headerName: "Subcription ID",
      filter: true,
      flex: 1,
    },
    { field: "customerId", headerName: "Customer ID", filter: true, flex: 1 },
    { field: "sessionId", headerName: "Session ID", filter: true, flex: 1 },
  ];

  useEffect(
    () => {
      // if (getAccessToken()) {
      axios.get("/admin/user").then((res) => {
        console.log(res);
        setAllUser(res.data);
      });
    },
    // }
    []
  );

  return (
    <div className="flex flex-col h-full p-6 gap-4">
      <DisplayTable
        columnFormat={adGridColumnFormat}
        data={allUser}
        domLayout="autoHeight"
      />
    </div>
  );
}

export default UserPage;
