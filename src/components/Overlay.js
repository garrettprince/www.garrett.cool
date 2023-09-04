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
      {action === "nameTag" && (
        <div>
          <ProjectTitle
            action={action}
            setAction={setAction}
            title="Blue Block"
            subtitle="Coming 2025"
          />
          <TextBubble input="This is the bubble for the nametag icon and we'll see what it looks like with a few lines of text here and there." />
        </div>
      )}
      {action === "playDate" && (
        <div>
          <ProjectTitle
            action={action}
            setAction={setAction}
            title="PlayDate"
            subtitle="Coming 2026"
          />
          <TextBubble input="This is yet another test to see if these different blocks work with different state." />
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
      transition={{ ease: "easeOut", duration: 0.8 }}
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
    <div className="">
      <XMarkIcon
        className="absolute top-1 right-1 h-10 w-10"
        onClick={() => setAction("home")}
      />
    </div>
  );
}

function TextBubble({ action, setAction, input }) {
  let i = 0;
  let txt = input;
  let speed = 25;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("info").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  function typeWriterAction() {
    if (action === "nameTag") {
      return typeWriter();
    }
  }

  return (
    <motion.div
      id="info"
      initial={{ y: 4, opacity: 0 }}
      animate={{ y: -2, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.9 }}
      className="absolute w-80 ml-[30%] rounded-xl text-left text-xs px-4 py-2 bottom-10 left-0 right-0 mx-auto my-auto mb-10 bg-white shadow-xl sm:ml-[35%] md:ml-[40%]"
      onClick={typeWriter}
    >
      hey
    </motion.div>
  );
}
