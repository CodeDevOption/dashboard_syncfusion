import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Edit,
  Toolbar,
  Inject,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { Header } from "../components/";
import { customersData, customersGrid} from "../assets/data/dummy";

const Customers = () => {
  return (
    <div className="m-2 mt-16 md:mt-0 md:m-5 md:p-5 2xl::m-10 p-2 2xl:p-10">
      <Header category="Page" title="Customers" />
      <GridComponent width='auto' toolbar={['Delete']} dataSource={customersData} editSettings={{allowDeleting:true,allowEditing:true}} allowPaging allowSorting>
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Selection,
            Edit,
            Toolbar,
            Sort,
            Filter,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
