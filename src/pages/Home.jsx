import { Link } from "react-router-dom";
import About from "../components/About";
import Banner from "../components/Banner";
import { bottomImages } from "../util/import-bottom-imgs";
import { outerwearImages } from "../util/import-outerwear-imgs";
import { dressImages } from "../util/import-dress-imgs";
import { topImages } from "../util/import-top-imgs";
import bannerCarouselImage1 from "../assets/images/homepage-imgs/362940537_286097673798202_7907229304080429769_n.jpg";
import bannerCarouselImage2 from "../assets/images/homepage-imgs/362871593_6524684420930762_8463438665980157740_n.jpg";
import bannerCarouselImage3 from "../assets/images/homepage-imgs/362366445_1713668272380230_332681053274808234_n.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { onSaleData } from "../assets/data/data";
import instaImage1 from "../assets/images/homepage-imgs/336052588_1571848143220673_1445418883682451612_n.jpg";
import instaImage2 from "../assets/images/homepage-imgs/340800215_1378568402933608_4596148192320690159_n.jpg";
import instaImage3 from "../assets/images/homepage-imgs/346035019_1693314034451334_3953491993601256035_n.jpg";
import instaImage4 from "../assets/images/homepage-imgs/351803147_857031482705354_2822084865546613453_n.jpg";
import instaImage5 from "../assets/images/homepage-imgs/361403930_798819755272975_9098386384308449878_n.jpg";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import InitialTransition from "../util/InitialTransition";

const Home = ({ firstRender }) => {
  const content = (firstRender) => ({
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: firstRender.current ? 2.8 : 0,
      },
    },
  });

  const products = {
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
      {firstRender.current && <InitialTransition />}

      <motion.div
        initial="initial"
        animate="animate"
        variants={content(firstRender)}
        className="space-y-12"
      >
        <motion.section variants={products} className="text-gray-700 body-font">
          <Swiper
            style={{
              "--swiper-pagination-color": "#000",
            }}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Banner
                image={bannerCarouselImage1}
                title={"Comfortable, Stylish and Carefree."}
                buttonContent={"Shop Now →"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Banner
                image={bannerCarouselImage2}
                title={"Wardrobe Classics You Should Have."}
                buttonContent={"Browse Catalog →"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Banner
                image={bannerCarouselImage3}
                title={"Clothes Made For You."}
                buttonContent={"Discover More →"}
              />
            </SwiperSlide>
          </Swiper>
          <h2 className="text-center text-3xl font-semibold text-shark-950 tracking-wide font-rubik mt-8 mb-4">
            SHOP OUR LATEST STYLES
          </h2>
          <div className="grid grid-cols-4 gap-10 mx-16 mb-14 text-shark-950 text-center font-rubik tracking-wide">
            <div>
              <img src={topImages.contouringSquareSlimTShirt3} />
              <p className="text-xl font-medium mt-2 hover:text-shark-600">
                TOP
              </p>
            </div>
            <div>
              <img src={bottomImages.pintTightFitSaintDenimShorts2} />
              <p className="text-xl font-medium mt-2 hover:text-shark-600">
                BOTTOM
              </p>
            </div>
            <div>
              <img src={dressImages.bustierOverallPintuckDress5} />
              <p className="text-xl font-medium mt-2 hover:text-shark-600">
                DRESS
              </p>
            </div>
            <div>
              <img src={outerwearImages.againHandmadeSingleRobeCoat3} />
              <p className="text-xl font-medium mt-2 hover:text-shark-600">
                OUTERWEAR
              </p>
            </div>
          </div>
          <div className="mx-14 mb-20 mt-5">
            <h3 className="text-3xl font-semibold text-shark-950 tracking-wide font-rubik mb-4">
              FLASH SALE!
            </h3>

            <Swiper
              style={{
                "--swiper-navigation-color": "#ccc",
              }}
              slidesPerView={5}
              spaceBetween={20}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {onSaleData.map((i) => {
                return (
                  <SwiperSlide key={i.id}>
                    <Link to={`/product/${i.id}`}>
                      <img
                        src={i.Gallery[1]}
                        className="w-full object-contain"
                      />
                      <p className="font-robotoMono text-shark-700 text-lg/5 font-normal hover:text-shark-400 my-5 tracking-wide">
                        {i.name}
                      </p>
                      <p className="text-shark-950 font-bold text-lg/5 hover:text-shark-700 tracking-wide">
                        ${i.salesPrice()}{" "}
                        <s className="text-gray-400 font-semibold text-sm">
                          $ {i.price}
                        </s>
                      </p>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <About />
          <div className="follow-wrapper mt-20 text-center font-rubik">
            <p className="text-2xl font-semibold text-shark-950 tracking-wide">
              CHECK OUT OUR INSTAGRAM @530.STYLE
            </p>
            <div className="grid grid-cols-5 gap-5 mx-10 mb-10 mt-4">
              <img src={instaImage1} />
              <img src={instaImage2} />
              <img src={instaImage3} />
              <img src={instaImage4} />
              <img src={instaImage5} />
            </div>
          </div>
        </motion.section>
      </motion.div>
    </motion.section>
  );
};

export default Home;
