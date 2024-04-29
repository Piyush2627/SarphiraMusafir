type SlideType = {
  url: string;
  description: string;
  name: string;
};

type PropTypes = {
  data: SlideType[];
};

const Productbanner = ({ data }: PropTypes) => {
  const handleNextClick = () => {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide")!.appendChild(lists[0]);
  };

  const handlePrevClick = () => {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide")!.prepend(lists[lists.length - 1]);
  };

  return (
    <div className="banner-container">
      <div id="slide">
        {data.map((slide, index) => {
          return (
            <div
              className="item"
              style={{
                backgroundImage: `url(${slide.url})`,
              }}
              key={index}
            >
              <div className="content">
                <div className="name">{slide.name}</div>
                <div className="des">{slide.description}</div>
                <button>See more</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={handlePrevClick} className="button">
          <i className="fas fa-angle-left" />
        </button>
        <button onClick={handleNextClick} className="button">
          <i className="fas fa-angle-right" />
        </button>
      </div>
    </div>
  );
};

export default Productbanner;
