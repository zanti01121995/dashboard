import React from "react";
import "./Side-bar.css";

import "react-pro-sidebar/dist/css/styles.css";

import Collapsible from "./collapse/collapse";
import { Link } from "react-router-dom";

function Sidebar(props) {
  console.log("sideprops", props);
  return (
    <div
      className={`sidebar sidebarhider1 {${
        props.onHide ? "sidebarhider" : ""
      }}`}
    >
      {/* <ProSidebar>
        <Menu iconShape="square">
          <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
          <SubMenu title="Components" icon={<FaHeart />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar> */}
      <div className="title">
        <i class="fas fa-laugh-wink fa-xl"></i>
        <span style={{ marginLeft: "10px" }}>SB ADMIN</span>
      </div>
      <hr className="line" />
      <div className="subheads">
        <Link to="/" style={{ color: "white" }}>
          <i className="fas fa-fw fa-tachometer-alt fa-sm"></i>
          <span
            style={{
              marginLeft: "10px",
              fontSize: "13px",
              fontFamily: "Verdana",
              fontWeight: "600",
            }}
          >
            Dashboard
          </span>
        </Link>
      </div>
      <hr className="line" />
      <h6>INTERFACE</h6>
      <div className="subheads" style={{ paddingBottom: "10px" }}>
        <Collapsible
          trigger="Start here"
          dropdownicon={<i class="fa-solid fa-angle-down"></i>}
          toolicons="fas fa-fw fa-cog fa-sm"
          title="Component"
        >
          <p className="collapse-heading">Custom components :</p>
          <Link to="./allcharts">
            <h6 className="collapse-content">Charts</h6>
          </Link>
          <Link to="/contentcard">
            <h6 className="collapse-content">Cards</h6>
          </Link>
        </Collapsible>
      </div>
      <div className="subheads">
        <Collapsible
          trigger="Start here"
          dropdownicon={<i class="fa-solid fa-angle-down"></i>}
          toolicons="fas fa-fw fa-wrench fa-sm"
          title="Utilities"
        >
          <p className="collapse-heading">Custom Utilities:</p>
          <Link to="/colors">
            <h6 className="collapse-content">Colors</h6>
          </Link>
          <Link to="/border">
            <h6 className="collapse-content">Borders</h6>
          </Link>
          <Link to="/anime">
            <h6 className="collapse-content">Animations</h6>
          </Link>
          <Link to="others">
            <h6 className="collapse-content">Others</h6>
          </Link>
        </Collapsible>
      </div>
      <hr className="line" />
      <h6>ADDONS</h6>
      <div className="subheads">
        <Collapsible
          trigger="Start here"
          dropdownicon={<i class="fa-solid fa-angle-down"></i>}
          toolicons="fas fa-fw fa-folder fa-sm"
          title="Pages"
        >
          <p className="collapse-heading">Login Screens :</p>

          <Link to="/login">
            <h6 className="collapse-content">Login</h6>
          </Link>
          <Link to="/register">
            <h6 className="collapse-content">Register</h6>
          </Link>
          <Link to="/forgot">
            <h6 className="collapse-content">Forgot Password</h6>
          </Link>

          <p className="collapse-heading">Other Areas :</p>
          <Link to="/404">
            <h6 className="collapse-content">404 Page</h6>
          </Link>
          <Link to="/blank">
            <h6 className="collapse-content">Blank Page</h6>
          </Link>
        </Collapsible>
      </div>
      <div className="subheads" style={{ paddingBottom: "20px" }}>
        <span>
          <i className="fas fa-fw fa-chart-area fa-sm"></i>
          <span style={{ marginLeft: "10px" }}>Charts</span>
        </span>
      </div>
      <div className="subheads" style={{ paddingBottom: "20px" }}>
        <span>
          <i className="fas fa-fw fa-table fa-sm"></i>
          <span style={{ marginLeft: "10px" }}>Tables</span>
        </span>
      </div>
      <hr className="line" />
    </div>
  );
}

export default Sidebar;
