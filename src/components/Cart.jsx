import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export const Cart = () => {
  const cartContext = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const {
    cartItems,
    handleIncreaseItemQuantity,
    handleDecreaseItemQuantity,
    handleRemoveItemFromCart,
    toggleIsCartActive,
    calculateSubtotal,
  } = cartContext;

  useEffect(() => {
    setTimeout(() => {
      setIsCartVisible(true);
    }, 0);
  }, []);

  const handleCloseTransition = () => {
    setIsCartVisible(false);
    setTimeout(() => {
      toggleIsCartActive();
    }, 300);
  };

  return (
    <>
      {createPortal(
        <>
          <div
            className={`z-[1000] fixed top-0 bg-alabaster-50 h-full w-full leading-5 right-0 text-base max-w-xl flex flex-col pt-10 transition-all duration-300 ${
              isCartVisible
                ? "translate-x-0backdrop-blur-sm"
                : "translate-x-full invisible"
            }`}
          >
            <div className="px-16 mb-8 flex justify-between items-center">
              <span className="text-3xl text-shark-950 font-semibold tracking-tight mr-5 font-rubik inline-block">
                SHOPPING CART
              </span>
              <button
                className="cursor-pointer stroke-shark-950 hover:stroke-shark-300 transition-colors ease-in-out duration-200 focus:outline-none outline-none bg-transparent hover:outline-none active:outline-none border-none"
                label="close"
                title="close"
                onClick={handleCloseTransition}
              >
                X
              </button>
            </div>
            {cartItems.length > 0 ? (
              <>
                <div className="grow flex flex-col overflow-hidden">
                  <div className="flex-auto overflow-y-auto px-16">
                    <ul className="mr-2">
                      {cartItems.map((item) => (
                        <li key={item.id} className="flex gap-6 mb-6">
                          <div className="shrink-0 bg-alabaster-50">
                            <img
                              src={item.Gallery[0]}
                              className="w-20 max-w-full h-24 object-contain"
                            />
                          </div>

                          <div className="flex flex-col gap-y-6 min-w-[336px] justify-between">
                            <div className="flex gap-x-4 items-start justify-between">
                              <Link
                                className="font-medium text-lg/6 line-clamp-none font-robotoMono text-shark-950"
                                to={`product/${item.id}`}
                              >
                                {item.name}
                              </Link>

                              <button
                                className="text-shark-400 hover:text-shark-800 transition-colors duration-150 focus:outline-none outline-none bg-transparent hover:outline-none active:outline-none border-none border-0"
                                onClick={() => handleRemoveItemFromCart(item)}
                                label="Remove"
                              >
                                <FontAwesomeIcon icon={faTrashCan} size="lg" />
                              </button>
                            </div>
                            <div className="flex justify-between items-end">
                              <p className="font-medium text-base/6 leading-5 font-robotoMono">
                                ${item.onSale ? item.salesPrice() : item.price}
                              </p>
                              <div className="cart__item-quantity flex text-center border-2 border-shark-950 px-2 py-0.5 items-center font-robotoMono text-base/6 font-medium">
                                <button
                                  className="text-shark-950 hover:text-shark-500 focus:outline-none outline-none bg-transparent hover:outline-none active:outline-none border-none border-0"
                                  onClick={() =>
                                    handleDecreaseItemQuantity(item)
                                  }
                                >
                                  -
                                </button>
                                <span className="focus:outline-none outline-none active:outline-none bg-alabaster-50 w-10 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  className="text-shark-950 hover:text-shark-500 focus:outline-none outline-none bg-transparent hover:outline-none active:outline-none border-none border-0"
                                  onClick={() =>
                                    handleIncreaseItemQuantity(item)
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-slate-300 py-6 px-16 text-alabaster-50 bg-shark-950">
                    <div className="text-base flex justify-between pb-2 items-center">
                      <span className="font-medium tracking-tight font-rubik text-2xl">
                        SUBTOTAL :
                      </span>
                      <span className="font-semibold text-2xl font-robotoMono tracking-tight">
                        $ {calculateSubtotal()}
                      </span>
                    </div>
                    <p className="font-robotoMono text-sm font-normal text-alabaster-200 tracking-tight pb-4">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <button className="w-full bg-alabaster-50 text-alabaster-700 font-robotoMono font-medium text-base tracking-wide rounded-none px-8 py-2 disabled:bg-alabaster-200 disabled:text-alabaster-700 hover:bg-alabaster-100 hover:text-alabaster-700 active:bg-alabaster-100 active:text-alabaster-700 mb-4">
                      CHECKOUT
                    </button>
                    <p className="text-center text-alabaster-100 font-normal text-sm tracking-tight">
                      or{" "}
                      <Link
                        to="/shop"
                        className="hover:text-alabaster-200 hover:underline underline-offset-8"
                        onClick={handleCloseTransition}
                      >
                        Continue Shopping →
                      </Link>
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="px-16 grow font-medium">
                No items have been added to your cart. Go shopping!
              </div>
            )}
          </div>
          <div
            className={`z-[999] fixed top-0 w-full min-h-screen transition-all duration-300 ${
              isCartVisible ? "bg-black/60" : ""
            }`}
            onClick={handleCloseTransition}
          ></div>
        </>,

        document.body
      )}
    </>
  );
};
