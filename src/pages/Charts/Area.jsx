import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  SplineAreaSeries,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../assets/data/dummy";
import { useStateValue } from "../../StateProvider";
import { Header } from "../../components/";
const Area = () => {
  const [{ theme }, dispatch] = useStateValue();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Charts" title="Inflation Rate" />
      <ChartComponent
        id="line-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={theme === "Dark" ? "#33373e" : "#fff"}
        colo
      >
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
        <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
      </ChartComponent>
    </div>
  );
};

export default Area;
