import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { motion } from "framer-motion";
import {
  XMarkIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";
import { useEffect } from "react";
import Link from "next/link";

export default function Overlay({ action, setAction }) {
  return (
    <main className="">
      {action != "home" && (
        <div>
          <XButton action={action} setAction={setAction} />
          <NextButton action={action} setAction={setAction} />
          <PreviousButton action={action} setAction={setAction} />
        </div>
      )}

      {action === "portfolio" && (
        <div>
          <ProjectTitle
            action={action}
            setAction={setAction}
            title="Portfolio"
            subtitle="Things I do and don't know"
          />
          <TextBubble input="This is the bubble for the nametag icon and we'll see what it looks like with a few lines of text here and there." />
        </div>
      )}
      {action === "montanahead" && (
        <div>
          <ProjectTitle
            action={action}
            setAction={setAction}
            title="Demos"
            subtitle="I made some music a while ago"
          />
          <TextBubble input="This is the bubble for the nametag icon and we'll see what it looks like with a few lines of text here and there.  And also" />
        </div>
      )}
      {action === "playDate" && (
        <div>
          <ProjectTitle
            action={action}
            setAction={setAction}
            title="Playdate Development"
            subtitle="Coming 2025"
          />
          <Visit
            action={action}
            setAction={setAction}
            website="https://www.longaddition.com"
          />
          <TextBubble input="Not much to say on this yet, other than my siblings and I are in the process of making a game in the next few years or so. More to come." />
        </div>
      )}
      {action === "contactPhone" && (
        <div>
          <ProjectTitle
            action={action}
            setAction={setAction}
            title="Contact"
            subtitle="Much obliged"
          />
          <TextBubble input="This is the bubble for the nametag icon and we'll see what it looks like with a few lines of text here and there." />
        </div>
      )}
      {action === "nameTag" && (
        <div>
          <ProjectTitle
            action={action}
            setAction={setAction}
            title="About Me"
            subtitle="It's all true"
          />
          <TextBubble input="This is the bubble for the nametag icon and we'll see what it looks like with a few lines of text here and there." />
        </div>
      )}
      {action === "longAddition" && (
        <div>
          <ProjectTitle
            action={action}
            setAction={setAction}
            title="Long Addition"
            subtitle="A man and his blog"
          />
          <Visit
            action={action}
            setAction={setAction}
            website="https://www.longaddition.com"
          />
          <TextBubble input="This is the bubble for the nametag icon and we'll see what it looks like with a few lines of text here and there." />
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
      className="absolute w-64 text-center top-[1.6rem] left-0 right-0 mx-auto"
    >
      <h1 className="font-light font-sans  text-4xl mb-1">{title}</h1>
      {/* <p className=" font-sans text-md">{subtitle}</p> */}
    </motion.div>
  );
}

function XButton({ action, setAction }) {
  return (
    <div>
      <XMarkIcon
        className="absolute top-8 right-5 h-7 w-7 "
        onClick={() => setAction("home")}
      />
    </div>
  );
}

function NextButton({ action, setAction }) {
  return (
    <div>
      <ArrowRightIcon
        className="absolute top-[40%] right-5 h-7 w-7 "
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
        className="absolute top-[40%] left-5 h-7 w-7 "
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

function Visit({ action, setAction, website }) {
  return (
    <div>
      <motion.a
        initial={{ y: 4, opacity: 0 }}
        animate={{ y: -2, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Link
          href={website}
          className={
            action === "playDate"
              ? "absolute py-1 px-2 text-sm text-center  bg-white mx-auto left-0 right-0 top-[8rem] w-20 font-black italic border-black border-1 border"
              : "absolute py-1 px-2 text-sm text-center border-black border-1 border bg-white mx-auto left-0 right-0 top-[5.4rem] w-20 font-black italic"
          }
        >
          VISIT
        </Link>
      </motion.a>
    </div>
  );
}

// function TextBubble({ action, setAction, input }) {
//   useEffect(() => {
//     let i = 0;
//     let txt = input;
//     let speed = 25;

//     function typeWriter() {
//       if (i < txt.length) {
//         document.getElementById("info").innerHTML += txt.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//       }
//     }

//     typeWriter();
//   }, [input]);

//   console.log(input);

//   return (
//     <motion.div
//       id="info"
//       initial={{ y: 4, opacity: 0 }}
//       animate={{ y: -2, opacity: 1 }}
//       transition={{ ease: "easeOut", duration: 0.9 }}
//       className="absolute w-64 ml-[30%] rounded-xl text-left text-xs px-4 py-2 bottom-10 left-0 right-0 mx-auto my-auto mb-10  sm:ml-[35%] md:ml-[40%]"
//     ></motion.div>
//   );
// }

function TextBubble({ action, setAction, input }) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    let txt = input;
    let speed = 25;

    function typeWriter() {
      if (i < txt.length) {
        setTypedText((prevTypedText) => prevTypedText + txt.charAt(i));
        i++;
        setTimeout(typeWriter, speed);
      }
      //   for (let i = 0; i < input.length; i++) {
      //     setTypedText((typedText) => typedText + txt.charAt(i));
      //   }
    }

    typeWriter();

    return () => clearTimeout(typeWriter);
  }, [input]);

  return (
    <motion.div
      id="info"
      initial={{ y: 4, opacity: 0 }}
      animate={{ y: -2, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.9 }}
      className="absolute w-64 ml-[30%] rounded-xl text-left text-sm px-4 py-2 bottom-10 left-0 right-0 mx-auto my-auto mb-10  sm:ml-[35%] md:ml-[40%]  font-sans font-light "
    >
      {typedText}
    </motion.div>
  );
}
