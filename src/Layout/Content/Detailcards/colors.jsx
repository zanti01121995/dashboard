import React from "react";
import DetailCards from "./detail1";
import ProgressCards from "./progress";

function Colours(props) {
  return (
    <>
      <div className="row">
        <ProgressCards />
        <DetailCards />
      </div>
    </>
  );
}

export default Colours;
