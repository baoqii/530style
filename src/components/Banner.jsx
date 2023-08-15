import { Link } from "react-router-dom";

const Banner = ({ image, title, buttonContent }) => {
  return (
    <div className="container flex justify-center items-center gap-20 my-0 mx-auto">
      <div>
        <img
          src={image}
          className="w-full h-full object-cover justify-self-center"
        />
      </div>
      <div className="max-w-prose">
        <h1 className="text-5xl mb-9 font-semibold font-rubik text-shark-950">
          {title}
        </h1>
        <p className="leading-5 text-shark-700 tracking-wide font-robotoMono text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
          neque placerat, euismod sapien quis, lobortis tortor. Duis
          pellentesque egestas euismod. Suspendisse cursus tincidunt nibh, vitae
          convallis sem imperdiet non. Praesent egestas, dolor at scelerisque
          imperdiet, quam metus aliquam tellus, sit amet ultricies nunc nunc in
          nisl.
        </p>
        <Link to="/shop">
          <button className="bg-shark-950 uppercase text-alabaster-50 font-robotoMono font-normal text-sm tracking-wide rounded-none px-8 py-2 disabled:bg-shark-200 disabled:text-shark-700 hover:bg-shark-800 active:bg-shark-700 my-6">
            {buttonContent}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
