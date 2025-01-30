import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className="box has-text-centered has-background-beige p-4 has-rounded-border">
      <div className="is-flex is-align-items-center is-justify-content-center">
        <FaShoppingCart className="has-text-brown is-size-3 mr-2" />
        <span className="has-text-brown is-size-4">0</span>
      </div>
    </div>
  );
};

export default CartWidget;

