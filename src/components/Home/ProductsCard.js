import React from "react";
import style from "../../styles/home/home_page_card.module.css";
import {  useCart } from "react-use-cart";
import img from "../../image/pump-oil.png";
import { FaDollarSign, FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductsCard = ({ product, handleClick }) => {
  const { companyName, title, discount, mainPrice, _id, hide, stock } = product;
  product.id = _id;
  product.price = Math.round(mainPrice - mainPrice * (discount / 100));

  const { addItem, items } = useCart();

  return (
    <div className={hide || stock < 1 ? "d-none" : ""}>
      <article className={style.card}>
        <div className={style.wrapper}>
          <div className={style.tab_img}>
            <img src={product?.productImage || img} alt="" />
          </div>
          <div className={style.right}>
            <div className={style.header}>
              <p className={style.companyName_name}>{companyName}</p>
              <p className={style.discount}>{discount}%</p>
            </div>
            <h4 className={style.title}>{title}</h4>
            <div className={style.footer}>
              <div className={style.f_left}>
                <p className={style.discount_price}>
                  <span>
                    <FaDollarSign />
                  </span>
                  <span>
                    {Math.round(mainPrice - mainPrice * (discount / 100))}
                  </span>
                </p>
                <p className={style.main_price}>
                  <span>
                    <FaDollarSign />
                  </span>
                  <span>{mainPrice}</span>
                </p>
              </div>
              <div>
                {items.find((el) => el.id == _id) ? (
                  // <div className={`${style.c_wrapper} d-flex`}>
                  //   <span
                  //     className={style.icon}
                  //    onClick={() => updateItemQuantity(product.id, product.quantity + 1)}
                  //   >
                  //     <FaPlus />
                  //   </span>

                  //   <p className={style.input_box}>{ 1}</p>
                  //   <span className={style.icon}>
                  //     <FaMinus />
                  //   </span>
                  // </div>
                  <div className={style.e_w}>
                    <Link to="/cart">Go To Cart</Link>
                  </div>
                ) : (
                  <button
                    className={style.btn}
                    onClick={() => addItem(product)}
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductsCard;
