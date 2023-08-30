import React from "react";
import { useSelector } from "react-redux";

const Count = () => {
  let count = useSelector((state) => state.counter.value);
  return (
    <>
      {count >= 0 && <div>{count}</div>}
      {count < 0 && (
        <div>
          <div>
            i dont know the Counting below {count < 0 ? (count = 0) : "null"}
            {console.log(count)}
          </div>
        </div>
      )}
    </>
  );
};

export default Count;
