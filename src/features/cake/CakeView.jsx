import { useSelector, useDispatch } from "react-redux";
import { ordered, reStocked } from "./cakeSlice";

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.noOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of cakes {numOfCakes}</h1>
      <button
        onClick={() => {
          dispatch(ordered());
        }}>
        Orderd cake
      </button>
      <button
        onClick={() => {
          dispatch(reStocked(5));
        }}>
        Restock cake
      </button>
    </div>
  );
};

export default CakeView;
