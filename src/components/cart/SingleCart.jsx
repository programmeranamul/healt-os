import React from "react";
import style from "../../styles/cart/single_cart.module.css";
import img from "../../image/pump-oil.png";
import { FaDollarSign, FaPlus, FaMinus } from "react-icons/fa";
import { CartProvider, useCart } from "react-use-cart";

function SingleCart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem , cartTotal} =
    useCart();

    console.log(cartTotal);

  if (isEmpty) return <p>Your cart is empty</p>;
  return (
    <>
      {items.map((data) => (
        <article key={data._id} className={style.wrapper}>
          <div className={style.left}>
            <img src={data.productImage || img} alt="" />
          </div>
          <div className={style.middle}>
            <p className={style.c}>
              <b>{data.companyName}</b>
            </p>
            <h5 className={style.title}>{data.title}</h5>
            <div className={style.m_r}>
              <p className={style.quate}>
                {data.price * data.quantity} {data.price} * {data.quantity}
              </p>
            </div>
          </div>
          <div className={style.right}>
            <p className={style.hg} onClick={() => updateItemQuantity(data.id, data.quantity + 1)}>
              <FaPlus className={style.plus} />
            </p>
            <p className={style.quan}>{data.quantity}</p>
            <p className={style.hg}  onClick={() => updateItemQuantity(data.id, data.quantity - 1)}>
              <FaMinus className={style.minus} />
            </p>
          </div>
        </article>
      ))}
    </>
  );
}

export default SingleCart;
