import React, {useState} from "react";
import "./Cart.css";
import style from "../../../styles/home/home_page_card.module.css";
import OrderCard from "./../../OrderDeatils/OrderCard";
import { useCart } from "react-use-cart";
import SingleCart from "./../../cart/SingleCart";
import axios from "axios";
import { API } from "../../../data/BackEndData";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    items,
    cartTotal,emptyCart
  } = useCart();
  const token = JSON.parse(localStorage.getItem("token"));
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate();

  const handelOrder = async () => {
    setLoading(true)
    try {
      const res = await axios.post(API + "/v1/order", {items, cartTotal}, {
        headers: { Authorization: `bearer ${token}` },
      });

      toast.success("Login Successful. ");
      emptyCart()      
      return navigate("/my-order");
      
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.error || "Something Wrong. Try Again!");
      setLoading(false)
    }
  };

  return (
    <article className="container">
      <div className="cart_box">
        <div className="cart_img">
          <img
            src="https://priyoshopbackup.blob.core.windows.net/priyoshop/content/Images/Thumbs/0171292_hamdard-cinkara-syrup-450ml_550.jpeg"
            alt="img"
          />
          <p>Love Candy</p>
        </div>
        <div>
          <button>+</button>
          <button>Main Price</button>

          <button>-</button>
        </div>
        <div>
          <span>Disc. Price</span>

          <button>Remove</button>
        </div>
      </div>

      <div className="total">
        <span>Total Price of your Cart</span>
        <span>{cartTotal} Tk</span>
      </div>

      <SingleCart />
      <hr />

      <button
        className="Button"
        disabled={items.length < 1 || loading ? true : false}
        onClick={() => handelOrder()}
      >
       {loading ? "Loading..." : ` Order Now ${cartTotal}`}
      </button>
    </article>
  );
};

export default Cart;
