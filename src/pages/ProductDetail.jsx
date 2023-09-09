import { useParams } from "react-router-dom";
import { allData } from "../assets/data/data";
import { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import { CartContext } from "../context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ProductDetail = () => {
  const { id } = useParams();
  const cartContext = useContext(CartContext);
  const selectedProduct = allData.find((product) => product.id === id);
  const recommendProduct = allData.filter(
    (product) =>
      product.id !== id && product.category === selectedProduct.category
  );
  const generateRecommend = recommendProduct
    .sort(() => Math.random() - Math.random())
    .slice(0, 4);
  const randomImg = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const addItemToCart = () => {
    const {
      id,
      name,
      Gallery,
      price,
      salesPrice,
      onSale,
      category,
      description,
      inStock,
    } = selectedProduct;
    cartContext.toggleIsCartActive();
    cartContext.handleAddItemToCart({
      id,
      name,
      Gallery,
      price,
      salesPrice,
      onSale,
      category,
      description,
      inStock,
    });
  };

  const content = {
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
    <motion.section exit={{ opacity: 0 }}>
      <motion.div
        variants={content}
        animate="animate"
        initial="initial"
        className="grid grid-cols-6 gap-6 mt-10 justify-center"
      >
        <div className="flex mx-auto col-start-2 col-span-2">
          <Swiper
            slidesPerView={3}
            modules={[Thumbs]}
            spaceBetween={"20%"}
            onSwiper={setThumbsSwiper}
            style={{ height: 300, marginLeft: 10, marginRight: 0 }}
            direction="vertical"
            watchSlidesProgress={true}
            slidesOffsetAfter={40}
          >
            {selectedProduct.Gallery.map((image, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="px-2 cursor-pointer hover:opacity-50 transition-opacity duration-100 ease-in"
                >
                  <img src={image} className="h-28 w-full object-cover" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            style={{
              width: 400,
              height: 500,
              margin: 0,
            }}
            className=""
            direction="vertical"
            modules={[Scrollbar, Thumbs, Mousewheel]}
            scrollbar={true}
            mousewheel={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              autoScrollOffset: 1,
            }}
          >
            {selectedProduct.Gallery.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    className="h-full w-full mx-auto object-cover"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <motion.div
          variants={content}
          className="flex flex-col mx-auto col-start-4 col-span-2"
        >
          {selectedProduct.onSale ? (
            <div className="py-1 text-sm font-bold font-rubik px-3 bg-teak-200 text-teak-800 rounded-none tracking-wide mb-4 w-16 text-center">
              SALE
            </div>
          ) : (
            ""
          )}
          <h1 className="text-shark-950 font-robotoMono text-3xl font-semibold mb-6">
            {selectedProduct.name}
          </h1>
          {selectedProduct.onSale ? (
            <p className="text-2xl/5 text-teak-400 font-robotoMono font-bold">
              ${selectedProduct.salesPrice()}{" "}
              <s className="text-lg font-semibold text-gray-400 font-robotoMono">
                ${selectedProduct.price}
              </s>
            </p>
          ) : (
            <p className="text-2xl/5 font-robotoMono font-bold text-teak-400">
              ${selectedProduct.price}
            </p>
          )}
          <div className="my-6">
            <button
              onClick={addItemToCart}
              disabled={!selectedProduct.inStock}
              className="bg-shark-950 text-alabaster-50 font-robotoMono font-normal text-sm tracking-wide rounded-none px-8 py-2 disabled:bg-shark-200 disabled:text-shark-700 hover:bg-shark-800 active:bg-shark-700 mb-6"
            >
              {selectedProduct.inStock ? "ADD TO CART" : "OUT OF STOCK"}
            </button>
            <ToastContainer
              position="bottom-center"
              autoClose={3000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover={false}
              theme="dark"
            />
            <h2 className="text-shark-800 font-robotoMono text-base font-medium mb-6 underline decoration-teak-400 underline-offset-8">
              DESCRIPTION
            </h2>
            {selectedProduct.description.split("\n").map((bullet, index) => (
              <li
                className="text-shark-400 tracking-wide font-robotoMono font-normal mb-0.5 text-sm"
                key={index}
              >
                {bullet}
              </li>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <div>
        <h2 className="text-shark-800 font-rubik text-2xl text-center font-semibold my-10 underline decoration-teak-400 underline-offset-8 tracking-wide">
          YOU MAY ALSO LIKE
        </h2>
        <div className="grid grid-cols-6 gap-8 m-10 justify-center">
          {generateRecommend.map((i) => {
            return (
              <Link
                to={`/product/${i.id}`}
                key={i.id}
                className="first:col-start-2 last:col-end-6"
              >
                <img
                  src={randomImg(i.Gallery)}
                  className="w-full object-contain"
                />
                <p className="font-robotoMono text-shark-700 text-lg/5 font-normal hover:text-shark-400 my-5 tracking-wide">
                  {i.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
