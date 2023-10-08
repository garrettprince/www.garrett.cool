/* eslint-disable @next/next/no-img-element */
import { XMarkIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CurrentProject({ currentProject, setCurrentProject }) {
  return (
    <div className="">
      {currentProject === "Garrett.cool" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-5">
              <div className="flex space-x-3 font-black text-xs text-black/40">
                <Link
                  href="https://www.spline.design/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1 "
                >
                  <p>SPLINE</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696674575/Garrett.cool%20Assets/Group_12_tfjsif.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
                <Link
                  href="https://www.cloudinary.com/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>CLOUDINARY</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_5_k24kkv.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
                <Link
                  href="https://www.nextjs.org/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1 "
                >
                  <p>NEXT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      )}
      {currentProject === "Long Addition" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-5">
              <div className="flex space-x-3 font-medium text-sm text-black/40">
                <Link
                  href="https://www.cloudinary.com/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>CLOUDINARY</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_5_k24kkv.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>
                <Link
                  href="https://www.nextjs.org/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>NEXT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      )}
      {currentProject === "Chat App" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-5">
              <div className="flex space-x-3 font-medium text-sm text-black/40">
                <Link
                  href="https://www.supabase.com/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>SUPABASE</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_2_povwly.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>
                <Link
                  href="https://www.nextjs.org/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>NEXT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      )}
      {currentProject === "Google Clone" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-5">
              <div className="flex space-x-3 font-medium text-sm text-black/40">
                <Link
                  href="https://www.nextjs.org/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>NEXT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      )}
      {currentProject === "Junk" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-5">
              <div className="flex space-x-3 font-medium text-sm text-black/40">
                <Link
                  href="https://www.supabase.com/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>SUPABASE</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_2_povwly.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>
                <Link
                  href="https://www.nextjs.org/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>NEXT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      )}
      {currentProject === "Automio" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-5">
              <div className="flex space-x-3 font-medium text-sm text-black/40">
                <Link
                  href="https://www.airplane.dev/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>AIRPLANE</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_11_uomuo7.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>

                <Link
                  href=""
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>JAVASCRIPT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696674948/Garrett.cool%20Assets/Group_14_zdxglb.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      )}
      {currentProject === "Montanahead" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-5">
              <div className="flex space-x-3 font-medium text-sm text-black/40">
                <Link
                  href="https://www.cloudinary.com/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>CLOUDINARY</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_5_k24kkv.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>
                <Link
                  href="https://www.svelte.dev/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>SVELTE</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_6_xoeq4q.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      )}
      {currentProject === "Twitter Clone" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-5">
              <div className="flex space-x-3 font-medium text-sm text-black/40">
                <Link
                  href="https://www.sanity.io/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>SANITY</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_3_ao7mbv.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>
                <Link
                  href=""
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>TYPESCRIPT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_9_rcxhyx.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>
                <Link
                  href="https://www.nextjs.org/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>NEXT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      )}
      {currentProject === "QR Code Creator" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-5">
              <div className="flex space-x-3 font-medium text-sm text-black/40">
                <Link
                  href="https://www.python.org/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>PYTHON</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696674574/Garrett.cool%20Assets/Group_13_rqpgp7.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      )}
      {currentProject === "Joody" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-5">
              <div className="flex space-x-3 font-medium text-sm text-black/40">
                <Link
                  href="https://discord.js.org/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>DISCORD.JS</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_10_txhadp.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>
                <Link
                  href=""
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>JAVASCRIPT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696674948/Garrett.cool%20Assets/Group_14_zdxglb.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      )}
      {currentProject === "Airbnb Clone" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-5">
              <div className="flex space-x-3 font-medium text-sm text-black/40">
                <Link
                  href="https://www.mapbox.com/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>MAPBOX</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696686549/Garrett.cool%20Assets/Group_15_i4qhnn.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>

                <Link
                  href="https://www.nextjs.org/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>NEXT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      )}
    </div>
  );
}
