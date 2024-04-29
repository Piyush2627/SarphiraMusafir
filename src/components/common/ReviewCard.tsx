import colonSVG from "../../assets/svg/double-colon.svg";

type ReviewCardProps = {
  id: number;
  name: string;
  designation: string;
  review: string;
};

function ReviewCard({ name, designation, review }: ReviewCardProps) {
  return (
    <div className="rectangle-parent">
      <div className="instance-child" />
      <img
        className="image-6-icon"
        alt=""
        src="https://i.ibb.co/XYQKV1P/review.jpg"
      />
      <div className="samir-fuddi-parent">
        <h4 className="samir-fuddi">{name}</h4>
        <p className="treker">{designation}</p>
      </div>
      <p className="amet-minim-mollit">{review}</p>
      <div className="cidouble-quotes-l">
        <img className="vector-icon" alt="" src={colonSVG} />
      </div>
    </div>
  );
}

export default ReviewCard;
