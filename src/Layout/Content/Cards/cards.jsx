import React from "react";

function Cards({ props }) {
  console.log("content", props);
  return (
    <div className="col-xl-3 col-md-6 mb-4 ">
      <div
        className="card text-center border-left-primary shadow h-100 py-2"
        style={{
          borderLeft: "4px solid",
          borderLeftColor: `${props.color}`,
          display: "flex",
          alignItems: "space-between",
        }}
      >
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2 ">
              <div
                className="text-xs text-uppercase mb-1"
                style={{
                  display: "flex",
                  alignItems: "space-between",
                  fontWeight: "bold",
                  fontSize: ".7rem",
                  color: `${props.color}`,
                }}
              >
                {props.title}
              </div>
            </div>
            <div className="row no-gutters align-items-center">
              <div
                className="col-auto h5 mb-0 font-weight-bold"
                style={{
                  display: "flex",
                  alignItems: "space-between",
                  color: "#5a5c69",
                  marginTop: "10px",
                }}
              >
                {props.value}
              </div>

              <div className="col" style={{ paddingTop: "15px" }}>
                {props.progress && (
                  <div
                    className="progress progress-sm mr-2"
                    style={{ height: ".5rem" }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${props.value}`,
                        backgroundColor: `${props.color}`,
                      }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                )}
              </div>
              <div className="col-auto">
                <i
                  className={props.icon}
                  style={{ color: "#dddfeb", fontWeight: "bold" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
