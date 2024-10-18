import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  console.log(cartItems);
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className=" m-5">
      <h1 className="text-2xl text-black text-center  mx-auto  font-bold mt-6 p-2    ">
        Cart
      </h1>
      <div className="flex flex-col items-center">
        <button
          className=" text-orange-50   border rounded-md  font-semibold m-2 p-2  bg-orange-400 "
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      <div className="w-8/12 m-auto bg-yellow-50 border  rounded-md p-4">
        {cartItems.length === 0 && (
          <h1 className="text-lg  font-semibold">
            Cart is empty Add item to the Cart
          </h1>
        )}
        <ItemList item={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
