// import { useState } from "react";
// import Button from "./Button";
// function Counter() {
//   // State
//   // useState() [getter,setter]
//   // var count = 1;
//   var [count, setCount] = useState(1);

//   const handleIncrement = () => {
//     console.log("Increment clicked");
//     setCount(count + 1);
//   };
  
//   const handleDecrement = () => {
//     console.log("Decrement clicked");
//     if (count === 0) {
//       return;
//     }
//     setCount(count - 1);
//   };

//   return (
//     <>
//       <h1 style={{color: "red", fontSize: "72px"}}>Count Value: {count}</h1>
//       {/* <button className="btn inc-btn" onClick={handleIncrement}>Increment</button>
//       <button className="btn dec-btn" onClick={handleDecrement}>Decrement</button> */}
//       <Button btnText="Increment" type="primary" fn={handleIncrement} />
//       <Button btnText="Decrement" type="danger" fn={handleDecrement} />
//     </>
//   );
// }

// export default Counter;