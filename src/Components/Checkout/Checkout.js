import React from "react";
import { useStateValue } from "../ContextAPI/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Checkout.css";
import Header from "../Header/Header";
import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/NAB/Subheader_PC_Wedding.jpg"
            alt="add banner"
          />
          {basket?.length == 0 ? (
            <div className="checkout__title">
              <h2>Your shopping basket in empty</h2>
              <p>You have to content in your basket</p>
            </div>
          ) : (
            <div>
              <h2>Your Shopping basket</h2>
              {basket.map((item) => {
                return (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                );
              })}
            </div>
          )}
        </div>

        {basket.length > 0 && (
          <div className="checkout__right">
            <h1>Total</h1>
            <Subtotal />
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
