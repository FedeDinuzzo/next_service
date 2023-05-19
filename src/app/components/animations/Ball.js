// const Ball = ({ 
//   w, 
//   h, 
//   cx, 
//   cy,
//   r, r2,
//   cyAnimate, 
//   duration
// }) => (
//   <svg width={w} height={h} xmlns="http://www.w3.org/2000/svg">
//     <defs>
//       <radialGradient
//         id="gradient1"
//         fr={0.2}
//         fx={0.32}
//         fy={0.32}
//         r={0.7}
//         animate={{ fr: 0.05, fx: 0.2, fy: 0.35, r: 0.6 }}
//         transition={{
//           repeat: Infinity,
//           repeatType: "mirror",
//           ease: "easeInOut",
//           duration: 3,
//         }}
//       >
//         <stop offset="0%" stopColor="#DEF9FA" />
//         <stop offset="100%" stopColor="#33BBCF" />
//       </radialGradient>
//     </defs>

//     <circle
//       fill="url(#gradient1)"
//       cx={cx}
//       cy={cy}
//       r={r}
//       animate={{ cy: cyAnimate }}
//       transition={{
//       repeat: Infinity,
//       repeatType: "mirror",
//       ease: "easeInOut",
//       duration: duration,
//       }}
//     />
//   </svg>
// );

// export default Ball;
