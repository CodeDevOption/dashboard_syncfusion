import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { Header } from "../components/";
import { ordersData, ordersGrid } from "../assets/data/dummy";

const Orders = () => {
  let gridcomp;
  const toolbar = ["PdfExport"];
  const toolbarClick = (args) => {
    if (gridcomp && args.item.id === "gridcomp_pdfexport") {
      gridcomp.pdfExport();
    }
  };

  return (
    <div className="m-2 mt-16 md:mt-0 md:m-5 md:p-5 2xl::m-10 p-2 2xl:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        toolbar={toolbar}
        toolbarClick={toolbarClick}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        ref={(g) => (gridcomp = g)}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
            Toolbar,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
