type ImageData = {
  name?: string;
  url: string;
};
type AnimatedImageProp = {
  images: ImageData[];
  showName?: boolean;
};

function AnimatedImage({ images, showName = false }: AnimatedImageProp) {
  return (
    <div className="gallery">
      <div className="gallery_items">
        {images.map((item) => {
          return (
            <figure className="gallery_item">
              <img src={item.url} />
              {showName && <span>{item?.name}</span>}
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export default AnimatedImage;
