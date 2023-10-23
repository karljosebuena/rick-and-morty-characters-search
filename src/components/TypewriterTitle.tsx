"use client";

import Typewriter from "typewriter-effect";

const TypewriterTitle = () => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("💖 Your favorite Rick and Morty Characters")
          .pauseFor(1000)
          .deleteAll()
          .typeString("🔬 Can be easily searched")
          .start();
      }}
    />
  );
};

export default TypewriterTitle;