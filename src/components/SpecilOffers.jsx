import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa6";

export const SpecilOffers = () => {
  const [offerBoxes, setofferBoxes] = useState(0);
  const offerBoxData = [
    {
      id: "1",
      title: "Black Friday Week deals are here",
      category: "electronics",
      image: "https://mobirise.com/extensions/commercem4/assets/images/1.jpg",
    },
    {
      id: "2",
      title: "Must-see Black Friday Week deals",
      category: "beauty",
      image: "https://mobirise.com/extensions/commercem4/assets/images/3.jpg",
    },
    {
      id: "3",
      title: "Fashion trends you like",
      category: "toys",
      image: "https://mobirise.com/extensions/commercem4/assets/images/2.jpg",
    },

    {
      id: "4",
      title: "clearance sale upto 70%",
      category: "clothes",
      image: "https://mobirise.com/extensions/commercem4/assets/images/1.jpg",
    },
  ];
  const specialOfferData = [
    {
      id: "1",
      price: "12.00",
      badge: "5 Stock Left",
      image: "https://mobirise.com/extensions/commercem4/assets/images/1.jpg",
    },
    {
      id: "2",
      price: " 15.00",
      badge: "3 Stock Left",
      image: "https://mobirise.com/extensions/commercem4/assets/images/3.jpg",
    },
    {
      id: "3",
      price: " 1.00",
      badge: "1 Stock Left",
      image: "https://mobirise.com/extensions/commercem4/assets/images/2.jpg",
    },
  ];

  // const fetchData = async () => {
  //     let a = await fetch("https://fakestoreapi.com/products?limit=4");
  //     let data = await a.json();
  //     setofferBoxes(data);
  //     console.log(data);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <div className="offer-container">
        {/* <div className="offer-heading text-center my-2 text-lg font-bold">
          Today's deals
        </div> */}
        <div className="offer-wrapper my-2 mt-8">
          {offerBoxData.map((item) => {
            return (
              <div className="offer-box">
                <div className="offer-box__head text-md font-semibold ">
                  {offerBoxData[offerBoxes]?.title}
                </div>
                <div className="offer-box__main">
                  <div className="offer-main" key={item.id} id={item.id}>
                    <div className="offer-main__img">
                      <div
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      ></div>
                    </div>
                    <div className="offer-main__name text-xs">
                      <NavLink to="/products">
                        {item.category || "No Category"}
                      </NavLink>
                    </div>
                  </div>
                  <div className="offer-main">
                    <div className="offer-main__img">
                      <div
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      ></div>
                    </div>
                    <div className="offer-main__name text-xs">
                      <NavLink to="/products">
                        {item.category || "No Category"}
                      </NavLink>
                    </div>
                  </div>
                  <div className="offer-main">
                    <div className="offer-main__img">
                      <div
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      ></div>
                    </div>
                    <div className="offer-main__name text-xs">
                      <NavLink to="/products">
                        {item.category || "No Category"}
                      </NavLink>
                    </div>
                  </div>
                  <div className="offer-main">
                    <div className="offer-main__img">
                      <div
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      ></div>
                    </div>
                    <div className="offer-main__name text-xs">
                      <NavLink to="/products">
                        {item.category || "No Category"}
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="offer-box__foot text-sm cursor-pointer">
                  <NavLink to="/products">shop all deals</NavLink>
                </div>
              </div>
            );
          })}
        </div>
        <div className="special-offer mt-6 p-3">
          <div className="flex space-between">
            <div className="special-sec__head">
              <img
                src="https://img.lazcdn.com/us/domino/0bd38c5356d34b7a6b70d0b988f9704b.png_x36q80.png"
                alt=""
              />
            </div>
            <div>
              <NavLink
                to="/products"
                className="text-sm right-arrow flex items-center cursor-pointer"
              >
                Shop More <FaAngleRight />
              </NavLink>
            </div>
          </div>
          <div className="special-sec__container">
            {specialOfferData.map((item) => {
              return (
                <NavLink to="/products">
                  <div className="special-sec__main" key={item.id} id={item.id}>
                    <div className="special-sec__img">
                      <div
                        style={{ backgroundImage: `url(${item.image})` }}
                      ></div>
                    </div>
                    <div className="special-sec__price pt-1 text-pink-100 text-sm font-semibold pl-1">
                      $
                      <span className="text-lg font-semibold no-spacing">
                        {item.price}
                      </span>
                    </div>
                    <div className="special-sec__badge text-sm py-1 mt-3 text-center">
                      <div className="badge-left"></div>
                      <div className="badge-name">{item.badge}</div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
