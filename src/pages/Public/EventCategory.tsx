import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { data } from "../../mock_data/eventList";

function EventCategory() {
  return (
    <>
      <div className="contentcard-main-container">
        <div className="about-hero-section">
          <img
            src="https://images.unsplash.com/photo-1691516347182-619faa18b4f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="about-hero-section-image"
          />
          <div className="about-hero-text">
            <h3>About Us</h3>
            <h1>
              Shaping The Future <br />
              Of Travel
            </h1>
          </div>
        </div>
        <div className="event-container">
          <div className="event-explore-text-container">
            <p className="event-explore-text-heading">Bag Packing</p>
            <p className="event-explore-text-subheading">Programs</p>
            <p className="event-explore-text-text">
              1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
              odit molestiae aut dicta,
            </p>
            <div className="event-explore-text-flex">
              <button className="event-explore-text-button">
                <i className="fas fa-angle-right" />
              </button>
              <div className="event-explore-text-button-text">
                Explore ALl Programs
              </div>
            </div>
          </div>
          <ul className="glide__slides">
            {data.map(() => {
              return (
                <li className="glide__slide">
                  <Link
                    to={"/event/details/new"}
                    className="media-box media-box-reveal"
                    data-anima="scale"
                    data-trigger="hover">
                    <img
                      className="anima"
                      src="https://i.ibb.co/wrsHWFc/IMG-20240309-181904389.png"
                      alt=""
                      style={{
                        position: "relative",
                        animationDuration: "500ms",
                        transitionTimingFunction: "ease",
                        transitionDelay: "0ms",
                      }}
                    />
                    <div className="caption">
                      <h2>Bianco</h2>
                      <div className="extra-field">From $95</div>
                      <h3>Alpes, Italy</h3>
                      <p>
                        Lorem ipsum dolore consectetur adipisicing e ididunto
                        pertinole.
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EventCategory;
