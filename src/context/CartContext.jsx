import { useState, createContext } from "react";
import { toast } from "react-toastify";
const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartActive, setIsCartActive] = useState(false);

  const toggleIsCartActive = () => setIsCartActive(!isCartActive);

  const handleAddItemToCart = (newItem) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === newItem.id);

    if (index !== -1) {
      const newCart = [...cartItems];
      newCart[index].quantity += 1;
      setCartItems(newCart);
    } else {
      setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
    }

    toast.success(`${newItem.name} has been added to your cart!`, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleRemoveItemFromCart = (selectedItem) =>
    setCartItems(cartItems.filter((item) => item.id !== selectedItem.id));

  const handleIncreaseItemQuantity = (selectedItem) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === selectedItem.id) item.quantity += 1;
        return item;
      })
    );
  };

  const handleDecreaseItemQuantity = (selectedItem) => {
    if (selectedItem.quantity === 1) {
      handleRemoveItemFromCart(selectedItem);
      return;
    }

    setCartItems(
      cartItems.map((item) => {
        if (item.id === selectedItem.id) item.quantity -= 1;
        return item;
      })
    );
  };

  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, current) => {
        let price = current.onSale ? current.salesPrice() : current.price;
        price *= current.quantity;

        total += price;
        return total;
      }, 0)
      .toFixed(2);
  };

  const cartProviderValues = {
    isCartActive,
    toggleIsCartActive,
    cartItems,
    handleAddItemToCart,
    handleRemoveItemFromCart,
    handleIncreaseItemQuantity,
    handleDecreaseItemQuantity,
    calculateSubtotal,
  };

  return (
    <CartContext.Provider value={cartProviderValues}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
