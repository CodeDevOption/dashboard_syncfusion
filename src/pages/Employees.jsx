import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { Header } from "../components/";
import { employeesData, employeesGrid } from "../assets/data/dummy";

const Employees = () => {
  return (
    <div className="m-2 mt-16 md:mt-0 md:m-5 md:p-5 2xl::m-10 p-2 2xl:p-10">
      <Header category="Page" title="Employees" />
      <GridComponent width='auto' toolbar={['Search']} dataSource={employeesData} allowPaging allowSorting>
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Search,
            Toolbar
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Employees;
