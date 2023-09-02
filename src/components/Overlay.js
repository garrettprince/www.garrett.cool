// Overlay will handle all 2D text based on user interaction with the objects in Scene.js

import { useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";

// Main Overlay function all other functions are fed through
export default function Overlay({ action, setAction }) {
  return (
    <main className="">
      {/* Navigation - Mainly for x button to get back to main page */}
      {/* <Nav /> */}

      {action != "home" && <XButton action={action} setAction={setAction} />}
      {/* <XButton /> */}
      {action === "new" && (
        <div>
          <ProjectTitle
            action={action}
            setAction={setAction}
            title="Blue Block"
            subtitle="Coming 2025"
          />
          <InfoBubble input="I've been working on the Panic Playdate engine for a while now and it's cool to see it start working soon." />
        </div>
      )}
      {/* <ToggleButton action={action} setAction={setAction} /> */}
    </main>
  );
}

// function Nav() {
//   return <h1 className="">Test</h1>;
// }

function ProjectTitle({ title, subtitle, action, setAction }) {
  // FIND OUT WHY NOT WORKING
  //   const springs = useSpring({
  //     from: { x: 0 },
  //     to: { x: 100 },
  //   });
  return (
    <motion.div
      initial={{ y: 4, opacity: 0 }}
      animate={{ y: -2, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.9 }}
      className="absolute w-40 text-center top-20 left-0 right-0 mx-auto"
    >
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="">{subtitle}</p>
    </motion.div>

    // FIND OUT WHY NOT WORKING //
    // <animated.div
    //   className="absolute w-40 text-center top-20 left-0 right-0 mx-auto"
    //   style={{ ...springs }}
    // >
    //   <h1 className="font-bold text-3xl">{title}</h1>
    //   <p className="">{subtitle}</p>
    // </animated.div>
  );
}

function XButton({ action, setAction }) {
  return (
    <div>
      <XMarkIcon
        className="absolute top-1 right-1 h-10 w-10"
        onClick={() => setAction("home")}
      />
    </div>
  );
}

function InfoBubble({ action, setAction, input }) {
  let i = 0;
  let txt = input;
  let speed = 35;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("info").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  function typeWriterAction() {
    if (action === "new") {
      return typeWriter();
    }
  }

  return (
    <motion.div
      id="info"
      initial={{ y: 4, opacity: 0 }}
      animate={{ y: -2, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.9 }}
      className="absolute w-64 rounded-xl text-left text-xs px-4 py-2 bottom-10 left-0 right-0 mx-auto ml-28 bg-black/10"
      onClick={typeWriter}
    >
      hey
    </motion.div>
  );
}
