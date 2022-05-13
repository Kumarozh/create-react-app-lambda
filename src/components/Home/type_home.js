import React from "react";
import Typewriter from "typewriter-effect";
function Type2() {
  return (
    <Typewriter
      options={{
        strings: [
          "AmirAli",
          "Phantom",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,

      }}
    />
  );
}
export default Type2;