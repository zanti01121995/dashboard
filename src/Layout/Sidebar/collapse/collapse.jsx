import React from "react";
import { useCollapse } from "react-collapsed";
function Collapsible(props) {
  const config = {
    duration: 1000,
    onExpandStart: () => {
      console.log("INFO: onExpandStart triggered.");
    },
    onExpandEnd: () => {
      console.log("INFO: onExpandEnd triggered.");
    },
    onCollapseStart: () => {
      console.log("INFO: onCollapseStart triggered.");
    },
    onCollapseEnd: () => {
      console.log("INFO: onCollapseEnd triggered.");
    },
  };
  const { getCollapseProps, getToggleProps } = useCollapse(config);

  return (
    <div
      className="collapsible"
      style={{
        width: "200px",
        borderRadius: "0.35rem",
      }}
    >
      <div
        className="header"
        {...getToggleProps()}
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>
          <i className={props.toolicons}></i>{" "}
          <span style={{ marginLeft: "5px" }}>{props.title}</span>
        </span>
        <span>{props.dropdownicon}</span>
      </div>

      <div {...getCollapseProps()}>
        <div
          className="content"
          style={{
            backgroundColor: "white",
            padding: "10px",
            color: "black",
            borderRadius: "5px",
          }}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Collapsible;
