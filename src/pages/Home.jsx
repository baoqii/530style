import { Link } from "react-router-dom";
import { bottomImages } from "../util/import-bottom-imgs";
import { outerwearImages } from "../util/import-outerwear-imgs";
import { dressImages } from "../util/import-dress-imgs";
import { topImages } from "../util/import-top-imgs";
import bannerCarouselImage1 from "../assets/images/homepage-imgs/362940537_286097673798202_7907229304080429769_n.jpg";
import bannerCarouselImage2 from "../assets/images/homepage-imgs/362871593_6524684420930762_8463438665980157740_n.jpg";
import bannerCarouselImage3 from "../assets/images/homepage-imgs/362366445_1713668272380230_332681053274808234_n.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CountUp from "react-countup";
import aboutImageStackBottom from "../assets/images/homepage-imgs/361568338_218556881147586_3787286665415119075_n.jpg";
import aboutImageStackTop from "../assets/images/homepage-imgs/363276203_208065555220783_6188811700696390263_n.jpg";
import { onSaleData } from "../assets/data/data";
import instaImage1 from "../assets/images/homepage-imgs/336052588_1571848143220673_1445418883682451612_n.jpg";
import instaImage2 from "../assets/images/homepage-imgs/340800215_1378568402933608_4596148192320690159_n.jpg";
import instaImage3 from "../assets/images/homepage-imgs/346035019_1693314034451334_3953491993601256035_n.jpg";
import instaImage4 from "../assets/images/homepage-imgs/351803147_857031482705354_2822084865546613453_n.jpg";
import instaImage5 from "../assets/images/homepage-imgs/361403930_798819755272975_9098386384308449878_n.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = ({ image, title, buttonContent }) => {
  return (
    <div className="container flex justify-center items-center gap-6 my-0 mx-auto">
      <div>
        <img
          src={image}
          className="w-full h-full object-cover justify-self-center"
        />
      </div>
      <div className="max-w-prose">
        <h1 className="text-5xl mb-9 font-bold text-black">{title}</h1>
        <p className="leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
          neque placerat, euismod sapien quis, lobortis tortor. Duis
          pellentesque egestas euismod. Suspendisse cursus tincidunt nibh, vitae
          convallis sem imperdiet non. Praesent egestas, dolor at scelerisque
          imperdiet, quam metus aliquam tellus, sit amet ultricies nunc nunc in
          nisl.
        </p>
        <Link to="/shop">
          <button className="btn-primary mt-12 mb-10 inline-flex align-middle gap-x-3">
            {buttonContent}
          </button>
        </Link>
      </div>
    </div>
  );
};
const Home = () => {
  return (
    <div>
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
            buttonContent={"Browse Collection →"}
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
          <p className="text-xl font-medium mt-2 hover:text-shark-600">TOP</p>
        </div>
        <div>
          <img src={bottomImages.pintTightFitSaintDenimShorts2} />
          <p className="text-xl font-medium mt-2 hover:text-shark-600">
            BOTTOM
          </p>
        </div>
        <div>
          <img src={dressImages.bustierOverallPintuckDress5} />
          <p className="text-xl font-medium mt-2 hover:text-shark-600">DRESS</p>
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
                  <img src={i.Gallery[1]} className="object-contain" />
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
      <div className="about-wrapper flex justify-center items-center p-10 gap-8 bg-[#DFDCDB]">
        <div className="about-text text-left max-w-prose">
          <span className="text-lg font-bold mb-4">About Us</span>
          <h2 className="text-3xl font-extrabold pb-4 mt-2">
            We are your one stop shop for fashion since 2018.
          </h2>
          <div className="divider border-b-4 border-b-black border-solid w-24 leading-5"></div>
          <p className="mt-10">
            Mauris sed urna ullamcorper, rutrum diam eu, pretium libero. Nulla
            tincidunt dolor ac vehicula gravida. Phasellus consequat imperdiet
            condimentum. Nunc ultricies ipsum et est ornare finibus. Nullam
            semper est lorem, quis condimentum magna ornare sed. Praesent sem
            erat, fringilla et vulputate in, mattis non lorem.
          </p>
          <div className="flex justify-between items-center py-2">
            <div className="flex flex-col gap-5 justify-between">
              <div className="counter-wrapper grid grid-cols-3 text-slate-900">
                <div className="flex gap-5 justify-center items-center py-4">
                  <div className="counter flex-col gap-2 ">
                    <CountUp
                      end={120}
                      duration={4}
                      enableScrollSpy
                      suffix="K"
                      className="font-extrabold text-2xl"
                    />
                    <p className="mt-2 font-medium text-base">Orders shipped</p>
                  </div>
                </div>
                <div className="flex gap-8 justify-center items-center p-4">
                  <div className="counter flex-col gap-2 ">
                    <CountUp
                      end={97}
                      duration={4}
                      enableScrollSpy
                      suffix="%"
                      className="font-extrabold text-2xl"
                    />
                    <p className="mt-2 font-medium text-base">
                      Happy customers
                    </p>
                  </div>
                </div>
                <div className="flex gap-8  justify-center items-center p-4">
                  <div className="counter flex-col gap-2">
                    <CountUp
                      end={80}
                      duration={4}
                      enableScrollSpy
                      className="font-extrabold text-2xl"
                    />
                    <p className="mt-2 font-medium text-base">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button>Learn More</button>
        </div>
        <div className="about-img-stack grid relative grid-cols-12 p-8">
          <div className="img-stack-item img-stack-top grid row-start-1 col-start-1 col-end-[span-9] h-4/6 w-2/3">
            <img src={aboutImageStackBottom} />
          </div>
          <div className="img-stack-item img-stack-bottom grid col-start-7 col-end-[-1] row-start-1 pt-[50%]">
            <img src={aboutImageStackTop} />
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Home;
