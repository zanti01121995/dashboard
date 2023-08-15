import React from "react";

function ColorCards() {
  let cardArray = [
    { color: "#4e73df", title: "Primary" },
    { color: "#1cc88a", title: "Success" },
    { color: "#36b9cc", title: "Info" },
    { color: "#f6c23e", title: "Warning" },
    { color: "#e74a3b", title: "Danger" },
    { color: "#858796", title: "Secondary" },
    { color: "#f8f9fc", title: "Light" },
    { color: "#5a5c69", title: "Dark" },
  ];
  return (
    <div className="col-xl-12 col-lg-7 d-flex">
      <div className="row  py-3">
        {cardArray.map((ele) => (
          <div className="col-xl-6 col-lg-7 py-2">
            <div
              className="card  shadow  py-2"
              style={{
                backgroundColor: `${ele.color}`,
                color: "#fff",
                height: "100px",
              }}
            >
              <h4
                style={{
                  textAlign: "left",
                  paddingTop: "15px",
                  paddingLeft: "15px",
                }}
              >
                {ele.title}
              </h4>
              <h5
                style={{
                  textAlign: "left",
                  paddingLeft: "15px",
                  fontSize: "15px",
                  color: "#858796 ",
                }}
              >
                {ele.color}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorCards;
