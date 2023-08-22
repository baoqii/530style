import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShirt,
  faCartShopping,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContext";
import { Cart } from "../components/Cart";

export function AppLayout() {
  const { isCartActive } = useContext(CartContext);

  return isCartActive && <Cart />;
}
export function NavBar() {
  const { toggleIsCartActive, cartItems } = useContext(CartContext);

  const itemsOnCart = cartItems.reduce((total, item) => {
    return (total += item.quantity);
  }, 0);

  return (
    <header className="sticky top-0 z-10 border-b flex items-center justify-between px-2 shadow-lg bg-alabaster-50">
      <NavLink to="/" className="flex items-center justify-between mb-2 gap-3">
        <FontAwesomeIcon
          icon={faShirt}
          size="3x"
          transform={"shrink-8 up-1 right-2"}
        />
        <div className="font-rubik font-semibold tracking-wide no-underline text-shark-950 text-2xl hover:text-shark-400">
          530STYLE.
        </div>
      </NavLink>
      <nav>
        <ul className="list-reset flex items-center text-center mb-2">
          <li className="text-lg text-shark-950 tracking-wider font-rubik pr-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-8 text-shark-950"
                  : "transition duration-300 focus:outline-none focus:text-shark-400 focus:underline hover:underline hover:text-shark-400 focus:underline-offset-8 hover:underline-offset-8"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-lg text-shark-950 tracking-wider font-rubik pr-8">
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-8"
                  : "transition duration-300 focus:outline-none focus:text-shark-400 focus:underline hover:underline hover:text-shark-400 focus:underline-offset-8 hover:underline-offset-8"
              }
            >
              Shop
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex mr-6">
        <div className="fa-layers fa-fw fa-3x">
          <button
            className="cursor-pointer focus:outline-none outline-none bg-transparent hover:outline-none active:outline-none border-0"
            onClick={toggleIsCartActive}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              transform={"shrink-8 up-1 right-2"}
            />
          </button>
          {itemsOnCart !== 0 && (
            <span className="fa-layers-counter font-semibold text-alabaster-50 bg-teak-400 font-rubik">
              {itemsOnCart}
            </span>
          )}
        </div>
        {/* </NavLink> */}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="text-left text-alabaster-200 font-rubik">
      <div className="bg-shark-950 pt-5">
        <div className="max-w-screen-lg px-4 sm:px-6 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <div className="text-lg tracking-wide relative uppercase text-alabaster-200 mb-10 font-medium before:absolute before:bg-teak-400 before:-bottom-3 before:h-0.5 before:w-10 before:left-0">
              Get To Know Us
            </div>
            <a className="my-3 block" href="/#">
              About
            </a>
            <a className="my-3 block" href="/#">
              Contact
            </a>
            <a className="my-3 block" href="/#">
              Store Locator
            </a>
          </div>
          <div className="p-5">
            <div className="text-lg tracking-wide relative uppercase text-alabaster-200 mb-10 font-medium before:absolute before:bg-teak-400 before:-bottom-3 before:h-0.5 before:w-10 before:left-0">
              Shop
            </div>
            <a className="my-3 block" href="/#">
              Top
            </a>
            <a className="my-3 block" href="/#">
              Bottom
            </a>
            <a className="my-3 block" href="/#">
              Dress
            </a>
            <a className="my-3 block" href="/#">
              Outerwear
            </a>
          </div>
          <div className="p-5">
            <div className="text-lg tracking-wide relative uppercase text-alabaster-200 mb-10 font-medium before:absolute before:bg-teak-400 before:-bottom-3 before:h-0.5 before:w-10 before:left-0">
              Help
            </div>
            <a className="my-3 block" href="/#">
              Customer Service
            </a>
            <a className="my-3 block" href="/#">
              FAQ <span className="text-teak-200 text-xs p-1">NEW</span>
            </a>
            <a className="my-3 block" href="/#">
              Privacy Policy
            </a>
            <a className="my-3 block" href="/#">
              Terms & Conditions
            </a>
          </div>
          <div className="p-5">
            <div className="text-lg tracking-wide relative uppercase text-alabaster-200 mb-10 font-medium before:absolute before:bg-teak-400 before:-bottom-3 before:h-0.5 before:w-10 before:left-0">
              Newsletter
            </div>
            <p className="my-3">
              Don&#39;t miss any updates of our new arrivals, discounts,
              promotions and more!
            </p>
            <form className="my-2 w-[200px] relative">
              <div className="flex flex-col">
                <div className="flex space-between">
                  <input
                    id="email_address"
                    type="text"
                    className="peer focus:outline-none w-full border-0 py-1.5 bg-transparent placeholder-gray-500"
                    placeholder="Enter email address"
                  ></input>
                  <button
                    className="border-none bg-transparent outline-none py-0 focus:outline-none active:outline-none"
                    type="button"
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-alabaster-200"
                    />
                  </button>
                  <span className="focus-border absolute bottom-0 left-0 w-0 h-0.5 bg-alabaster-200 peer-focus:w-full peer-focus:transition-all"></span>
                </div>
                <hr className="w-full border-b border-solid border-shark-300" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-shark-950 pt-2">
        <div
          className="flex pb-4 m-auto border-t border-alabaster-400 text-alabaster-200 text-sm flex-col
        max-w-screen-lg items-center"
        >
          <div className="mt-8 flex justify-center space-x-6">
            <a href="#" className="text-alabaster-200 hover:text-alabaster-50">
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-alabaster-200 hover:text-alabaster-50">
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-alabaster-200 hover:text-alabaster-50">
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>

          <div className="my-5">© Copyright 2020. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}

function Layout() {
  return (
    <div className="">
      <AppLayout />
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
