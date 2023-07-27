import { useSelector, useDispatch } from "react-redux";
import { ordered, reStocked } from "./icecreamSlice";
import { useState } from "react";

const IcecreamView = () => {
  const noOfIcecreams = useSelector((state) => state.icecream.noOfIcecreams);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>Number of ice-creams are {noOfIcecreams} </h1>
      <button
        onClick={() => {
          dispatch(ordered());
        }}>
        Ordered icecream
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(parseInt(e.target.value || 0));
        }}
      />
      <button
        onClick={() => {
          dispatch(reStocked(value));
        }}>
        Restock icecream
      </button>
    </div>
  );
};

export default IcecreamView;
