import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      display: true,
    },
    title: {
      display: false,
    },
  },
  cutoutPercentage: 100,
};

export const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [15, 55, 30],
      backgroundColor: ["#36b9cc", "#4e73df", "#1cc88a"],
      borderWidth: 4,
    },
  ],
};

function DoughnutChart() {
  return (
    <div className="col-xl-4 col-lg-7">
      <div className="card shadow mb-4">
        <div className="card-header d-flex flex-row align-items-center justify-content-between">
          <h6
            className="m-0 font-weight-bold text-primary"
            style={{ fontSize: "20px" }}
          >
            Revenue Sources
          </h6>
          <div className="dropdown no-arrow">
            <a
              href="#"
              className="dropdown-toggle"
              role="button"
              style={{ display: "none" }}
            >
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
          </div>
        </div>
        <div className="card-body" style={{ height: "350px" }}>
          <div
            className="chart-area d-flex flex-row align-items-center justify-content-between"
            style={{ height: "340px" }}
          >
            <Doughnut
              options={{ options, maintainAspectRatio: false }}
              data={data}
            />
            ;
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
