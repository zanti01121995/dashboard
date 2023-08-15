import React from "react";

function DetailCards() {
  return (
    <div className="col-xl-6 col-lg-7">
      <div className="card shadow mb-4">
        <div className="card-header d-flex flex-row align-items-center justify-content-between">
          <h6
            className="m-0 font-weight-bold text-primary"
            style={{ fontSize: "20px" }}
          >
            Heading
          </h6>
          <div className="dropdown no-arrow">
            <a href="#" className="dropdown-toggle" role="button">
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
          </div>
        </div>
        <div className="card-body">
          <div className="card-area d-flex flex-row align-items-center justify-content-between">
            <img
              class="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: "30rem" }}
              src="https://i.pinimg.com/736x/9c/39/f0/9c39f02a6c1c0fed0806c75dd2cf78db.jpg"
              alt="..."
            />
          </div>
          <p
            style={{
              color: "#858796",
              fontSize: "1rem",
              fontWeight: "400",
              lineHeight: "1.5",
              textAlign: "left",
            }}
          >
            Add some quality, svg illustrations to your project courtesy of
            <a target="_blank" rel="nofollow" href="https://undraw.co/">
              unDraw
            </a>
            , a constantly updated collection of beautiful svg images that you
            can use completely free and without attribution!
          </p>
        </div>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header d-flex flex-row align-items-center justify-content-between">
          <h6
            className="m-0 font-weight-bold text-primary"
            style={{ fontSize: "20px" }}
          >
            Heading
          </h6>
          <div className="dropdown no-arrow">
            <a href="#" className="dropdown-toggle" role="button">
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
          </div>
        </div>
        <div className="card-body">
          <p
            style={{
              color: "#858796",
              fontSize: "1rem",
              fontWeight: "400",
              lineHeight: "1.5",
              textAlign: "left",
            }}
          >
            Add some quality, svg illustrations to your project courtesy of
            <a target="_blank" rel="nofollow" href="https://undraw.co/">
              unDraw
            </a>
            , a constantly updated collection of beautiful svg images that you
            can use completely free and without attribution!
          </p>
        </div>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header d-flex flex-row align-items-center justify-content-between">
          <h6
            className="m-0 font-weight-bold text-primary"
            style={{ fontSize: "20px" }}
          >
            Heading
          </h6>
          <div className="dropdown no-arrow">
            <a href="#" className="dropdown-toggle" role="button">
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
          </div>
        </div>
        <div className="card-body">
          <p
            style={{
              color: "#858796",
              fontSize: "1rem",
              fontWeight: "400",
              lineHeight: "1.5",
              textAlign: "left",
            }}
          >
            Add some quality, svg illustrations to your project courtesy of
            <a target="_blank" rel="nofollow" href="https://undraw.co/">
              unDraw
            </a>
            , a constantly updated collection of beautiful svg images that you
            can use completely free and without attribution!
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailCards;
