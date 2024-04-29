import { useState } from "react";

const EventPlanForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    days: 0,
    night: 0,
    price: 0,
    discount: 0,
    popularDest1: { name: "", days: 0 },
    popularDest2: { name: "", days: 0 },
    transferIncluded: false,
    stayIncluded: false,
    mealsIncluded: false,
    sightseeingIncluded: false,
    overview: {
      about: "",
      quickInfo: { route: "", duration: "", startingPoint: "", endPoint: "" },
      otherInfo: [{ title: "", points: [""] }],
      travelVia: { byAir: "", byRail: "", byRoad: "" },
      note: [""],
    },
    itinerary: [
      {
        day: 0,
        mainTitle: "",
        mainDescription: "",
        images: [""],
        sites: [{ name: "", descriptionPoints: [""], images: [""] }],
      },
    ],
    moreDetails: [""],
  });

  const handleInputChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventPlanForm;
