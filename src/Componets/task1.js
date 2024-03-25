import React from "react";

function App2() {
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) {
    timeOfDay = 'morning';
  } else if (hours >= 12 && hours < 20) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'night';
  }

  return (
    <>
      <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjQ4MS1iYi1uaW5nLTEyYl8xLmpwZw.jpg" className="m-auto p-auto mt-6 rotator-fade text-primary"></img>
      <h1 className="text-4xl text-center absolute top-[180px] left-[350px]">Hello :Good {timeOfDay}!</h1>
    </>
  )
};

export default App2;