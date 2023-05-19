// import React, { useEffect, useRef } from "react"

// function Counter({ from, to }) {
//   const nodeRef = useRef();

//   useEffect(() => {
//     const node = nodeRef.current;

//     const controls = animate(from, to, {
//       duration: 1,
//       onUpdate(value) {
//         node.textContent = value.toFixed(2);
//       }
//     });

//     return () => controls.stop();
//   }, [from, to]);

//   return <p ref={nodeRef}  className="text-white text-[29px]"/>;
// }

// export default Counter;