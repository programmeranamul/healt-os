import React from "react";
import { orderData } from "./../../data/OrderPageData";

import style from "../../styles/orderdetails/OrderDetailsCard.module.css";
import SingleOrderCart from "./SingleOrderCart";

function OrderCard() {
  return (
    <section className={style.section}>
      <div className="container">
        {orderData.products.map((data, index) => (
          <div key={data._id}>
            <SingleOrderCart data={data} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OrderCard;
