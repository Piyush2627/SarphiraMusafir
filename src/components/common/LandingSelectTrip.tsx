import { Link } from "react-router-dom";

function LandingSelectTrip() {
  return (
    <div className="landing-grid">
      <div className="landing-grid-section1">
        <h1>Find the Perfect Escape </h1>
        <div className="dash-line"></div>
        <p>Discover your ideal experience</p>
        <div className="agenda-container">
          <div className="vision-container">
            <p>Vision</p>
            <div className="vision">
              To redefine travel with the wild spirit of the "Crazy Traveler".
            </div>
          </div>
          <div className="mission-container">
            <p>Mission</p>
            <div className="mission">
              We Curate unforgettable adventures, empowering travelers to
              embrace their wonderlust and create lifelong memories.
            </div>
          </div>
        </div>
      </div>
      <div className="landing-grid-section2">
        <Link
          to="/trip/category/weekend-gateways"
          style={{ textDecoration: "none", color: "inherit" }}>
          <div className="selecttrip-1">
            <div>
              <img
                src="https://i.ibb.co/wrsHWFc/IMG-20240309-181904389.png"
                className="select-on-hover"
                alt=""
              />
            </div>
            <div className="select-trip-img-bottomtext ">Weekend Getaways</div>
          </div>{" "}
        </Link>
        <Link
          to="/trip/category/backpacking-trips"
          style={{ textDecoration: "none", color: "inherit" }}>
          <div className="selecttrip-2">
            <div>
              <img
                src="https://i.ibb.co/qxNQWT4/PXL-20230709-033331696-2.jpg"
                className="select-on-hover"
                alt=""
              />
            </div>
            <div className="select-trip-img-bottomtext">Backpacking Trips</div>
          </div>
        </Link>
        <Link
          to="/trip/category/religious-places"
          style={{ textDecoration: "none", color: "inherit" }}>
          <div className="selecttrip-3 ">
            <div>
              <img
                src="https://i.ibb.co/0mV2qY8/selecttrip-image3.png"
                className="select-on-hover"
                alt=""
              />
            </div>
            <div className="select-trip-img-bottomtext">Religious Places</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LandingSelectTrip;
