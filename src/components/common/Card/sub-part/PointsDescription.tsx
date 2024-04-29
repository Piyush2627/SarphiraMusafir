import { useState } from "react";

type PointsDescriptionProps = {
  points: string[];
};

function PointsDescription({ points }: PointsDescriptionProps) {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <div className="product-overview__list-wrap">
        <div
          className={`read-more-content ${
            showMore && "read-more-content--expanded"
          }`}
          style={{ maxHeight: 120 }}
        >
          <div>
            <h3 className="product-overview__list-title">Know Before You Go</h3>
            <ul className="product-overview__list">
              {points.map((point) => {
                return (
                  <li className="product-overview__list-item">
                    <span className="product-overview__list-item-icon tours-icon-information" />
                    {point}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <button
          type="button"
          className={`link-btn read-more-btn ${
            showMore ? "read-more-btn--expanded" : "read-more-btn--collapsed"
          }`}
          onClick={handleShowMore}
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </>
  );
}

export default PointsDescription;
