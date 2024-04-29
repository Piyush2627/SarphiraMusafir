// import ImagesData from "../../../mock_data/landingGalleryImages.json";
import AnimatedImage from "./AnimatedImage";
import { products } from "../../mock_data/product";

export function shuffle(inArray: any) {
  let array = [...inArray];
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function LandingGallery() {
  const SelectedImagesArray = products.slice(0, 11);

  return (
    <>
      <div className="parent">
        {SelectedImagesArray.map((item, index) => {
          return (
            <div
              className={`div${index + 1} landing-gallery-img`}
              key={item.name}
            >
              <AnimatedImage images={[...shuffle(products)]} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default LandingGallery;
