import React from "react";
import Cards from "./cards";

function Cardcontent(props) {
  return (
    <>
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
    </>
  );
}
export default Cardcontent;
