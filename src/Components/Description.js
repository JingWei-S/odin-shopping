import { useParams } from "react-router-dom";

// this is for the description of each plush toy
const Description = () => {
  const { id } = useParams();
  return <div>Item {id}</div>;
};

export default Description;
