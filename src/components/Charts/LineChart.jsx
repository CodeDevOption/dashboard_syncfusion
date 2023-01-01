import React from 'react';
import {ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,LineSeries, DateTime, Legend, Tooltip} from  '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../assets/data/dummy';
import { useStateValue } from '../../StateProvider';

const LineChart = () => {
  const[{theme},dispatch] = useStateValue();
  return (
    <ChartComponent
    id="line-chart"
    height='420px'
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={{enable:true}}
    background={theme === 'Dark' ? '#33373e':'#fff'}
    colo
    >
      <SeriesCollectionDirective>
        {
          lineCustomSeries.map((item,index) => (
            <SeriesDirective key={index} {...item} />
          ))
        }
      </SeriesCollectionDirective>
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
    </ChartComponent>
  )
}

export default LineChart