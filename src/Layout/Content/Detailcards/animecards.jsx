import React from "react";
import DetailCards from "./detail1";

function Anime(props) {
  return (
    <>
      <div className="row">
        <DetailCards />
        <DetailCards />
      </div>
    </>
  );
}

export default Anime;
