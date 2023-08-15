import React, { Component } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaGem, FaHeart } from "react-icons/fa";

const sidebar = (
  <ProSidebar>
    <Menu iconShape="square">
      <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
      <SubMenu title="Components" icon={<FaHeart />}>
        <MenuItem>Component 1</MenuItem>
        <MenuItem>Component 2</MenuItem>
      </SubMenu>
    </Menu>
  </ProSidebar>
);

class Side extends Component {
  render() {
    return <div>{sidebar}</div>;
  }
}
export default Side;
