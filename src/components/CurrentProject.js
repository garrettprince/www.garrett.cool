/* eslint-disable @next/next/no-img-element */
import { XMarkIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CurrentProject({ currentProject, setCurrentProject }) {
  return (
    <div>
      {currentProject === "Garrett.cool" && (
        <div className=" bg-white z-10">
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
              {/* <p className="font-light text-center mb-1">STACK</p> */}
              <div className="flex space-x-3 font-medium text-sm text-black/40">
                <Link
                  href="https://www.spline.design/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>SPLINE</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696674575/Garrett.cool%20Assets/Group_12_tfjsif.png"
                    alt=""
                    className="h-6 w-6"
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
                {/* <img
                  src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_5_k24kkv.png"
                  alt=""
                  className="h-6 w-6"
                /> */}
                {/* <img
                  src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png"
                  alt=""
                  className="h-6 w-6"
                /> */}
              </div>
            </section>
          </motion.div>
        </div>
      )}
    </div>
  );
}
