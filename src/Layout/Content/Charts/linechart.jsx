import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [
        0, 1000, 500, 1500, 1000, 2000, 1500, 2500, 2000, 3000, 2500, 3500,
        3000,
      ],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      tension: 0.3,
    },
  ],
};

export default function LineChart() {
  return (
    <div className="col-xl-8 col-lg-7">
      <div className="card shadow mb-4">
        <div className="card-header d-flex flex-row align-items-center justify-content-between">
          <h6
            className="m-0 font-weight-bold text-primary"
            style={{ fontSize: "20px" }}
          >
            Heading
          </h6>
          <div className="dropdown no-arrow">
            <a href="#" className="dropdown-toggle" role="button">
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
          </div>
        </div>
        <div className="card-body" style={{ height: "350px", width: "auto" }}>
          <div
            className="chart-area d-flex flex-row align-items-center justify-content-between"
            style={{ height: "320px", width: "auto" }}
          >
            <Line options={{ maintainAspectRatio: false }} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
