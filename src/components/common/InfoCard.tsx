type InfoCardPropType = {
  count: string;
  tagLine: string;
  title: string;
  description: string;
  image: string;
  isRight?: boolean;
};

export const dummyDataInfoCard = {
  count: "03",
  tagLine: "Get Started",
  title: "What level of hiker are you?",
  description:
    "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ",
  image:
    "https://fastly.picsum.photos/id/128/3823/2549.jpg?hmac=VbPyA2vESva2YdoXqll9REBcbQIskgv_c-D60C1s0xc",
  isRight: false,
};

function InfoCard({
  count,
  tagLine,
  title,
  description,
  image,
  isRight = false,
}: InfoCardPropType) {
  return (
    <div
      className={`info-card-card-container ${isRight && "info-card-reverse"}`}
    >
      <div className="info-card-content">
        <h4 className="info-card-count">{count}</h4>
        <div className="info-card-inner-content">
          <div className="info-card-tagline">
            <div className="info-card-line" />
            <span className="info-card-tag">{tagLine}</span>
          </div>
          <h4 className="info-card-title">{title}</h4>
          <b className="info-card-description">{description}</b>
        </div>
      </div>
      <div className="info-card-img-container">
        <img className={`info-card-icon `} alt="" src={image} />
      </div>
    </div>
  );
}

export default InfoCard;
