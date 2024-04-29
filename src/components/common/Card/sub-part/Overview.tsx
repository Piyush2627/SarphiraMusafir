import { useState } from "react";
import { Overview as OverviewProps } from "../../../../pages/Public/TrekInfoPage";

function Overview(props: OverviewProps) {
  const { about, quickInfo, otherInfo, travelVia, note } = props;
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <div className="product-overview">
        <div className="product-overview__details">
          <div>
            <p className="title">
              <strong>
                <u>About the Tour</u>:
              </strong>
            </p>
            <p>{about}</p>
            <p className="title">
              <strong>
                <u>Quick Info</u>
              </strong>
              :
            </p>
            <ul>
              <li>
                <strong>Route:&nbsp;</strong>
                {quickInfo.route}
              </li>
              <li>
                <strong>Duration:</strong>&nbsp;{quickInfo.duration}
              </li>
              <li>
                <strong>Start Point:</strong>&nbsp;{quickInfo.startingPoint}
              </li>
              <li>
                <strong>End Point:</strong>&nbsp;{quickInfo.endPoint}
              </li>
            </ul>
          </div>
          <div>
            <div
              className={`read-more-content ${
                showMore && "read-more-content--expanded"
              }`}
              style={{ maxHeight: 120 }}
            >
              <div className="long-description">
                {otherInfo.map((item, index) => {
                  return (
                    <div key={index}>
                      <p className="title">
                        <strong style={{ backgroundColor: "transparent" }}>
                          <u>{item.title}</u>:
                        </strong>
                      </p>
                      <ul>
                        {item.points.map((point) => {
                          return <li>{point}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
                <p className="title">
                  <strong>
                    <u>How to Reach</u>:
                  </strong>
                </p>
                <p className="my6">
                  <strong>By Air:</strong>&nbsp;{travelVia.byAir}
                </p>
                <p className="my6">
                  <strong>By Rail:</strong>&nbsp;{travelVia.byRail}
                </p>
                <p className="my6">
                  <strong>By Road:&nbsp;</strong>
                  {travelVia.byRoad}
                </p>
                <p className="title">
                  <strong style={{ backgroundColor: "transparent" }}>
                    <u>Note</u>:
                  </strong>
                  <span style={{ backgroundColor: "transparent" }}> </span>
                </p>
                <ul>
                  {note.map((point) => {
                    return <li>{point}</li>;
                  })}
                </ul>
              </div>
            </div>
            <button
              type="button"
              className={`link-btn read-more-btn ${
                showMore
                  ? "read-more-btn--expanded"
                  : "read-more-btn--collapsed"
              }`}
              onClick={handleShowMore}
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
