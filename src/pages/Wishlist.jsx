import React from "react";
import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import { RelatedProducts } from "../components/RelatedProducts";
import { MdAddShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
export const Wishlist = () => {
  const [itemsData, setItemsData] = useState([]);

  const fetchData = async () => {
    try {
      let response = await fetch("https://fakestoreapi.com/products?limit=5");
      let data = await response.json();
      setItemsData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="wishlist-pg__container">
        <div className="wishlist-pg__wrapper">
          <div className="wishlist-pg__order-box p-1">
            {itemsData.map((item) => (
              <>
                <div
                  className="wishlist-pg__orderBox flex space-between items-center px-2 py-2"
                  key={item.id}
                >
                  <div className="wishlist-pg__order-card ">
                    <div className="wishlist-pg__img">
                      <div
                        style={{ backgroundImage: `url(${item.image})` }}
                      ></div>
                    </div>
                    <div className="wishlist-pg__details">
                      <div className="wishlist-pg__title">{item.title}</div>
                      <div>
                        <Trash2 size={20} style={{ color: "#424242" }} />
                      </div>
                    </div>
                  </div>
                  <div className="wishlist-card__middle-sec">
                    <div className="font-semibold">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                  <NavLink to="/cart" className="wishlist-card__right-sec px-2 py-1">
                    <MdAddShoppingCart/>
                  </NavLink>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div>
        <RelatedProducts />
      </div>
    </>
  );
};
