import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Banner = ({ image, title, buttonContent }) => {
  const titleVariant = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <AnimatePresence>
      <div className="container flex justify-center items-center gap-20 my-0 mx-auto">
        <div>
          <img
            src={image}
            className="w-full h-full object-cover justify-self-center"
          />
        </div>
        <div className="max-w-prose">
          <motion.h1
            variants={titleVariant}
            className="text-5xl mb-9 font-semibold font-rubik text-shark-950"
          >
            {title}
          </motion.h1>
          <p className="leading-5 text-shark-700 tracking-wide font-robotoMono text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
            neque placerat, euismod sapien quis, lobortis tortor. Duis
            pellentesque egestas euismod. Suspendisse cursus tincidunt nibh,
            vitae convallis sem imperdiet non. Praesent egestas, dolor at
            scelerisque imperdiet, quam metus aliquam tellus, sit amet ultricies
            nunc nunc in nisl.
          </p>
          <Link to="/shop">
            <button className="bg-shark-950 uppercase text-alabaster-50 font-robotoMono font-normal text-sm tracking-wide rounded-none px-8 py-2 disabled:bg-shark-200 disabled:text-shark-700 hover:bg-shark-800 active:bg-shark-700 my-6">
              {buttonContent}
            </button>
          </Link>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Banner;
