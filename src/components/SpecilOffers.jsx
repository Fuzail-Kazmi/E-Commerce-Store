import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

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
      <div className="offer-container my-2 mt-8">
        {/* <div className="offer-heading text-center my-2 text-lg font-bold">
          Today's deals
        </div> */}
        <div className="offer-wrapper">
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
      </div>
    </>
  );
};
