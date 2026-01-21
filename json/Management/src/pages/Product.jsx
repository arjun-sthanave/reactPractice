// import React, { useEffect, useState } from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

// import { getUser, getUserByid } from "../services/userService"; // adjust path
import { useEffect, useState } from "react";
import { getProduct } from "../services/productService";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const User = () => {
  const [rowData, setRowData] = useState([]);
  const [colDefs] = useState([
  { field: "title", flex: 1 },
  { field: "category", flex: 1 },
  { field: "price", flex: 1 },
  { field: "returnPolicy", flex: 1 },
]);

  useEffect(() => {
    const loadProduct = async () => {
      const data = await getProduct()  
      setRowData(data);                    
    };

    loadProduct();
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        pagination={true}
        paginationPageSize={10}
        theme="legacy"
      />
    </div>
  );
};

export default User;
