import React from "react";
import "../Content.css";
import Cards from "../Cards/cards";
import LineChart from "../Charts/linechart";
import DoughnutChart from "../Charts/doughnutchart";
import DetailCards from "../Detailcards/detail1";
import ProgressCards from "../Detailcards/progress";
function DashContent(props) {
  console.log("from new", props);
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4 p-20">
        <h1
          style={{
            color: "#5a5c69",
          }}
        >
          Dashboard
        </h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i>
          Generate Report
        </a>
      </div>
      <div className="row">
        <Cards
          props={{
            title: "Earnings (Monthly)",
            value: "$40,000",
            color: "#4e73df",
            icon: "fas fa-calendar fa-2x",
            progress: false,
          }}
        />
        <Cards
          props={{
            title: "Earnings (Annual)",
            value: "$215,000",
            color: "#1cc88a",
            icon: "fas fa-dollar-sign fa-2x",
            progress: false,
          }}
        />
        <Cards
          props={{
            title: "Tasks",
            value: "70%",
            color: "#36b9cc",
            icon: "fas fa-clipboard-list fa-2x",
            progress: true,
          }}
        />
        <Cards
          props={{
            title: "Pending Request",
            value: "18",
            color: "#f6c23e",
            icon: "fas fa-comments fa-2x",
            progress: false,
          }}
        />
      </div>
      <div className="row">
        <LineChart />
        <DoughnutChart />
      </div>
      <div className="row">
        <ProgressCards />
        <DetailCards />
      </div>
    </>
  );
}

export default DashContent;
