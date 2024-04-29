import gsap from "gsap";
import { useEffect } from "react";

function getDOMLoadingPercentage() {
  const stages = {
    loading: 0.1,
    interactive: 0.5,
    complete: 1,
  };

  const currentState = document.readyState;

  if (currentState in stages) {
    return stages[currentState] * 100;
  } else {
    return 100;
  }
}

function Loader() {
  useEffect(() => {
    const loaderEl = document.querySelector(".loader span");
    let loadProgress = getDOMLoadingPercentage();
    console.log(loadProgress, "Progress");

    gsap.to(loaderEl, {
      duration: 1,
      scaleX: loadProgress,
      backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
    });

    if (loadProgress == 100) {
      gsap.timeline().to(".loading__wrapper", {
        duration: 0.8,
        opacity: 0,
        pointerEvents: "none",
      });
    }
  }, []);

  return (
    <div className="loading__wrapper">
      <img
        src="https://i.ibb.co/19VvYC9/LOGO1.jpg"
        width="40px"
        height="40px"
        alt=""
        style={{
          borderRadius: "50%",
          marginBottom: "8px",
        }}
      />
      <div className="loader--text">Loading...</div>
      <div className="loader">
        <span />
      </div>
    </div>
  );
}

export default Loader;
