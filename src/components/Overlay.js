// Overlay will handle all 2D text based on user interaction with the objects in Scene.js

import { useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { motion } from "framer-motion";
import {
  XMarkIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";

// Main Overlay function all other functions are fed through
export default function Overlay({ action, setAction }) {
  return (
    <main className="">
      {/* Navigation - Mainly for x button to get back to main page */}
      {/* <Nav /> */}

      {action != "home" && (
        <div>
          <XButton action={action} setAction={setAction} />
          <NextButton action={action} setAction={setAction} />
          <PreviousButton action={action} setAction={setAction} />
        </div>
      )}

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
    </main>
  );
}

function ProjectTitle({ title, subtitle, action, setAction }) {
  return (
    <motion.div
      initial={{ y: 4, opacity: 0 }}
      animate={{ y: -2, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
      className="absolute w-40 text-center top-20 left-0 right-0 mx-auto"
    >
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="mono">{subtitle}</p>
    </motion.div>
  );
}

function XButton({ action, setAction }) {
  return (
    <div>
      <XMarkIcon
        className="absolute top-5 right-5 h-10 w-10"
        onClick={() => setAction("home")}
      />
    </div>
  );
}

function NextButton({ action, setAction }) {
  return (
    <div>
      <ArrowRightIcon
        className="absolute top-1/2 right-5 h-10 w-10"
        onClick={() =>
          action === "portfolio"
            ? setAction("montanahead")
            : action === "montanahead"
            ? setAction("playDate")
            : action === "playDate"
            ? setAction("contactPhone")
            : action === "contactPhone"
            ? setAction("nameTag")
            : action === "nameTag"
            ? setAction("longAddition")
            : action === "longAddition"
            ? setAction("portfolio")
            : action === "portfolio"
        }
      />
    </div>
  );
}

function PreviousButton({ action, setAction }) {
  return (
    <div>
      <ArrowLeftIcon
        className="absolute top-1/2 left-5 h-10 w-10"
        onClick={() =>
          action === "portfolio"
            ? setAction("longAddition")
            : action === "longAddition"
            ? setAction("nameTag")
            : action === "nameTag"
            ? setAction("contactPhone")
            : action === "contactPhone"
            ? setAction("playDate")
            : action === "playDate"
            ? setAction("montanahead")
            : action === "montanahead"
            ? setAction("portfolio")
            : action === "portfolio"
        }
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
      className="absolute w-64 ml-[30%] rounded-xl text-left text-xs px-4 py-2 bottom-10 left-0 right-0 mx-auto my-auto mb-10 bg-white shadow-xl sm:ml-[35%] md:ml-[40%]"
      onClick={typeWriter}
    >
      hey
    </motion.div>
  );
}
