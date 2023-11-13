import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import axios from "../config/axios";
import DisplayTable from "../components/user/DisplayTable";

function UserPage() {
  const gridRef = useRef(); // Optional - for accessing Grid's API

  const [allUser, setAllUser] = useState([]);

  // Each Column Definition results in one Column.
  const adGridColumnFormat = [
    { field: "id", headerName: "User ID", filter: true },
    { field: "firstName", headerName: "LastName", filter: true },
    { field: "lastName", headerName: "FirstName", filter: true },
    { field: "email", headerName: "Email", filter: true },
    // { field: "birthMonth", headerName: "Birth Month", filter: true },
    // { field: "birthDate", headerName: "Birth Date", filter: true },
    { field: "isActive", headerName: "Status", filter: true },
    { field: "mobile", headerName: "Mobile", filter: true },
    { field: "activeAt", headerName: "Active At", filter: true },
    { field: "expiredDate", headerName: "Expired Date", filter: true },
    { field: "subscriptionId", headerName: "Subcription ID", filter: true },
    { field: "customerId", headerName: "Customer ID", filter: true },
    { field: "sessionId", headerName: "Session ID", filter: true },
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
      <DisplayTable columnFormat={adGridColumnFormat} data={allUser} />
    </div>
  );
}

export default UserPage;
