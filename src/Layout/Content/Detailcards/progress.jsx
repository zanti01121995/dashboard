import React from "react";
import ColorCards from "./colorcards";

function ProgressCards() {
  let req_Arr = [
    { title: " Server Migration", completion: "20%", color: "#e74a3b" },
    { title: " Sales Tracking", completion: "40%", color: "#f6c23e" },
    { title: " Customer Database", completion: "60%", color: "#4e73df" },
    { title: " Payout Details", completion: "80%", color: "#36b9cc" },
    { title: " Account Setup", completion: "100%", color: "#1cc88a" },
  ];
  return (
    <div className="col-xl-6 col-lg-7">
      <div
        className="card shadow"
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <div className="card-header d-flex flex-row align-items-center justify-content-between">
          <h6
            className="m-0 font-weight-bold text-primary"
            style={{ fontSize: "20px" }}
          >
            Task Progress
          </h6>
          <div className="dropdown no-arrow">
            <a href="#" className="dropdown-toggle" role="button">
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
          </div>
        </div>
        <div className="card-body">
          {req_Arr.map((element) => (
            <>
              <h4
                className="small font-weight-bold py-2"
                style={{
                  textAlign: "left",
                  color: "rgb(90, 92, 105)",
                }}
              >
                {element.title}
                <span style={{ float: "right" }}>
                  {element.completion === "100%"
                    ? "Completed!"
                    : element.completion}
                </span>
              </h4>

              <div
                className="progress mb-2"
                style={{
                  display: "flex",
                  height: "1rem",
                  overflow: "hidden",
                  lineHeight: "0",
                  fontSize: ".75rem",
                  backgroundColor: "#eaecf4",
                  borderRadius: ".35rem",
                }}
              >
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${element.completion}`,
                    backgroundColor: `${element.color}`,
                  }}
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="row">
        <ColorCards />
      </div>
    </div>
  );
}

export default ProgressCards;
