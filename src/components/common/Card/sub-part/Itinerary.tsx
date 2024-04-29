import { useState } from "react";
import { ItineraryDay } from "../../../../pages/Public/TrekInfoPage";

type ItineraryProps = {
  itinerary: ItineraryDay[];
};

function Itinerary({ itinerary }: ItineraryProps) {
  const {} = itinerary;
  const [activeTab, setActiveTab] = useState(null);

  const handleExpander = (tab: any) => {
    if (activeTab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
    }
  };
  return (
    <>
      {itinerary.map((item, index) => {
        return (
          <div
            key={index}
            className={`itinerary-day itinerary-day${
              activeTab === item.day ? "--expanded" : "--collapsed"
            }`}
          >
            <div className="itinerary-day__header">
              <div
                className="itinerary-day__header-top-row"
                role="switch"
                tabIndex={-1}
                aria-checked="true"
              >
                <div className="itinerary-day__day-number">Day {item.day}</div>
                <div
                  className="itinerary-day__day-title"
                  onClick={() => handleExpander(item.day)}
                >
                  {item.mainTitle}
                </div>
              </div>
              <div
                className={`ReactCollapse${
                  activeTab === item.day ? "--expanded" : "--collapsed"
                }`}
              >
                <div className="ReactCollapse--content">
                  <div className="itinerary-day__header-bottom-row">
                    <div className="itinerary-day__additional-details-row" />
                    <div className="itinerary-day__day-description">
                      <p className="ql-align-justify">{item.mainDescription}</p>
                    </div>
                    <div className="itinerary-day__images-row">
                      {item.images.map((image) => {
                        return (
                          <button
                            type="button"
                            tabIndex={-2}
                            className="itinerary-day__image-wrap"
                          >
                            <img
                              src={image}
                              alt="oo"
                              className="itinerary-day__image"
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="itinerary-day__events">
                    <div className="event-section">
                      <div className="event-section__connectors" />
                      {item.sites.map((site) => {
                        return (
                          <div className="itinerary-event">
                            <div className="itinerary-event__heading">
                              {site.name}
                            </div>
                            <div className="itinerary-event__additional-info">
                              <div style={{ display: "flex", gap: 15 }} />
                            </div>
                            <div className="itinerary-event__description">
                              <ul className="list-of-points">
                                {site.descriptionPoints.map((point) => {
                                  return (
                                    <li>
                                      <span
                                        style={{
                                          backgroundColor: "transparent",
                                        }}
                                      >
                                        {point}
                                      </span>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                            <div className="itinerary-day__images-row">
                              {site.images.map((siteImg) => {
                                return (
                                  <button
                                    type="button"
                                    tabIndex={-2}
                                    className="itinerary-day__image-wrap"
                                  >
                                    <img
                                      src={siteImg}
                                      alt="Jaipur Jodhpur Jaisalmer | FREE Desert Safari Day 1"
                                      className="itinerary-day__image"
                                    />
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                      <button
                        type="button"
                        className="itinerary-day__collapse-day-btn"
                        onClick={() => handleExpander(item.day)}
                      >
                        Collapse Day {item.day} Itinerary
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Itinerary;
