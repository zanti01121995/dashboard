import React from "react";
import DashContent from "./dashboard/dashcontent";
import "./Content.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Cardcontent from "./Cards/cardcontent";
import AllCharts from "./Charts/allcharts";
import Colours from "./Detailcards/colors";
import Anime from "./Detailcards/animecards";
// import Cardcontent from "./Cards/cardcontent";

function Content(props) {
  console.log("content", props);
  return (
    <div className={`content-wrapper ${props.onHide ? "contenttog" : ""}`}>
      <div className="container">
        <Routes>
          <Route index path="/" element={<DashContent />} />
          <Route path="/contentcard" element={<Cardcontent />} />
          <Route path="/allcharts" element={<AllCharts />} />
          <Route path="/colors" element={<Colours />} />
          <Route path="/anime" element={<Anime />} />
          <Route
            path="/404"
            element={
              <h3 style={{ paddingLeft: "200px", paddingTop: "200px" }}>
                Page not found, please check url
              </h3>
            }
          />
          <Route
            path="/blank"
            element={
              <h3 style={{ paddingLeft: "200px", paddingTop: "200px" }}>
                Coming Soon!!!
              </h3>
            }
          />
          <Route path="*" element={<Navigate to="/blank" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default Content;
