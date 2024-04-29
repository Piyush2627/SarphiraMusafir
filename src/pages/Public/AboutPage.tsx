//css import
import InfoCard from "../../components/common/InfoCard";

const whyUsData = [
  {
    count: "01",
    tagLine: "Get Started",
    title: "What level of hiker are you?",
    description:
      "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ",
    image:
      "https://fastly.picsum.photos/id/128/3823/2549.jpg?hmac=VbPyA2vESva2YdoXqll9REBcbQIskgv_c-D60C1s0xc",
    isRight: false,
  },
  {
    count: "02",
    tagLine: "Get Started",
    title: "What level of hiker are you?",
    description:
      "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ",
    image:
      "https://fastly.picsum.photos/id/128/3823/2549.jpg?hmac=VbPyA2vESva2YdoXqll9REBcbQIskgv_c-D60C1s0xc",
    isRight: true,
  },
  {
    count: "03",
    tagLine: "Get Started",
    title: "What level of hiker are you?",
    description:
      "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ",
    image:
      "https://fastly.picsum.photos/id/128/3823/2549.jpg?hmac=VbPyA2vESva2YdoXqll9REBcbQIskgv_c-D60C1s0xc",
    isRight: false,
  },
];

function AboutPage() {
  return (
    <>
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
      <div className="why-us-container">
        <h2 className="section-headline">Why us</h2>
        {whyUsData.map((reason) => {
          return <InfoCard {...reason} />;
        })}
      </div>
    </>
  );
}

export default AboutPage;
