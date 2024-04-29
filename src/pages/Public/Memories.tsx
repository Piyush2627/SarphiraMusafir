import { shuffle } from "../../components/common/LandingGallery";
import AnimatedImage from "../../components/common/AnimatedImage";

const imgUrls = [
  {
    url: "https://images.pexels.com/photos/443416/pexels-photo-443416.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    url: "https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    url: "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    url: "https://images.pexels.com/photos/1125278/pexels-photo-1125278.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    url: "https://images.pexels.com/photos/920968/pexels-photo-920968.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    url: "https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    url: "https://images.pexels.com/photos/450597/pexels-photo-450597.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    url: "https://images.pexels.com/photos/269923/pexels-photo-269923.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    url: "https://images.pexels.com/photos/542411/pexels-photo-542411.png?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    url: "https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    url: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    url: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    url: "https://images.pexels.com/photos/386007/pexels-photo-386007.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
];

function Memories() {
  return (
    <>
      <div className="main-container">
        <div className="grid-container">
          {/* <div className="memories-card--5x3">
            <section className="lp__grid">
              <div className="lp__item lp__mainText cw">
                <h1 className="pre-line">
                  Santorini is inspiring,
                  <br />
                  elegant &amp; eternal.
                </h1>
                <em>
                  Wild volcanic landscape, the rugged cliffs, the wild nature
                  and beautiful beaches combined with its rich history and
                  traditions make Santorini the gem of Greece.
                </em>
              </div>
              <div className="lp__item lp__mainImg">
                <img
                  className="fit-box"
                  src="https://images.unsplash.com/photo-1497262693247-aa258f96c4f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
                <div className="lp__social">
                  <img
                    src="https://i.ibb.co/19VvYC9/LOGO1.jpg"
                    width="40px"
                    height="40px"
                    alt=""
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              </div>
              <div className="lp__item lp__supportInfo">
                <div className="lp__suportInfo__item lp__suportInfo__text cw">
                  <h2>
                    Santorini is inspiring,
                    <br />
                    elegant &amp; eternal.
                  </h2>

                  <em>
                    Santorini island is highly acclaimed for the dramatic views
                    and stunning sunsets.
                  </em>
                </div>
                <img
                  className="lp__suportInfo__item lp__suportInfo__image"
                  src="https://images.unsplash.com/photo-1519309162334-a2e1188df150?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
              </div>
            </section>
          </div> */}
          <div className="memories-card memories-card--2x2">
            <div className="memories-card__content big-script padding-large">
              <p
                style={{
                  fontFamily: "Sacramento",
                }}
              >
                Travel and see the world with us
              </p>
            </div>
          </div>
          <div className="memories-card memories-card--vertical">
            <div className="memories-card__image">
              <AnimatedImage images={[...shuffle(imgUrls)]} />
            </div>
          </div>
          <div className="memories-card memories-card--2x3">
            <div className="memories-card__top-to-bottom">
              <div className="memories-card__image">
                <AnimatedImage images={[...shuffle(imgUrls)]} />
              </div>
              <div className="memories-card__content padding-mlarge--l">
                <h2>Quisque volutpat.</h2>
                <hr />
                <p>
                  Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
                  nibh. Quisque volutpat condimentum velit.
                </p>
                <div className="memories-card__button">
                  More
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="memories-card">
            <div className="memories-card__image">
              <AnimatedImage images={[...shuffle(imgUrls)]} />
            </div>
          </div>
          <div className="memories-card memories-card--frameless">
            <div className="memories-card__content cw">
              <p>
                <em>
                  Travel is fatal to prejudice, bigotry, and narrow-mindedness.
                </em>
              </p>
              <p>— Mark Twain</p>
            </div>
          </div>
          <div className="memories-card memories-card--horizontal memories-card--frameless">
            <div className="memories-card__content memories-card__content--has-icon">
              <p>
                <i className="memories-card__icon--large fas fa-plane" />
              </p>
              <p>
                <i className="memories-card__icon--large fas fa-motorcycle" />
              </p>
              <p>
                <i className="memories-card__icon--large fas fa-subway" />
              </p>
            </div>
          </div>
          <div className="memories-card memories-card--featured">
            <div className="memories-card__side-by-side--m">
              <div className="memories-card__image">
                <AnimatedImage images={[...shuffle(imgUrls)]} />
              </div>
              <div className="memories-card__content padding-mlarge--l">
                <h2>Quisque volutpat.</h2>
                <hr />
                <p>
                  Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
                  nibh. Quisque volutpat condimentum velit.
                </p>
                <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <div className="memories-card__button">
                  More
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="memories-card memories-card--vertical">
            <div className="memories-card__image">
              <AnimatedImage images={[...shuffle(imgUrls)]} />
            </div>
          </div>
          <div className="memories-card memories-card--horizontal">
            <div className="memories-card__side-by-side">
              <div className="memories-card__image">
                <AnimatedImage images={[...shuffle(imgUrls)]} />
              </div>
              <div className="memories-card__content memories-card__content--has-icon">
                <div>
                  <h2>Ipsum.</h2>
                  <p>
                    <i className="memories-card__icon--large far fa-arrow-alt-circle-right" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="memories-card memories-card--vertical">
            <div className="memories-card__image">
              <AnimatedImage images={[...shuffle(imgUrls)]} />
            </div>
          </div>
          <div className="memories-card memories-card--frameless">
            <div className="memories-card__content cw">
              <p>
                <em>
                  We wander for distraction, but we travel for fulfilment.
                </em>
              </p>
              <p>— Hilaire Belloc</p>
            </div>
          </div>
          <div className="memories-card">
            <div className="memories-card__image">
              <AnimatedImage images={[...shuffle(imgUrls)]} />
            </div>
          </div>
          <div className="memories-card memories-card--2x3">
            <div className="memories-card__top-to-bottom">
              <div className="memories-card__image">
                <AnimatedImage images={[...shuffle(imgUrls)]} />
              </div>
              <div className="memories-card__content padding-mlarge--l">
                <h2>Etiam ultrices.</h2>
                <hr />
                <p>
                  Suspendisse in justo eu magna luctus suscipit. Sed lectus.
                  Quisque cursus, metus vitae pharetra auctor, sem massa mattis
                  sem, at interdum magna augue eget diam.
                </p>
                <div className="memories-card__button">
                  More
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="memories-card memories-card--horizontal memories-card--frameless">
            <div className="memories-card__content memories-card__content--has-icon">
              <p>
                <i className="memories-card__icon--large fas fa-map" />
              </p>
              <p>
                <i className="memories-card__icon--large fas fa-car" />
              </p>
              <p>
                <i className="memories-card__icon--large fas fa-map-marker-alt" />
              </p>
            </div>
          </div>
          <div className="memories-card memories-card--2x2">
            <div className="memories-card__image">
              <AnimatedImage images={[...shuffle(imgUrls)]} />
            </div>
          </div>
          <div className="memories-card memories-card--frameless">
            <div className="memories-card__content cw">
              <p>
                <em>
                  A good traveller has no fixed plans and is not intent on
                  arriving.
                </em>
              </p>
              <p>— Lao Tzu</p>
            </div>
          </div>
          <div className="memories-card memories-card--horizontal memories-card--frameless">
            <div className="memories-card__content big-script cw">
              <p
                style={{
                  fontFamily: "Sacramento",
                }}
              >
                Happy journey
              </p>
            </div>
          </div>
          <div className="memories-card memories-card--horizontal">
            <div className="memories-card__image">
              <AnimatedImage images={[...shuffle(imgUrls)]} />
            </div>
          </div>
          <div className="memories-card memories-card--vertical">
            <div className="memories-card__image">
              <AnimatedImage images={[...shuffle(imgUrls)]} />
            </div>
          </div>
          <div className="memories-card">
            <div className="memories-card__image">
              <AnimatedImage images={[...shuffle(imgUrls)]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Memories;
