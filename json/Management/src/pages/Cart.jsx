import React, { useEffect, useState } from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { getAllCartProducts } from "../services/carServices";

ModuleRegistry.registerModules([AllCommunityModule]);

const Cart = () => {
  const [rowData, setRowData] = useState([]);

  const [colDefs] = useState([
    { field: "cartId", headerName: "Cart ID", flex: 1 },
    { field: "userId", headerName: "User ID", flex: 1 },
    { field: "productId", headerName: "Product ID", flex: 1 },
    { field: "title", headerName: "Product", flex: 2 },
    { field: "price", flex: 1 },
    { field: "quantity", flex: 1 },
    { field: "total", flex: 1 },
    { field: "discountedTotal", headerName: "Discounted", flex: 1 },
  ]);

  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1,
  };

  useEffect(() => {
    const data = getAllCartProducts(); // array
    setRowData(data);
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={10}
        theme="legacy"
      />
    </div>
  );
};

export default Cart;
