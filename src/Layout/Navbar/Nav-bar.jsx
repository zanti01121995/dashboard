import React, { useState } from "react";
import "./Nav-bar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

function Navbar(props) {
  const [navCollapse, setNavcollapse] = useState(false);

  let toggleSide = () => {
    if (navCollapse) {
      setNavcollapse(false);
      props.toggleSideNav(false);
      if (props.size > 720) {
        props.toggleSideNav(false);
      }
    } else {
      setNavcollapse(true);
      props.toggleSideNav(true);
      if (props.size < 720) {
        props.toggleSideNav(true);
      }
    }
  };

  return (
    <div className={` nav ${navCollapse ? "navtog" : ""}`}>
      <div className="container">
        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div className="col">
            <div className="wrapper">
              <div className="menu">
                <i class="fa-solid fa-bars fa-2x" onClick={toggleSide}></i>
              </div>
              <div className="search ">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-1"
                    style={{ width: "400px" }}
                    type="search"
                    placeholder="Search for..."
                    aria-label="Search"
                  />
                  <button
                    className={`btn btn-outline-primary ${
                      navCollapse ? "navCollapse" : ""
                    } `}
                    type="submit"
                  >
                    <SearchOutlinedIcon />
                  </button>
                </form>
              </div>
              <div className="items">
                <div className="item">
                  <NotificationsNoneOutlinedIcon className="icon" />
                  <div className="counter">1</div>
                </div>
                <div className="item">
                  <ChatBubbleOutlineOutlinedIcon className="icon" />
                  <div className="counter">2</div>
                </div>

                <div className="item">
                  <img
                    src="https://icon-library.com/images/person-icon-gif/person-icon-gif-10.jpg"
                    alt=""
                    className="avatar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
