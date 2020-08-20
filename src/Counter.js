import React from "react";
import { connect } from "react-redux";

const Counter = (props) => {
  console.log(props);
  const increment = () => {
    props.dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    props.dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className='buttons'>
        <button onClick={() => decrement()}>-</button>
        <span className="count">{props.count}</span>
        <button onClick={() => increment()}>+</button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(Counter);
