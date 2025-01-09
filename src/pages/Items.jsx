import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Heart,
  Info,
  MapPin,
  Minus,
  Plus,
  RefreshCw,
  Share2,
  ShieldX,
  Truck,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { RiQuestionnaireLine } from "react-icons/ri";
import { MdQuestionAnswer } from "react-icons/md";

export const Items = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Product 2",
      price: 39.99,
      image:
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Product 3",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1575330933415-cea1e7ce53eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Product 4",
      price: 19.99,
      image:
        "https://images.unsplash.com/photo-1620917669788-be691b2db72a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsData, setItemsData] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://dummyjson.com/products/1");
    let data = await a.json();
    setItemsData([data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? itemsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === itemsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };
  const [showPrice, setShowPrice] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowPrice(true);
        } else {
          setShowPrice(false);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      if (navRef.current) {
        observer.unobserve(navRef.current);
      }
    };
  }, []);
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="items-pg__container">
        {/* ss = small screen */}
        <div className="items-pg__ss-wrapper">
          {itemsData.length > 0 &&
            itemsData.map((item) => {
              return (
                <>
                  <div className="items-img__container" key={item.id}>
                    <div
                      style={{
                        backgroundImage: `url(${item.images[currentIndex]})`,
                      }}
                      className="items-pg__img"
                    ></div>
                    <div className="items-pg__slide-indicator">
                      {currentIndex + 1}/{item.images.length}
                    </div>
                    <div className="items-img__left-arrow text-xxl">
                      <ArrowLeft onClick={prevSlide} size={22} />
                    </div>
                    <div className="items-img__right-arrow text-xxl">
                      <ArrowRight onClick={nextSlide} size={22} />
                    </div>
                  </div>
                  <div className="items-discription flex flex-column gap-1">
                    <div className="item-price flex items-center gap">
                      <div className="font-semibold">
                        <span className="text-lg">$</span>
                        <span className="text-xl">{item.price}</span>
                      </div>
                      <div className="percentOff-badge">
                        <span className="text-xs">$</span>
                        <span className="text-sm">20</span>
                      </div>
                      <div className="text-xs sale-badge mb-2">-50%</div>
                    </div>
                    <div className="item-name text-md">{item.title}</div>
                    <div className="item-rating flex gap-1">
                      <div className="text-xs">⭐({item.rating})</div>
                      <div className="flex gap">
                        <div className="p-1 text-xxs low-stock-badge">
                          {item.availabilityStatus}
                        </div>
                      </div>
                    </div>
                    <div className="items-color__sec my-3">
                      <div>
                        <span className="text-sm color-gray">
                          Product Option:
                        </span>
                        <span className="text-xs pl-1">{item.option}</span>
                      </div>
                      <div className="items-color__container">
                        <div className="items-color">
                          <div
                            className="items-colorBoxes"
                            style={{
                              backgroundImage: `url(${item.images})`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="specification-info flex items-center space-between mb-2">
                      <div className="specification-left flex items-center gap-1">
                        <div className="text-sm color-gray">
                          Specifications:
                        </div>
                        <div className="product-info text-xs">
                          {item.brand},{item.category}
                        </div>
                      </div>
                      <NavLink
                        to="/specification"
                        className="specification-right color-gray"
                      >
                        <ChevronRight size={15} />
                      </NavLink>
                    </div>
                    <div className="item-services my-4">
                      <div className="items-pg__delivery flex space-between items-start">
                        <div className="text-sm color-gray">Delivery</div>
                        <div className="text-xs flex flex-column gap">
                          <div className="text-xs">
                            Address Not Define Enter your address
                          </div>
                          <div>Arrive In: {item.shippingInformation}</div>
                        </div>
                        <NavLink to="/address" className="color-gray">
                          <ChevronRight size={15} />
                        </NavLink>
                      </div>
                      <hr className="hr-preset1 my-4" />
                      <div className="items-pg__services flex space-between items-start">
                        <div className="text-sm color-gray">Services</div>
                        <div className="text-xs flex flex-column gap">
                          <li>{item.returnPolicy}</li>
                          <li className="text-xs">
                            {item.warrantyInformation}
                          </li>
                        </div>
                        <NavLink to="/services" className="color-gray">
                          <ChevronRight size={15} />
                        </NavLink>
                      </div>
                    </div>
                    <div className="item-review flex flex-column gap-2 my-3">
                      <div className="flex space-between items-center text-sm">
                        <div className="color-gray">
                          Ratings and Reviews (
                          {item.reviews ? item.reviews.length : 0})
                        </div>
                        <NavLink className="color-pink">View All</NavLink>
                      </div>
                      <div className="review-sec">
                        {item.reviews && item.reviews.length > 0 ? (
                          item.reviews.map((review, index) => (
                            <div key={index} className="review-container">
                              <div className="review-box">
                                <div className="flex items-center space-between">
                                  <div className="flex gap flex-column color-gray text-sm">
                                    <div>{review.reviewerName}</div>
                                    <div className="text-xs">{review.date}</div>
                                  </div>
                                  <div className="flex items-center text-xs">
                                    ⭐({review.rating})
                                  </div>
                                </div>
                                <div className="text-sm py-3">
                                  {review.comment}
                                </div>
                                <div className="review-img__box">
                                  <div
                                    className="review-img"
                                    style={{
                                      backgroundImage: `url(${item.images})`,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="no-review__show">No reviews yet</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="items-faq__sec my-3">
                    <div className="flex space-between items-center text-sm">
                      <div className="color-gray">
                        Questions about this product (
                        {item.question ? item.reviews.length : 0})
                      </div>
                      <NavLink className="color-pink">View All</NavLink>
                    </div>
                    <div className="faq-box">
                      <div className="question-box flex flex-column gap-1 mt-3 py-5">
                        <div className="flex items-center gap-2 color-gray-500">
                          <div className="text-md">
                            <RiQuestionnaireLine />
                          </div>
                          <div className="text-sm">Hello</div>
                        </div>
                        <div className="flex items-center gap-2 color-gray-500">
                          <div className="text-md">
                            <MdQuestionAnswer />
                          </div>
                          <div className="text-sm">Hi</div>
                        </div>
                      </div>
                      <hr className="hr-preset2" />
                      <div className="justify-content-center color-pink font-semibold py-5">
                        <NavLink to="">Ask Questions</NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="items-description my-5">
                    <div className="color-gray text-sm my-2">Description</div>
                    <hr className="hr-preset1" />
                    <div className="text-sm my-3 mb-15">{item.description}</div>
                  </div>
                  <div className="items-pg__btns">
                    <button>
                      <NavLink to="/cart">Add to Cart</NavLink>
                    </button>
                    <button>Buy Now</button>
                  </div>
                </>
              );
            })}
        </div>
        {/* fm = full screen */}
        <div className="items-pg__fm-wrapper">
          {itemsData.length > 0 &&
            itemsData.map((item) => {
              return (
                <>
                  <div className="items-fm__sec" key={item.id}>
                    <div className="items-fm__left-side">
                      <div className="items-fm__left-wrapper">
                        <div className="items-fm__img-container">
                          <div className="fm-product__img">
                            <div
                              style={{
                                backgroundImage: `url(${item.images[currentIndex]})`,
                              }}
                            ></div>
                          </div>
                          <hr className="hr-preset1 mt-3 mb-1" />
                          <div className="fm-more__img">
                            <div
                              style={{
                                backgroundImage: `url(${item.images[currentIndex]})`,
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="items-fm__description p-1">
                          <div className="item-fm__title text-sm color-gray-500">
                            {item.title}
                          </div>
                          <div className="item-fm__rating flex gap my-2 items-center">
                            <div className="text-xs flex items-center font-semibold">
                              ⭐⭐⭐⭐⭐({item.rating})
                            </div>
                            <div className="flex items-center gap color-gray-500">
                              <div className="text-xs">
                                {item.reviews.length} Reviews
                              </div>
                              |
                              <div className="text-xs">
                                {item.availabilityStatus}
                              </div>
                            </div>
                          </div>
                          <div className="item-fm__tags text-xs my-3 color-gray-500">
                            <span className="color-gray">Brand:</span>{" "}
                            {item.brand} | {item.warrantyInformation}
                          </div>
                          <hr className="hr-preset1 my-4" />
                          <div className="item-fm__price flex items-center gap-1 my-4">
                            <div className="font-semibold">
                              <span className="text-lg">$</span>
                              <span className="text-xl">{item.price}</span>
                            </div>
                            <div className="percentOff-badge">
                              <span className="text-sm">$</span>
                              <span className="text-md">20</span>
                            </div>
                            <div className="text-sm sale-badge mb-1">-50%</div>
                          </div>
                          <hr className="hr-preset1 my-4" />
                          <div className="item-fm__option-sec my-4">
                            <div className="item-fm__selected-option text-sm color-gray my-2">
                              Product Option:
                            </div>
                            <div className="item-fm__option-boxes my-2">
                              <div className="item-fm__option-img">
                                <div
                                  style={{
                                    backgroundImage: `url(${item.images})`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <hr className="hr-preset1" />
                        </div>
                      </div>
                      <hr className="hr-preset1 my-2" />
                      <div className="fm-about__sec">
                        <div
                          className="fm-nav p-1 py-3"
                          ref={navRef}
                          style={{ backgroundColor: "whitesmoke" }}
                        >
                          <ul className="flex items-center gap-3">
                            <li
                              onClick={() =>
                                scrollToSection("fm-customer-reviews")
                              }
                              className={
                                activeSection === "fm-customer-reviews"
                                  ? "fm-nav-change"
                                  : ""
                              }
                            >
                              Customer Reviews ({item.reviews.length})
                            </li>
                            <li
                              onClick={() =>
                                scrollToSection("fm-specifications")
                              }
                              className={
                                activeSection === "fm-specifications"
                                  ? "fm-nav-change"
                                  : ""
                              }
                            >
                              Specifications
                            </li>
                            <li
                              onClick={() => scrollToSection("fm-description")}
                              className={
                                activeSection === "fm-description"
                                  ? "fm-nav-change"
                                  : ""
                              }
                            >
                              Description
                            </li>
                            <li
                              onClick={() => scrollToSection("fm-store")}
                              className={
                                activeSection === "fm-store"
                                  ? "fm-nav-change"
                                  : ""
                              }
                            >
                              Store
                            </li>
                            <li
                              onClick={() => scrollToSection("fm-more-items")}
                              className={
                                activeSection === "fm-more-items"
                                  ? "fm-nav-change"
                                  : ""
                              }
                            >
                              More to love
                            </li>
                          </ul>
                        </div>
                        <div
                          id="fm-customer-reviews"
                          className="fm__reviews-sec my-5"
                        >
                          <div className="fm-customer-reviews__heading text-xl font-semibold">
                            Customer Reviews ({item.reviews.length})
                          </div>
                          <div className="fm-customer-reviews__sections my-5">
                            <div className="fm-customer-reviews__leftside p-2 px-1">
                              <div className="fm-customer-reviews__leftside-container">
                                <div className="fm-customer-reviews__leftside-box">
                                  <div className="fm-customer-reviews__leftside-rating">
                                    4
                                  </div>
                                  <div className="fm-customer-reviews__leftside-starsBox">
                                    <div className="fm-customer-reviews__leftside-stars">
                                      <span className="fm-customer-reviews__leftside-star ">
                                        <svg
                                          viewBox="0 0 1024 1024"
                                          width="1em"
                                          height="1em"
                                          fill="currentColor"
                                          aria-hidden="false"
                                          focusable="false"
                                        >
                                          <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                        </svg>
                                      </span>
                                      <span className="fm-customer-reviews__leftside-star ">
                                        <svg
                                          viewBox="0 0 1024 1024"
                                          width="1em"
                                          height="1em"
                                          fill="currentColor"
                                          aria-hidden="false"
                                          focusable="false"
                                        >
                                          <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                        </svg>
                                      </span>
                                      <span className="fm-customer-reviews__leftside-star ">
                                        <svg
                                          viewBox="0 0 1024 1024"
                                          width="1em"
                                          height="1em"
                                          fill="currentColor"
                                          aria-hidden="false"
                                          focusable="false"
                                        >
                                          <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                        </svg>
                                      </span>
                                      <span className="fm-customer-reviews__leftside-star ">
                                        <svg
                                          viewBox="0 0 1024 1024"
                                          width="1em"
                                          height="1em"
                                          fill="currentColor"
                                          aria-hidden="false"
                                          focusable="false"
                                        >
                                          <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                        </svg>
                                      </span>
                                      <span className="fm-customer-reviews__leftside-star">
                                        <svg
                                          viewBox="0 0 1024 1024"
                                          width="1em"
                                          height="1em"
                                          fill="currentColor"
                                          aria-hidden="false"
                                          focusable="false"
                                        >
                                          <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="fm-customer-reviews__leftside-bottom-text">
                                    All from verified purchases
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="fm-customer-reviews__rightside p-2 px-2">
                              <div className="fm-customer-reviews__rightside-container">
                                <div className="fm-customer-reviews__rightside-box">
                                  <div className="fm-customer-reviews__rightside-starsBox">
                                    <span className="fm-customer-reviews__rightside-stars ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="fm-customer-reviews__rightside-stars ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="fm-customer-reviews__rightside-stars ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="fm-customer-reviews__rightside-stars ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="fm-customer-reviews__rightside-stars ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                  </div>
                                  <div className="fm-customer-reviews__rightside-progressBox">
                                    <div
                                      className="fm-customer-reviews__rightside-progress"
                                      style={{ width: 60 }}
                                    ></div>
                                  </div>
                                  <div className="fm-customer-reviews__rightside-number">
                                    144
                                  </div>
                                </div>
                                <div className="fm-customer-reviews__rightside-box">
                                  <div className="fm-customer-reviews__rightside-starsBox">
                                    <span className="fm-customer-reviews__rightside-stars ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="fm-customer-reviews__rightside-stars ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="fm-customer-reviews__rightside-stars ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="fm-customer-reviews__rightside-stars ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="comet-icon comet-icon-starreview ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                  </div>
                                  <div className="fm-customer-reviews__rightside-progressBox">
                                    <div
                                      className="fm-customer-reviews__rightside-progress"
                                      style={{ width: 30 }}
                                    ></div>
                                  </div>
                                  <div
                                    className="fm-customer-reviews__rightside-number"
                                    data-spm-anchor-id="a2g0o.detail.1000024.i1.4c741363WTceHy"
                                  >
                                    28
                                  </div>
                                </div>
                                <div className="fm-customer-reviews__rightside-box">
                                  <div className="fm-customer-reviews__rightside-starsBox">
                                    <span className="fm-customer-reviews__rightside-stars ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="fm-customer-reviews__rightside-stars ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="fm-customer-reviews__rightside-stars ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="comet-icon comet-icon-starreview ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="comet-icon comet-icon-starreview ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                  </div>
                                  <div className="fm-customer-reviews__rightside-progressBox">
                                    <div
                                      className="fm-customer-reviews__rightside-progress"
                                      style={{ width: 15 }}
                                    ></div>
                                  </div>
                                  <div className="fm-customer-reviews__rightside-number">
                                    23
                                  </div>
                                </div>
                                <div className="fm-customer-reviews__rightside-box">
                                  <div className="fm-customer-reviews__rightside-starsBox">
                                    <span className="fm-customer-reviews__rightside-stars ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="fm-customer-reviews__rightside-stars ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="comet-icon comet-icon-starreview ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="comet-icon comet-icon-starreview ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="comet-icon comet-icon-starreview ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                  </div>
                                  <div className="fm-customer-reviews__rightside-progressBox">
                                    <div
                                      className="fm-customer-reviews__rightside-progress"
                                      style={{ width: 12 }}
                                    ></div>
                                  </div>
                                  <div className="fm-customer-reviews__rightside-number">
                                    17
                                  </div>
                                </div>
                                <div className="fm-customer-reviews__rightside-box">
                                  <div className="fm-customer-reviews__rightside-starsBox">
                                    <span className="fm-customer-reviews__rightside-stars ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M463.488 157.141333c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="comet-icon comet-icon-starreview ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="comet-icon comet-icon-starreview ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="comet-icon comet-icon-starreview ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                    <span className="comet-icon comet-icon-starreview ">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="false"
                                        focusable="false"
                                      >
                                        <path d="M512 204.970667l-84.266667 184.32a53.333333 53.333333 0 0 1-41.6 30.72l-181.952 23.68 131.882667 142.698666a53.333333 53.333333 0 0 1 13.290667 45.738667l-33.792 185.642667 172.8-85.397334a53.333333 53.333333 0 0 1 47.274666 0l172.8 85.397334-33.792-185.642667a53.333333 53.333333 0 0 1 13.290667-45.76L819.84 443.733333l-181.930667-23.701333a53.333333 53.333333 0 0 1-41.621333-30.72L512 204.970667z m-48.512-47.829334c18.986667-41.557333 78.016-41.557333 97.024 0l91.498667 200.170667 196.544 25.6c42.922667 5.589333 61.653333 57.28 32.256 89.088L738.56 625.92l36.629333 201.258667c7.850667 43.136-36.8 76.8-76.096 57.386666L512 792.064l-187.093333 92.458667c-39.296 19.413333-83.968-14.229333-76.096-57.365334l36.629333-201.258666-142.272-153.92c-29.376-31.786667-10.645333-83.498667 32.277333-89.088l196.544-25.6 91.52-200.170667z"></path>
                                      </svg>
                                    </span>
                                  </div>
                                  <div className="fm-customer-reviews__rightside-progressBox">
                                    <div
                                      className="fm-customer-reviews__rightside-progress"
                                      style={{ width: 25 }}
                                    ></div>
                                  </div>
                                  <div className="fm-customer-reviews__rightside-number">
                                    27
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="fm-customer-reviews__tags-box">
                            <div className="fm-customer-reviews__tags">
                              All({item.reviews.length})
                            </div>
                            <div className="fm-customer-reviews__tags">
                              Pic review({item.reviews.length})
                            </div>
                            <div className="fm-customer-reviews__tags">
                              Additional review({item.reviews.length})
                            </div>
                            <div className="fm-customer-reviews__tags">
                              Local review({item.reviews.length})
                            </div>
                            <div className="fm-customer-reviews__tags">
                              5 stars({item.reviews.length})
                            </div>
                            <div className="fm-customer-reviews__tags">
                              4 stars({item.reviews.length})
                            </div>
                            <div className="fm-customer-reviews__tags">
                              3 stars({item.reviews.length})
                            </div>
                            <div className="fm-customer-reviews__tags">
                              2 stars({item.reviews.length})
                            </div>
                            <div className="fm-customer-reviews__tags">
                              1 stars({item.reviews.length})
                            </div>
                            <div className="fm-customer-reviews__tags">
                              quality is good({item.reviews.length})
                            </div>
                            <div className="fm-customer-reviews__tags">
                              very good({item.reviews.length})
                            </div>
                            <div className="fm-customer-reviews__tags">
                              satisfied({item.reviews.length})
                            </div>
                          </div>
                          <div className="my-3">
                            <select
                              name="Sort by Default"
                              className="default-select"
                            >
                              <option value="default">Sort by Default</option>
                              <option value="latest">Sort by Latest</option>
                            </select>
                          </div>
                          <div className="fm-customer-reviews__container">
                            <div className="fm-review-sec">
                              {item.reviews && item.reviews.length > 0 ? (
                                item.reviews.map((review, index) => (
                                  <div
                                    key={index}
                                    className="fm-review-container"
                                  >
                                    <div className="fm-review-box">
                                      <div className="flex space-between">
                                        <div className="flex gap flex-column color-gray text-xs">
                                          ⭐⭐⭐⭐⭐({review.rating})
                                          <div className="text-sm">
                                            {review.reviewerName}
                                          </div>
                                          <div className="text-xs">
                                            {review.reviewerEmail}
                                          </div>
                                        </div>
                                        <div className="flex text-xs">
                                          <div className="text-xs">
                                            {review.date}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="text-sm py-3">
                                        {review.comment}
                                      </div>
                                      <div className="fm-review-img__box">
                                        <div
                                          className="fm-review-img"
                                          style={{
                                            backgroundImage: `url(${item.images})`,
                                          }}
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <div className="fm-no-review__show">
                                  No reviews yet
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="fm__faq-sec my-5">
                          <div className="text-lg font-semibold">
                            Buyer Questions & Answers (2)
                          </div>
                          <div className="fm-faq-box">
                            <div className="fm-question-box flex flex-column gap-1 mt-3 py-5">
                              <div className="flex items-center gap-2 color-gray-500">
                                <div className="text-md">
                                  <RiQuestionnaireLine />
                                </div>
                                <div className="text-sm">Hello</div>
                              </div>
                              <div className="flex items-center gap-2 color-gray-500">
                                <div className="text-md">
                                  <MdQuestionAnswer />
                                </div>
                                <div className="text-sm">Hi</div>
                              </div>
                            </div>
                            <hr className="hr-preset2" />
                            <div className="justify-content-center color-pink font-semibold py-5">
                              <NavLink to="">Ask Questions</NavLink>
                            </div>
                          </div>
                        </div>
                        <div
                          id="fm-specifications"
                          className="fm__specifications-sec my-5"
                        >
                          <div className="text-lg font-semibold">
                            Specifications
                          </div>
                          <div className="flex flex-column">
                            <div className="fm__specifications-tags">
                              <div className="fm__specifications-tags-title">
                                Brand
                              </div>
                              <div className="fm__specifications-tags-about">
                                {item.brand}
                              </div>
                              <div className="fm__specifications-tags-title">
                                Category
                              </div>
                              <div className="fm__specifications-tags-about">
                                {item.category}
                              </div>
                              <div className="fm__specifications-tags-title">
                                sku
                              </div>
                              <div className="fm__specifications-tags-about">
                                {item.sku}
                              </div>
                            </div>
                            <button className="view-more-btn my-2">
                              View more
                            </button>
                          </div>
                        </div>
                        <div
                          id="fm-description"
                          className="fm__description-sec my-5"
                        >
                          <div className="text-lg font-semibold">
                            Description
                          </div>
                          <div className="my-2 p-1">{item.description}</div>
                        </div>
                        <div id="fm-store" className="fm__store-sec my-5"></div>
                      </div>
                      <hr className="hr-preset1" />
                      <div id="fm-more-items" className="fm__more-items-sec">
                        <div className="text-lg font-semibold my-5">
                          More to love
                        </div>
                        <div className="fm-more-items__controls">
                          <button
                            onClick={scrollLeft}
                            className="fm-more-items__arrow"
                          >
                            <ArrowLeft size={24} />
                          </button>
                          <div
                            className="fm-more-items__container"
                            ref={containerRef}
                          >
                            {products.map((product) => (
                              <div
                                className="fm-more-items__card"
                                key={product.id}
                              >
                                <div
                                  className="fm-more-items__image"
                                  style={{
                                    backgroundImage: `url(${product.image})`,
                                  }}
                                ></div>
                                <div className="fm-more-items__details">
                                  <div className="fm-more-items__name">
                                    {product.name}
                                  </div>
                                  <div className="fm-more-items__price">
                                    ${product.price}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <button
                            onClick={scrollRight}
                            className="fm-more-items__arrow"
                          >
                            <ArrowRight size={24} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="items-fm__right-side">
                      <div className="items-fm__checkout p-3">
                        <div
                          className={`items-fm__rightside-price ${
                            showPrice ? "show" : ""
                          }`}
                        >
                          <div className="item-fm__price flex items-center gap-1 my-1">
                            <div className="font-semibold">
                              <span className="text-xl">$</span>
                              <span className="text-xxl">{item.price}</span>
                            </div>
                            <div className="percentOff-badge">
                              <span className="text-md">$</span>
                              <span className="text-lg">20</span>
                            </div>
                            <div className="text-md sale-badge mb-1">-50%</div>
                          </div>
                          <hr className="hr-preset1" />
                        </div>
                        <div className="flex text-sm space-between items-center my-4">
                          <div className="color-gray">Sold by</div>
                          <div className="flex space-between items-center color-gray-500">
                            Shop1103735035 Store
                            <NavLink>
                              <ChevronRight size={15} className="color-gray" />
                            </NavLink>
                          </div>
                        </div>
                        <hr className="hr-preset2 my-2" />
                        <div className="mt-3 my-2">
                          <div className="flex items-center space-between color-gray text-sm">
                            <div>Delivery Option</div>
                            <NavLink>
                              <Info size={13} />
                            </NavLink>
                          </div>
                          <div className="flex space-between my-2 text-sm color-gray-500">
                            <div className="flex gap-1">
                              <div className="color-gray">
                                <MapPin size={15} />
                              </div>
                              <div className="fm-address">United State</div>
                            </div>
                            <NavLink>Change</NavLink>
                          </div>
                        </div>
                        <hr className="hr-preset1 my-3" />
                        <div className="flex space-between my-4 text-sm color-gray-500">
                          <div className="flex gap-1">
                            <div className="color-gray">
                              <Truck size={15} />
                            </div>
                            <div>
                              <div>Standard Shipping</div>
                              <div className="text-xs font-semibold my-1">
                                Delivery: Jan 14 - 20
                              </div>
                            </div>
                          </div>
                          <div>$30.00</div>
                        </div>
                        <hr className="hr-preset1 my-3" />
                        <div className="my-4">
                          <div className="flex items-center space-between color-gray text-sm">
                            <div>Return & Warranty </div>
                            <NavLink>
                              <Info size={13} />
                            </NavLink>
                          </div>
                          <div className="flex flex-column gap-2 my-4 text-sm color-gray-500">
                            <div className="flex gap-1">
                              <div className="color-gray">
                                <RefreshCw size={15} />
                              </div>
                              <div>
                                <div>{item.returnPolicy}</div>
                              </div>
                            </div>
                            <div className="flex gap-1">
                              <div className="color-gray">
                                <ShieldX size={15} />
                              </div>
                              <div>
                                <div>{item.warrantyInformation}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="hr-preset1 my-3" />
                        <div className="">
                          <div className="text-sm font-semibold">Quantity</div>
                          <div className="text-sm flex items-center gap-3 my-3">
                            <div className="quantity-btns color-gray">
                              <Plus size={13} />
                            </div>
                            <div className="font-semibold color-gray-500">
                              1
                            </div>
                            <div className="quantity-btns color-gray">
                              <Minus size={13} />
                            </div>
                          </div>
                        </div>
                        <div className="fm-checkout-btns">
                          <button className="fm-checkout-btn">Buy Now</button>
                          <button className="fm-checkout-btn">
                            <NavLink to="/cart">Add to Cart</NavLink>
                          </button>
                        </div>
                        <div className="fm-share-btns my-2">
                          <button className="fm-share-btn justify-content-center items-center gap">
                            <Share2 size={14} /> Share
                          </button>
                          <button className="fm-share-btn justify-content-center items-center gap">
                            <Heart size={14} />
                            212
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};
