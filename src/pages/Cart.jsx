import React from "react";
import { useState, useEffect } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import {RelatedProducts} from "../components/RelatedProducts"
export const Cart = () => {
  const [itemsData, setItemsData] = useState([]);

  const fetchData = async () => {
    let response = await fetch("https://fakestoreapi.com/products?limit=5");
    let data = await response.json();
    setItemsData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="cart-pg__container">
        <div className="cart-pg__wrapper">
          <div className="cart-pg__order-box p-1">
            {itemsData.map((item) => (
              <>
                <div
                  className="cart-pg__orderBox flex space-between items-center"
                  key={item.id}
                >
                  <div className="cart-pg__order-card ">
                    <div className="cart-pg__img">
                      <div
                        style={{ backgroundImage: `url(${item.image})` }}
                      ></div>
                    </div>
                    <div className="cart-pg__details">
                      <div className="cart-pg__title text-sm">{item.title}</div>
                      <div className="font-semibold">
                        ${item.price.toFixed(2)}
                      </div>
                      <div className="cart-items__quantity-box">
                        <div className="cart-items__icons">
                          <Plus size={14} />
                        </div>
                        <div className="text-sm font-semibold">2</div>
                        <div className="cart-items__icons">
                          <Minus size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pr-3">
                    <Trash2 size={19} style={{ color: "#f56564" }} />
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="cart-pg__order-summary">
            <div className="p-3 flex flex-column gap-3">
              <div className="font-semibold">Order Summary</div>
              <div className="flex flex-column gap">
                <div className="flex space-between items-center text-sm">
                  <div>Subtotal</div>
                  <div>(3 items)</div>
                </div>
                <div className="flex space-between items-center text-sm font-semibold">
                  <div>Total</div>
                  <div>$99.00</div>
                </div>
              </div>
              <button className="order-summary__btn">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
       <div> <RelatedProducts /></div>
    </>
  );
};
