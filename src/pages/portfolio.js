import { XMarkIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <motion.div
      initial={{ y: 4, opacity: 0 }}
      animate={{ y: -2, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
      className="flex flex-col mt-6 mx-4"
    >
      <section className="flex justify-between items-center">
        <Link href="/">
          <ArrowLeftIcon className="h-7 w-7" />
        </Link>
        <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
          Portfolio
        </h1>
        <XMarkIcon className="h-7 w-7 opacity-0 " />
      </section>
      <section id="projects" className="mt-7 mx-1">
        <div className="text-3xl font-thin space-y-3">
          <button>Garrett.cool</button>
          <h1>Long Addition</h1>
          <h1>Chat App</h1>
          <h1>Google Clone</h1>
          <h1>Junk</h1>
          <h1>Automio</h1>
          <h1>Montanahead</h1>
          <h1>Twitter Clone</h1>
          <h1>QR Code Creator</h1>
          <h1>Joody</h1>
          <h1>2D RPG Concept</h1>
          <h1>Airbnb Clone</h1>
        </div>
      </section>
    </motion.div>
  );
}
