import { Link } from "react-router-dom";

function Attribute() {
  return (
    <p className="text-center font-light text-sm  hover:text-slate-300 ">
      <Link to="https://storyset.com/" target="_blank">
        Illustrations by Storyset
      </Link>
    </p>
  );
}

export default Attribute;
