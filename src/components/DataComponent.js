import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFn } from "../actions/dataActions";
import { CART_COUNT_ACTION } from "../actions/cartActions";

const DataComponent = () => {
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state?.userReducer);

  const { loading, data, error } = dataState;

  useEffect(() => {
    dispatch(fetchFn());
  }, []);

  const handleClick = (data) => {
    console.log(data);
    dispatch({ type: CART_COUNT_ACTION, payload: data });
  };
  // console.log(data.length);

  if (loading) return <h1>loading...</h1>;
  if (error) return <h1>{error}...</h1>;
  return (
    <div>
      {data &&
        data.map((d) => (
          <ul key={d.id}>
            <li>{d.title}</li>
            <img src={d.image} alt={d.title} />
            {/* {console.log(d.length)} */}
            <button onClick={() => handleClick(d)}>add to cart</button>
          </ul>
        ))}
    </div>
  );
};

export default DataComponent;
