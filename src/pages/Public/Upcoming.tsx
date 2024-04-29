// @ts-nocheck
import { useEffect } from "react";
import gsap from "gsap";
import imagesLoaded from "imagesloaded";
import MinimalInfoCard from "../../components/common/MinimalInfoCard";
import upcoming from "../../mock_data/upcoming.json";

function Upcoming() {
  useEffect(() => {
    const buttons = {
      prev: document.querySelector(".btn--left"),
      next: document.querySelector(".btn--right"),
    };
    const cardsContainerEl = document.querySelector(".cards__wrapper");
    const appBgContainerEl = document.querySelector(".upcoming-app__bg");

    const cardInfosContainerEl = document.querySelector(".info__wrapper");

    buttons.next!.addEventListener("click", () => swapCards("right"));

    buttons.prev!.addEventListener("click", () => swapCards("left"));

    function swapCards(direction: any) {
      const currentCardEl = cardsContainerEl?.querySelector(".current--card");
      const previousCardEl = cardsContainerEl?.querySelector(".previous--card");
      const nextCardEl = cardsContainerEl?.querySelector(".next--card");

      const currentBgImageEl =
        appBgContainerEl?.querySelector(".current--image");
      const previousBgImageEl =
        appBgContainerEl?.querySelector(".previous--image");
      const nextBgImageEl = appBgContainerEl?.querySelector(".next--image");

      changeInfo(direction);
      swapCardsClass();

      removeCardEvents(currentCardEl);

      function swapCardsClass() {
        currentCardEl?.classList.remove("current--card");
        previousCardEl?.classList.remove("previous--card");
        nextCardEl?.classList.remove("next--card");

        currentBgImageEl?.classList.remove("current--image");
        previousBgImageEl?.classList.remove("previous--image");
        nextBgImageEl?.classList.remove("next--image");

        currentCardEl.style.zIndex = "50";
        currentBgImageEl.style.zIndex = "-2";

        if (direction === "right") {
          previousCardEl.style.zIndex = "20";
          nextCardEl.style.zIndex = "30";

          nextBgImageEl.style.zIndex = "-1";

          currentCardEl?.classList.add("previous--card");
          previousCardEl?.classList.add("next--card");
          nextCardEl?.classList.add("current--card");

          currentBgImageEl?.classList.add("previous--image");
          previousBgImageEl?.classList.add("next--image");
          nextBgImageEl?.classList.add("current--image");
        } else if (direction === "left") {
          previousCardEl.style.zIndex = "30";
          nextCardEl.style.zIndex = "20";

          previousBgImageEl.style.zIndex = "-1";

          currentCardEl?.classList.add("next--card");
          previousCardEl?.classList.add("current--card");
          nextCardEl?.classList.add("previous--card");

          currentBgImageEl?.classList.add("next--image");
          previousBgImageEl?.classList.add("current--image");
          nextBgImageEl?.classList.add("previous--image");
        }
      }
    }

    function changeInfo(direction: any) {
      let currentInfoEl = cardInfosContainerEl?.querySelector(".current--info");
      let previousInfoEl =
        cardInfosContainerEl?.querySelector(".previous--info");
      let nextInfoEl = cardInfosContainerEl?.querySelector(".next--info");

      gsap
        .timeline()
        .to([buttons.prev, buttons.next], {
          duration: 0.2,
          opacity: 0.5,
          pointerEvents: "none",
        })
        .to(
          currentInfoEl?.querySelectorAll(".text"),
          {
            duration: 0.4,
            stagger: 0.1,
            translateY: "-120px",
            opacity: 0,
          },
          "-="
        )
        .call(() => {
          swapInfosClass(direction);
        })
        .call(() => initCardEvents())
        .fromTo(
          direction === "right"
            ? nextInfoEl?.querySelectorAll(".text")
            : previousInfoEl?.querySelectorAll(".text"),
          {
            opacity: 0,
            translateY: "40px",
          },
          {
            duration: 0.4,
            stagger: 0.1,
            translateY: "0px",
            opacity: 1,
          }
        )
        .to([buttons.prev, buttons.next], {
          duration: 0.2,
          opacity: 1,
          pointerEvents: "all",
        });

      function swapInfosClass() {
        currentInfoEl?.classList.remove("current--info");
        previousInfoEl?.classList.remove("previous--info");
        nextInfoEl?.classList.remove("next--info");

        if (direction === "right") {
          currentInfoEl?.classList.add("previous--info");
          nextInfoEl?.classList.add("current--info");
          previousInfoEl?.classList.add("next--info");
        } else if (direction === "left") {
          currentInfoEl?.classList.add("next--info");
          nextInfoEl?.classList.add("previous--info");
          previousInfoEl?.classList.add("current--info");
        }
      }
    }

    function updateCard(e: any) {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const centerPosition = {
        x: box.left + box.width / 2,
        y: box.top + box.height / 2,
      };
      let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
      gsap.set(card, {
        "--current-card-rotation-offset": `${angle}deg`,
      });
      const currentInfoEl =
        cardInfosContainerEl?.querySelector(".current--info");
      gsap.set(currentInfoEl, {
        rotateY: `${angle}deg`,
      });
    }

    function resetCardTransforms(e: any) {
      const card = e.currentTarget;
      const currentInfoEl =
        cardInfosContainerEl?.querySelector(".current--info");
      gsap.set(card, {
        "--current-card-rotation-offset": 0,
      });
      gsap.set(currentInfoEl, {
        rotateY: 0,
      });
    }

    function initCardEvents() {
      const currentCardEl = cardsContainerEl?.querySelector(".current--card");
      currentCardEl?.addEventListener("pointermove", updateCard);
      currentCardEl?.addEventListener("pointerout", (e) => {
        resetCardTransforms(e);
      });
    }

    function removeCardEvents(card: any) {
      card.removeEventListener("pointermove", updateCard);
    }

    function init() {
      let tl = gsap.timeline();

      tl.to(cardsContainerEl!.children, {
        delay: 0.15,
        duration: 0.5,
        stagger: {
          ease: "power4.inOut",
          from: "right",
          amount: 0.1,
        },
        "--card-translateY-offset": "0%",
      })
        .to(
          cardInfosContainerEl!
            .querySelector(".current--info")!
            .querySelectorAll(".text"),
          {
            delay: 0.5,
            duration: 0.4,
            stagger: 0.1,
            opacity: 1,
            translateY: 0,
          }
        )
        .to(
          [buttons.prev, buttons.next],
          {
            duration: 0.4,
            opacity: 1,
            pointerEvents: "all",
          },
          "-=0.4"
        );
    }

    const waitForImages = () => {
      const images = [...document.querySelectorAll("img")];
      const totalImages = images.length;
      let loadedImages = 0;
      const loaderEl = document.querySelector(".loader span");

      gsap.set(cardsContainerEl?.children, {
        "--card-translateY-offset": "100vh",
      });
      gsap.set(
        cardInfosContainerEl
          ?.querySelector(".current--info")!
          .querySelectorAll(".text"),
        {
          translateY: "40px",
          opacity: 0,
        }
      );
      gsap.set([buttons.prev, buttons.next], {
        pointerEvents: "none",
        opacity: "0",
      });
      init();
    };

    waitForImages();
  }, []);

  return (
    <>
      <div className="floating-main">
        <div className="upcoming-app">
          <div className="cardList">
            <button className="cardList__btn btn btn--left">
              <div className="icon">
                <svg>
                  <use xlinkHref="#arrow-left" />
                </svg>
              </div>
            </button>
            <div className="cards__wrapper">
              <div className="floating-app-card current--card">
                <div className="floating-app-card__image">
                  <img src="https://source.unsplash.com/Z8dtTatMVMw" alt="" />
                </div>
              </div>
              <div className="floating-app-card next--card">
                <div className="floating-app-card__image">
                  <img src="https://source.unsplash.com/9dmycbFE7mQ" alt="" />
                </div>
              </div>
              <div className="floating-app-card previous--card">
                <div className="floating-app-card__image">
                  <img src="https://source.unsplash.com/m7K4KzL5aQ8" alt="" />
                </div>
              </div>
            </div>
            <button className="cardList__btn btn btn--right">
              <div className="icon">
                <svg>
                  <use xlinkHref="#arrow-right" />
                </svg>
              </div>
            </button>
          </div>
          <div className="infoList">
            <div className="info__wrapper">
              <div className="info current--info">
                <h1 className="text name">Adventure</h1>
                <h4 className="text location">Scotland</h4>
                <p className="text description">The mountains are calling</p>
              </div>
              <div className="info next--info">
                <h1 className="text name">Religious</h1>
                <h4 className="text location">Peru</h4>
                <p className="text description">Adventure is never far away</p>
              </div>
              <div className="info previous--info">
                <h1 className="text name">Bagpacking</h1>
                <h4 className="text location">France</h4>
                <p className="text description">Let your dreams come true</p>
              </div>
            </div>
          </div>
          <div className="upcoming-app__bg">
            <div className="upcoming-app__bg__image current--image">
              <img src="https://source.unsplash.com/Z8dtTatMVMw" alt="" />
            </div>
            <div className="upcoming-app__bg__image next--image">
              <img src="https://source.unsplash.com/9dmycbFE7mQ" alt="" />
            </div>
            <div className="upcoming-app__bg__image previous--image">
              <img src="https://source.unsplash.com/m7K4KzL5aQ8" alt="" />
            </div>
          </div>
        </div>

        <svg className="icons" style={{ display: "none" }}>
          <symbol
            id="arrow-left"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <polyline
              points="328 112 184 256 328 400"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 48,
              }}
            />
          </symbol>
          <symbol
            id="arrow-right"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <polyline
              points="184 112 328 256 184 400"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 48,
              }}
            />
          </symbol>
        </svg>
      </div>
      <div className="five-col-grid-container">
        <div className="event-gallery">
          {upcoming.map((section, index) => {
            return (
              <div className="event-gallery__strip__wrapper" key={index}>
                <div className={`event-gallery__strip strip${index + 1}`}>
                  {section.photos.map((event, ci) => {
                    return (
                      <div className="photo" key={`uc-${ci}`}>
                        <div className="photo__image">
                          <img src={event.imageUrl} />
                        </div>
                        <div className="photo__name">{event.name}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Upcoming;
