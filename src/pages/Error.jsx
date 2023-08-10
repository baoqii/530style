import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="grid grid-cols-7 text-center m-10 mb-28">
      <h1 className="col-start-3 col-end-5 font-rubik text-[200px] tracking-widest text-shark-950 font-semibold">
        404
      </h1>
      <h2 className="col-start-2 col-end-7 my-6 font-rubik text-2xl tracking-wide text-shark-950 font-medium">
        Oops! It looks like you&#39;ve reached a 404 error page. But don&#39;t
        worry, we&#39;re here to guide you back to safety.
      </h2>
      <button className="col-start-3 col-span-3 bg-shark-950 text-alabaster-50 font-robotoMono font-medium text-lg tracking-wide rounded-none px-8 py-4 disabled:bg-shark-200 disabled:text-shark-700 hover:bg-shark-800 active:bg-shark-700 mb-6">
        <Link to="/">RETURN TO HOME</Link>
      </button>
    </div>
  );
};

export default Error;
