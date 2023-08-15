import React from "react";

import LineChart from "./linechart";
import DoughnutChart from "./doughnutchart";

function AllCharts(props) {
  return (
    <>
      <div className="row">
        <LineChart />
        <DoughnutChart />
      </div>
      <div className="row">
        <DoughnutChart />
        <LineChart />
      </div>
    </>
  );
}

export default AllCharts;
