import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const AddToCart = () => {
  const [iscode, setiscode] = useState("0");
  const [lgShow, setLgShow] = useState(false);
  const [promo, setpromo] = useState("");
  const [isApplied, setApplied] = useState(false);
  const [featuredata, setfeaturedata] = useState([
    {
      feacturetitle: "Dynamic",
      feacture: [
        {
          title: "Website Insurance",
          price: 799,
          status: "default",
        },
        {
          title: "Website Development",
          price: 799,
          status: "delete",
        },
        {
          title: "Web Hosting",
          price: 799,
          status: "add",
        },
        {
          title: "Up to 5 Static Pages",
          price: 799,
          status: "add",
        },
        {
          title: "Up to 3 Contact Forms",
          price: 799,
          status: "default",
        },
      ],
    },
    {
      feacturetitle: "Security and maintainance",
      feacture: [
        {
          title: "Website Insurance",
          price: 799,
          status: "default",
        },
        {
          title: "Website Development",
          price: 799,
          status: "add",
        },
        {
          title: "Web Hosting",
          price: 799,
          status: "added",
        },
        {
          title: "Up to 5 Static Pages",
          price: 799,
          status: "delete",
        },
        {
          title: "Up to 3 Contact Forms",
          price: 799,
          status: "default",
        },
      ],
    },
    {
      feacturetitle: "Hosting and Domain",
      feacture: [
        {
          title: "Website Insurance",
          price: 799,
          status: "add",
        },
        {
          title: "Website Development",
          price: 799,
          status: "default",
        },
        {
          title: "Web Hosting",
          price: 799,
          status: "delete",
        },
        {
          title: "Up to 5 Static Pages",
          price: 799,
          status: "default",
        },
        {
          title: "Up to 3 Contact Forms",
          price: 799,
          status: "default",
        },
      ],
    },
  ]);

  const handelcode = (e) => {
    setiscode("1");
  };

  const insure = [
    {
      title: "Website Insurance",
      price: 599.0,
      type: "Populer",
      offer: "",
      extraoff: false,
      discrip: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      title: "Website Insurance",
      price: 499.0,
      type: "Latest",
      offer: "Get 50% off",
      extraoff: true,
      discrip: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      title: "Website Insurance",
      price: 399.0,
      type: "",
      offer: "",
      extraoff: false,
      discrip: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
  ];

  const promocode = [
    {
      codetitle: "Enjoy an additional 5% off",
      code: "BRW15OFF",
    },
    {
      codetitle: "Enjoy an additional 9% off",
      code: "BRW13OFF",
    },
    {
      codetitle: "Enjoy an additional 6% off",
      code: "BRW12OFF",
    },
    {
      codetitle: "Enjoy an additional 10% off",
      code: "BRW11OFF",
    },
  ];
  const handelapply = () => {
    setApplied(true);
  };
  const hadelcopy = (code) => {
    setpromo(code);
    setApplied(false);
  };
  const codeinpute = (e) => {
    setpromo(e.target.value);
    setApplied(false);
  };
  const handlebuttonclick = (sectionindex, subindex, action) => {
    setfeaturedata((prevfeactureData) => {
      const updatedfeaturedata = prevfeactureData.map((section, index) => {
        if (index === sectionindex) {
          // Create a new array for the `feacture`
          const updatedfeacture = [...section.feacture];

          if (action === "add") {
            updatedfeacture[subindex].status = "added";
          } else if (action === "delete") {
            updatedfeacture.splice(subindex, 1); // Delete the specific element
          }

          // Return the updated section with the modified `feacture` array
          return { ...section, feacture: updatedfeacture };
        }

        // Return unmodified sections
        return section;
      });

      return updatedfeaturedata;
    });
  };

  const isvalisdpromo = promocode.some((item) => item.code === promo);

  useEffect(() => {
    // When modal is shown, add class to disable scroll
    if (lgShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup: Reset scroll behavior when component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lgShow]);

  return (
    <div className="section add-to-cart ">
      <div className="container">
        <div className="card-heading">
          <h3>Select Desired Add-ons</h3>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="row cardrow ">
              {insure.map((index) => (
                <div className="col-lg-4">
                  <div className="addcard">
                    <div className="sd">
                      <span
                        className={index.type === "" ? "d-none" : "catagiry"}
                      >
                        {index.type}
                      </span>

                      <h3>{index.title}</h3>
                      <p>{index.discrip}</p>
                      <div className="offer">
                        <span
                          className={index.offer === "" ? "d-none" : "offerpar"}
                        >
                          {index.offer}
                        </span>
                        <p
                          className={
                            index.extraoff !== true ? "d-none" : "offdis"
                          }
                        >
                          If purchase get for <span>2 years</span>
                        </p>
                      </div>
                    </div>
                    <div className="prizecontainer">
                      <h4 className="prize">
                        <span className="yr">₹</span>
                        {index.price}/<span className="yr">yr</span>
                      </h4>
                      <div className="btn_wrap pb-0 text-center">
                        <a href="#!" className="button2 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                            fill="none"
                          >
                            <path
                              d="M21 10.5C20.5359 10.5 20.0908 10.6844 19.7626 11.0126C19.4344 11.3408 19.25 11.7859 19.25 12.25V19.25H12.25C11.7859 19.25 11.3408 19.4344 11.0126 19.7626C10.6844 20.0908 10.5 20.5359 10.5 21C10.5 21.4641 10.6844 21.9092 11.0126 22.2374C11.3408 22.5656 11.7859 22.75 12.25 22.75H19.25V29.75C19.25 30.2141 19.4344 30.6593 19.7626 30.9874C20.0908 31.3156 20.5359 31.5 21 31.5C21.4641 31.5 21.9092 31.3156 22.2374 30.9874C22.5656 30.6593 22.75 30.2141 22.75 29.75V22.75H29.75C30.2141 22.75 30.6593 22.5656 30.9874 22.2374C31.3156 21.9092 31.5 21.4641 31.5 21C31.5 20.5359 31.3156 20.0908 30.9874 19.7626C30.6593 19.4344 30.2141 19.25 29.75 19.25H22.75V12.25C22.75 11.7859 22.5656 11.3408 22.2374 11.0126C21.9092 10.6844 21.4641 10.5 21 10.5Z"
                              fill="#8AFAF3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-lg-12">
                <div className="cartlist">
                  <div className="service">
                    <div className="carttitle">
                      <h4>Premium</h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                    <div className="carttitle">
                      <div className="tool">
                        <a
                          href="#!"
                          className="edit"
                          onClick={() => setLgShow(true)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 22C4.617 22 2 19.383 2 12C2 4.617 4.617 2 12 2C12.414 2 12.75 2.336 12.75 2.75C12.75 3.164 12.414 3.5 12 3.5C5.486 3.5 3.5 5.486 3.5 12C3.5 18.514 5.486 20.5 12 20.5C18.514 20.5 20.5 18.514 20.5 12C20.5 11.586 20.836 11.25 21.25 11.25C21.664 11.25 22 11.586 22 12C22 19.383 19.383 22 12 22Z"
                              fill="#999999"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M19.235 9.3896L20.2937 8.19426C21.4457 6.89326 21.3237 4.89826 20.0237 3.74526C19.3937 3.18726 18.5797 2.90726 17.7437 2.95926C16.9037 3.01026 16.1337 3.38626 15.5757 4.01626L9.69173 10.6643C7.86773 12.7223 9.11573 15.4433 9.16973 15.5583C9.25873 15.7473 9.42273 15.8913 9.62173 15.9533C9.67873 15.9723 10.3427 16.1753 11.2177 16.1753C12.2027 16.1753 13.4557 15.9163 14.4077 14.8403L19.0759 9.56925C19.1067 9.54399 19.1359 9.51592 19.1631 9.48504C19.19 9.45471 19.214 9.42278 19.235 9.3896ZM10.4067 14.5993C11.0337 14.7133 12.4177 14.8253 13.2847 13.8463L17.5356 9.04652L15.0641 6.85765L10.8157 11.6593C9.92773 12.6603 10.2107 13.9953 10.4067 14.5993ZM16.0581 5.7343L18.5307 7.92292L19.1707 7.20026C19.7737 6.51826 19.7107 5.47226 19.0297 4.86926C18.6987 4.57726 18.2697 4.42826 17.8347 4.45626C17.3947 4.48426 16.9917 4.68026 16.6987 5.01026L16.0581 5.7343Z"
                              fill="#999999"
                            />
                          </svg>
                        </a>
                        <a href="#!">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.3094 2.24996H13.6908C13.9072 2.24982 14.0957 2.2497 14.2737 2.27813C14.977 2.39044 15.5856 2.82909 15.9146 3.46078C15.9978 3.62067 16.0573 3.79955 16.1256 4.00488L16.2373 4.33978C16.2562 4.39647 16.2616 4.41252 16.2661 4.42516C16.4413 4.90928 16.8953 5.23654 17.4099 5.24958C17.4235 5.24992 17.44 5.24998 17.5001 5.24998H20.5001C20.9143 5.24998 21.2501 5.58577 21.2501 5.99998C21.2501 6.41419 20.9143 6.74998 20.5001 6.74998H3.5C3.08579 6.74998 2.75 6.41419 2.75 5.99998C2.75 5.58577 3.08579 5.24998 3.5 5.24998H6.50008C6.56013 5.24998 6.5767 5.24992 6.59023 5.24958C7.10488 5.23654 7.55891 4.9093 7.73402 4.42518C7.73863 4.41246 7.74392 4.39675 7.76291 4.33978L7.87452 4.00491C7.94281 3.79959 8.00233 3.62067 8.08559 3.46078C8.41453 2.82909 9.02313 2.39044 9.72643 2.27813C9.90445 2.2497 10.093 2.24982 10.3094 2.24996ZM9.00815 5.24998C9.05966 5.14896 9.10531 5.04398 9.14458 4.93542C9.1565 4.90246 9.1682 4.86736 9.18322 4.82228L9.28302 4.52287C9.37419 4.24936 9.39519 4.19357 9.41601 4.15358C9.52566 3.94302 9.72853 3.7968 9.96296 3.75936C10.0075 3.75225 10.067 3.74998 10.3553 3.74998H13.6448C13.9331 3.74998 13.9927 3.75225 14.0372 3.75936C14.2716 3.7968 14.4745 3.94302 14.5842 4.15358C14.605 4.19357 14.626 4.24935 14.7171 4.52287L14.8169 4.8221L14.8556 4.93544C14.8949 5.044 14.9405 5.14896 14.992 5.24998H9.00815Z"
                              fill="black"
                              fill-opacity="0.4"
                            />
                            <path
                              d="M5.91634 8.45008C5.88879 8.03678 5.53141 7.72408 5.11811 7.75163C4.70482 7.77918 4.39211 8.13656 4.41966 8.54986L4.88311 15.5016C4.96861 16.7844 5.03767 17.8205 5.19964 18.6336C5.36804 19.4789 5.65446 20.185 6.24605 20.7384C6.83765 21.2919 7.5612 21.5307 8.41585 21.6425C9.23787 21.75 10.2762 21.75 11.5618 21.75H12.4407C13.7263 21.75 14.7647 21.75 15.5868 21.6425C16.4414 21.5307 17.165 21.2919 17.7566 20.7384C18.3482 20.185 18.6346 19.4789 18.803 18.6336C18.965 17.8205 19.034 16.7844 19.1195 15.5016L19.583 8.54986C19.6105 8.13656 19.2978 7.77918 18.8845 7.75163C18.4712 7.72408 18.1138 8.03678 18.0863 8.45008L17.6263 15.3492C17.5365 16.6971 17.4725 17.6349 17.3319 18.3405C17.1955 19.025 17.0052 19.3873 16.7318 19.6431C16.4584 19.8988 16.0842 20.0647 15.3922 20.1552C14.6788 20.2485 13.7388 20.25 12.388 20.25H11.6146C10.2638 20.25 9.3238 20.2485 8.6104 20.1552C7.9184 20.0647 7.54424 19.8988 7.27083 19.6431C6.99742 19.3873 6.80708 19.025 6.67073 18.3405C6.53017 17.6349 6.46614 16.6971 6.37628 15.3492L5.91634 8.45008Z"
                              fill="black"
                              fill-opacity="0.4"
                            />
                            <path
                              d="M9.42543 10.2537C9.83759 10.2125 10.2052 10.5132 10.2464 10.9254L10.7464 15.9254C10.7876 16.3375 10.4869 16.7051 10.0747 16.7463C9.66253 16.7875 9.295 16.4868 9.25378 16.0746L8.75378 11.0746C8.71257 10.6625 9.01328 10.2949 9.42543 10.2537Z"
                              fill="black"
                              fill-opacity="0.4"
                            />
                            <path
                              d="M14.5747 10.2537C14.9869 10.2949 15.2876 10.6625 15.2464 11.0746L14.7464 16.0746C14.7052 16.4868 14.3376 16.7875 13.9255 16.7463C13.5133 16.7051 13.2126 16.3375 13.2538 15.9254L13.7538 10.9254C13.795 10.5132 14.1626 10.2125 14.5747 10.2537Z"
                              fill="black"
                              fill-opacity="0.4"
                            />
                          </svg>
                        </a>
                      </div>
                      <h4>
                        <span>₹</span>1,199.00
                      </h4>
                    </div>
                  </div>
                  <hr />
                  <div className="service">
                    <div className="carttitle">
                      <h4>digihost.in</h4>
                      <p>.IN domain registration</p>
                    </div>
                    <div className="carttitle">
                      <div className="tool">
                        <a href="#!">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.3094 2.24996H13.6908C13.9072 2.24982 14.0957 2.2497 14.2737 2.27813C14.977 2.39044 15.5856 2.82909 15.9146 3.46078C15.9978 3.62067 16.0573 3.79955 16.1256 4.00488L16.2373 4.33978C16.2562 4.39647 16.2616 4.41252 16.2661 4.42516C16.4413 4.90928 16.8953 5.23654 17.4099 5.24958C17.4235 5.24992 17.44 5.24998 17.5001 5.24998H20.5001C20.9143 5.24998 21.2501 5.58577 21.2501 5.99998C21.2501 6.41419 20.9143 6.74998 20.5001 6.74998H3.5C3.08579 6.74998 2.75 6.41419 2.75 5.99998C2.75 5.58577 3.08579 5.24998 3.5 5.24998H6.50008C6.56013 5.24998 6.5767 5.24992 6.59023 5.24958C7.10488 5.23654 7.55891 4.9093 7.73402 4.42518C7.73863 4.41246 7.74392 4.39675 7.76291 4.33978L7.87452 4.00491C7.94281 3.79959 8.00233 3.62067 8.08559 3.46078C8.41453 2.82909 9.02313 2.39044 9.72643 2.27813C9.90445 2.2497 10.093 2.24982 10.3094 2.24996ZM9.00815 5.24998C9.05966 5.14896 9.10531 5.04398 9.14458 4.93542C9.1565 4.90246 9.1682 4.86736 9.18322 4.82228L9.28302 4.52287C9.37419 4.24936 9.39519 4.19357 9.41601 4.15358C9.52566 3.94302 9.72853 3.7968 9.96296 3.75936C10.0075 3.75225 10.067 3.74998 10.3553 3.74998H13.6448C13.9331 3.74998 13.9927 3.75225 14.0372 3.75936C14.2716 3.7968 14.4745 3.94302 14.5842 4.15358C14.605 4.19357 14.626 4.24935 14.7171 4.52287L14.8169 4.8221L14.8556 4.93544C14.8949 5.044 14.9405 5.14896 14.992 5.24998H9.00815Z"
                              fill="black"
                              fill-opacity="0.4"
                            />
                            <path
                              d="M5.91634 8.45008C5.88879 8.03678 5.53141 7.72408 5.11811 7.75163C4.70482 7.77918 4.39211 8.13656 4.41966 8.54986L4.88311 15.5016C4.96861 16.7844 5.03767 17.8205 5.19964 18.6336C5.36804 19.4789 5.65446 20.185 6.24605 20.7384C6.83765 21.2919 7.5612 21.5307 8.41585 21.6425C9.23787 21.75 10.2762 21.75 11.5618 21.75H12.4407C13.7263 21.75 14.7647 21.75 15.5868 21.6425C16.4414 21.5307 17.165 21.2919 17.7566 20.7384C18.3482 20.185 18.6346 19.4789 18.803 18.6336C18.965 17.8205 19.034 16.7844 19.1195 15.5016L19.583 8.54986C19.6105 8.13656 19.2978 7.77918 18.8845 7.75163C18.4712 7.72408 18.1138 8.03678 18.0863 8.45008L17.6263 15.3492C17.5365 16.6971 17.4725 17.6349 17.3319 18.3405C17.1955 19.025 17.0052 19.3873 16.7318 19.6431C16.4584 19.8988 16.0842 20.0647 15.3922 20.1552C14.6788 20.2485 13.7388 20.25 12.388 20.25H11.6146C10.2638 20.25 9.3238 20.2485 8.6104 20.1552C7.9184 20.0647 7.54424 19.8988 7.27083 19.6431C6.99742 19.3873 6.80708 19.025 6.67073 18.3405C6.53017 17.6349 6.46614 16.6971 6.37628 15.3492L5.91634 8.45008Z"
                              fill="black"
                              fill-opacity="0.4"
                            />
                            <path
                              d="M9.42543 10.2537C9.83759 10.2125 10.2052 10.5132 10.2464 10.9254L10.7464 15.9254C10.7876 16.3375 10.4869 16.7051 10.0747 16.7463C9.66253 16.7875 9.295 16.4868 9.25378 16.0746L8.75378 11.0746C8.71257 10.6625 9.01328 10.2949 9.42543 10.2537Z"
                              fill="black"
                              fill-opacity="0.4"
                            />
                            <path
                              d="M14.5747 10.2537C14.9869 10.2949 15.2876 10.6625 15.2464 11.0746L14.7464 16.0746C14.7052 16.4868 14.3376 16.7875 13.9255 16.7463C13.5133 16.7051 13.2126 16.3375 13.2538 15.9254L13.7538 10.9254C13.795 10.5132 14.1626 10.2125 14.5747 10.2537Z"
                              fill="black"
                              fill-opacity="0.4"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="year">
                    <div className="yeardrop">
                      <select name="Years">
                        <option value="1 year">1 year</option>
                        <option value="2 year">2 year</option>
                        <option value="3 year">3 year</option>
                      </select>
                    </div>
                    <div className="save">
                      <span className="off">Save 18%</span>
                      <div className="pri">
                        <h4>
                          <span>₹</span>499.00
                        </h4>
                        <del>₹899.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="expire">
                    <p>Registration renews at ₹499.00/year on 21/10/2025</p>
                  </div>
                  <hr />
                  <div className="service">
                    <div className="carttitle">
                      <h4>Website Insurance</h4>
                      <p>Added Add-ons</p>
                    </div>
                    <div className="carttitle">
                      <div className="tool">
                        <a href="#!">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.3094 2.24996H13.6908C13.9072 2.24982 14.0957 2.2497 14.2737 2.27813C14.977 2.39044 15.5856 2.82909 15.9146 3.46078C15.9978 3.62067 16.0573 3.79955 16.1256 4.00488L16.2373 4.33978C16.2562 4.39647 16.2616 4.41252 16.2661 4.42516C16.4413 4.90928 16.8953 5.23654 17.4099 5.24958C17.4235 5.24992 17.44 5.24998 17.5001 5.24998H20.5001C20.9143 5.24998 21.2501 5.58577 21.2501 5.99998C21.2501 6.41419 20.9143 6.74998 20.5001 6.74998H3.5C3.08579 6.74998 2.75 6.41419 2.75 5.99998C2.75 5.58577 3.08579 5.24998 3.5 5.24998H6.50008C6.56013 5.24998 6.5767 5.24992 6.59023 5.24958C7.10488 5.23654 7.55891 4.9093 7.73402 4.42518C7.73863 4.41246 7.74392 4.39675 7.76291 4.33978L7.87452 4.00491C7.94281 3.79959 8.00233 3.62067 8.08559 3.46078C8.41453 2.82909 9.02313 2.39044 9.72643 2.27813C9.90445 2.2497 10.093 2.24982 10.3094 2.24996ZM9.00815 5.24998C9.05966 5.14896 9.10531 5.04398 9.14458 4.93542C9.1565 4.90246 9.1682 4.86736 9.18322 4.82228L9.28302 4.52287C9.37419 4.24936 9.39519 4.19357 9.41601 4.15358C9.52566 3.94302 9.72853 3.7968 9.96296 3.75936C10.0075 3.75225 10.067 3.74998 10.3553 3.74998H13.6448C13.9331 3.74998 13.9927 3.75225 14.0372 3.75936C14.2716 3.7968 14.4745 3.94302 14.5842 4.15358C14.605 4.19357 14.626 4.24935 14.7171 4.52287L14.8169 4.8221L14.8556 4.93544C14.8949 5.044 14.9405 5.14896 14.992 5.24998H9.00815Z"
                              fill="black"
                              fill-opacity="0.4"
                            />
                            <path
                              d="M5.91634 8.45008C5.88879 8.03678 5.53141 7.72408 5.11811 7.75163C4.70482 7.77918 4.39211 8.13656 4.41966 8.54986L4.88311 15.5016C4.96861 16.7844 5.03767 17.8205 5.19964 18.6336C5.36804 19.4789 5.65446 20.185 6.24605 20.7384C6.83765 21.2919 7.5612 21.5307 8.41585 21.6425C9.23787 21.75 10.2762 21.75 11.5618 21.75H12.4407C13.7263 21.75 14.7647 21.75 15.5868 21.6425C16.4414 21.5307 17.165 21.2919 17.7566 20.7384C18.3482 20.185 18.6346 19.4789 18.803 18.6336C18.965 17.8205 19.034 16.7844 19.1195 15.5016L19.583 8.54986C19.6105 8.13656 19.2978 7.77918 18.8845 7.75163C18.4712 7.72408 18.1138 8.03678 18.0863 8.45008L17.6263 15.3492C17.5365 16.6971 17.4725 17.6349 17.3319 18.3405C17.1955 19.025 17.0052 19.3873 16.7318 19.6431C16.4584 19.8988 16.0842 20.0647 15.3922 20.1552C14.6788 20.2485 13.7388 20.25 12.388 20.25H11.6146C10.2638 20.25 9.3238 20.2485 8.6104 20.1552C7.9184 20.0647 7.54424 19.8988 7.27083 19.6431C6.99742 19.3873 6.80708 19.025 6.67073 18.3405C6.53017 17.6349 6.46614 16.6971 6.37628 15.3492L5.91634 8.45008Z"
                              fill="black"
                              fill-opacity="0.4"
                            />
                            <path
                              d="M9.42543 10.2537C9.83759 10.2125 10.2052 10.5132 10.2464 10.9254L10.7464 15.9254C10.7876 16.3375 10.4869 16.7051 10.0747 16.7463C9.66253 16.7875 9.295 16.4868 9.25378 16.0746L8.75378 11.0746C8.71257 10.6625 9.01328 10.2949 9.42543 10.2537Z"
                              fill="black"
                              fill-opacity="0.4"
                            />
                            <path
                              d="M14.5747 10.2537C14.9869 10.2949 15.2876 10.6625 15.2464 11.0746L14.7464 16.0746C14.7052 16.4868 14.3376 16.7875 13.9255 16.7463C13.5133 16.7051 13.2126 16.3375 13.2538 15.9254L13.7538 10.9254C13.795 10.5132 14.1626 10.2125 14.5747 10.2537Z"
                              fill="black"
                              fill-opacity="0.4"
                            />
                          </svg>
                        </a>
                      </div>
                      <h4>
                        <span>₹</span>499.00
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="btn_wrap mt-4 pb-0 text-center">
                  <a href="#!" className="button  w-100 ">
                    Complete Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={iscode === "1" ? "sticy-box" : "sticy-box fix"}>
              <div className="subtotale">
                <h4>Subtotal</h4>
                <h4>₹1,029.00</h4>
              </div>
              <hr />
              <div className="breakedown">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Breakdown</Accordion.Header>
                    <Accordion.Body>
                      <div className="prime">
                        <h4>Premium</h4>
                        <h4>₹1,199.00</h4>
                      </div>
                      <div className="prime">
                        <h4>digihost.in</h4>
                        <h4>₹499.00</h4>
                      </div>
                      <div className="prime">
                        <h4>
                          Website Insurance <span>Get 5% off</span>
                        </h4>
                        <h4>₹499.00</h4>
                      </div>
                      <div className="final">
                        <h4>Subtotal</h4>
                        <h4>₹1,029.00</h4>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <hr />
              <div className="promo">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Have a promo code?</Accordion.Header>
                    <Accordion.Body>
                      <div className="inputgroup">
                        <input
                          type="inpute"
                          className="form-control"
                          id="promo"
                          value={promo}
                          onChange={codeinpute}
                          placeholder="Enter promo"
                        />
                        <button
                          className={!isvalisdpromo ? "btn" : "btn active"}
                          onClick={handelapply}
                          type="button"
                          id="apply"
                        >
                          {isvalisdpromo ? "Applied" : "Apply"}
                        </button>
                      </div>
                      <div className={promo === "" ? "d-none" : "codeworning"}>
                        {isvalisdpromo && (
                          <div className="valid">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.7386 2.20059C13.061 2.49098 13.089 2.99004 12.8012 3.31528L5.34775 11.7363C5.19927 11.9041 4.98692 12 4.76398 12C4.54104 12 4.32868 11.9041 4.18021 11.7363L1.19883 8.3679C0.91097 8.04264 0.938978 7.54358 1.26139 7.25316C1.58379 6.96285 2.07853 6.99106 2.36639 7.31632L4.76398 10.0252L11.6337 2.26368C11.9215 1.93844 12.4162 1.91019 12.7386 2.20059Z"
                                  fill="#008000"
                                />
                              </svg>
                            </span>
                            <p>
                              <span>VALID PROMO CODE</span>. You're getting the
                              best price we've got.
                            </p>
                          </div>
                        )}
                        {!isvalisdpromo && (
                          <div className="in valid">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  d="M10.64 8.00051L15.5898 3.0507C16.1367 2.50379 16.1367 1.61713 15.5898 1.07108L14.9299 0.411203C14.3829 -0.135871 13.4962 -0.135871 12.9502 0.411203L8.00051 5.36085L3.0507 0.410178C2.50379 -0.136726 1.61713 -0.136726 1.07108 0.410178L0.410178 1.07005C-0.136726 1.61713 -0.136726 2.50379 0.410178 3.04984L5.36085 8.00051L0.411203 12.9502C-0.135871 13.4972 -0.135871 14.3839 0.411203 14.9299L1.07108 15.5898C1.61798 16.1367 2.50465 16.1367 3.0507 15.5898L8.00051 10.64L12.9502 15.5898C13.4972 16.1367 14.3839 16.1367 14.9299 15.5898L15.5898 14.9299C16.1367 14.3829 16.1367 13.4962 15.5898 12.9502L10.64 8.00051Z"
                                  fill="#fd2727"
                                />
                              </svg>
                            </span>
                            <p>
                              <span>INVALID PROMO CODE</span>.
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="porcode">
                        <a href="#!">Apply best promo code</a>
                        <a href="#!" onClick={handelcode}>
                          Browse code
                        </a>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="btn_wrap mt-4 pb-0 text-center">
                <a href="#!" className="button  w-100 ">
                  Continue
                </a>
              </div>
            </div>
            <div className={iscode === "0" ? "d-none" : "codesug"}>
              {promocode.map((promoitem, index) => (
                <div className="codeconteainer" key={`promo-${index}`}>
                  <h4>{promoitem.codetitle}</h4>
                  <div className="ogcode">
                    <h4>{promoitem.code}</h4>
                    <button
                      class="cpy-btn"
                      type="button"
                      onClick={() => hadelcopy(promoitem.code)}
                    >
                      {promo === promoitem.code && isvalisdpromo
                        ? "Applied"
                        : "Apply"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="continueshoping">
          <a href="#!">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.6536 7.54643C11.3814 7.23421 10.9076 7.20176 10.5954 7.47395L6.0071 11.474C5.8438 11.6164 5.75 11.8226 5.75 12.0393C5.75 12.2561 5.8438 12.4622 6.0071 12.6046L10.5954 16.6046C10.9076 16.8768 11.3814 16.8444 11.6536 16.5322C11.9258 16.2199 11.8933 15.7462 11.5811 15.474L8.5016 12.7893H17.5C17.9142 12.7893 18.25 12.4535 18.25 12.0393C18.25 11.6251 17.9142 11.2893 17.5 11.2893H8.5016L11.5811 8.60461C11.8933 8.33242 11.9258 7.85865 11.6536 7.54643Z"
                fill="#122C65"
              />
            </svg>
            Continue shopping
          </a>
        </div>
      </div>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="mod1"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="pop1">
            <div className="pri">
              <h3>Premium</h3>
              <p>
                Best for organizations or personalities looking for a dynamic
                presence and constantly.
              </p>
            </div>
            <div className="list1">
              <Accordion defaultActiveKey={[0]} alwaysOpen>
                {featuredata.map((data, sectionindex) => (
                  <Accordion.Item eventKey={sectionindex}>
                    <Accordion.Header>{data.feacturetitle}</Accordion.Header>
                    <Accordion.Body>
                      <div className={`listbody ${sectionindex}`}>
                        <ul>
                          {data.feacture.map((list, subindex) => (
                            <li key={subindex}>
                              <h4>{list.title}</h4>
                              <div className="prise">
                                <h4>
                                  <span>₹</span>
                                  {list.price}
                                </h4>
                                {list.status === "add" && (
                                  <button
                                    className="add"
                                    onClick={() =>
                                      handlebuttonclick(
                                        sectionindex,
                                        subindex,
                                        "add"
                                      )
                                    }
                                  >
                                    <svg
                                      className=""
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clip-path="url(#clip0_2146_7234)">
                                        <path
                                          d="M18 2C20.206 2 22 3.794 22 6V18C22 20.206 20.206 22 18 22H6C3.794 22 2 20.206 2 18V6C2 3.794 3.794 2 6 2H18ZM18 0H6C2.686 0 0 2.686 0 6V18C0 21.314 2.686 24 6 24H18C21.314 24 24 21.314 24 18V6C24 2.686 21.314 0 18 0Z"
                                          fill="#122C65"
                                        />
                                        <path
                                          d="M12 18C11.448 18 11 17.553 11 17V7C11 6.448 11.448 6 12 6C12.552 6 13 6.448 13 7V17C13 17.553 12.552 18 12 18Z"
                                          fill="#122C65"
                                        />
                                        <path
                                          d="M6 11.9968C6 11.4448 6.447 10.9968 7 10.9968H17C17.552 10.9968 18 11.4448 18 11.9968C18 12.5488 17.552 12.9968 17 12.9968H7C6.447 12.9968 6 12.5488 6 11.9968Z"
                                          fill="#122C65"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_2146_7234">
                                          <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </button>
                                )}
                                {list.status === "delete" && (
                                  <button
                                    className="delete"
                                    onClick={() =>
                                      handlebuttonclick(
                                        sectionindex,
                                        subindex,
                                        "delete"
                                      )
                                    }
                                  >
                                    <svg
                                      className=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <g clip-path="url(#clip0_2146_7258)">
                                        <path
                                          d="M18 2C20.206 2 22 3.794 22 6V18C22 20.206 20.206 22 18 22H6C3.794 22 2 20.206 2 18V6C2 3.794 3.794 2 6 2H18ZM18 0H6C2.686 0 0 2.686 0 6V18C0 21.314 2.686 24 6 24H18C21.314 24 24 21.314 24 18V6C24 2.686 21.314 0 18 0Z"
                                          fill="#F34235"
                                        />
                                        <path
                                          d="M6 12C6 11.448 6.447 11 7 11H17C17.552 11 18 11.448 18 12C18 12.552 17.552 13 17 13H7C6.447 13 6 12.552 6 12Z"
                                          fill="#F34235"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_2146_7258">
                                          <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </button>
                                )}
                                {list.status === "default" && (
                                  <button
                                    className="default"
                                    onClick={() =>
                                      handlebuttonclick(
                                        sectionindex,
                                        subindex,
                                        "default"
                                      )
                                    }
                                  >
                                    <svg
                                      className=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                      fill="none"
                                    >
                                      <path
                                        d="M4.59502 10.4821C4.48047 10.5973 4.32419 10.6616 4.16185 10.6616C3.99951 10.6616 3.84322 10.5973 3.72868 10.4821L0.269259 7.02209C-0.089753 6.66307 -0.089753 6.08091 0.269259 5.72257L0.702429 5.28929C1.06155 4.93028 1.64304 4.93028 2.00205 5.28929L4.16185 7.4492L9.99792 1.61301C10.357 1.254 10.9391 1.254 11.2975 1.61301L11.7307 2.04629C12.0897 2.4053 12.0897 2.98735 11.7307 3.3458L4.59502 10.4821Z"
                                        fill="#9D9D9D"
                                      />
                                    </svg>
                                  </button>
                                )}
                                {list.status === "added" && (
                                  <button className="added">
                                    <svg
                                      className=""
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        width="24"
                                        height="24"
                                        rx="3"
                                        fill="#122C65"
                                      />
                                      <path
                                        d="M10.595 16.4837C10.4805 16.5989 10.3242 16.6632 10.1618 16.6632C9.99951 16.6632 9.84322 16.5989 9.72868 16.4837L6.26926 13.0237C5.91025 12.6647 5.91025 12.0825 6.26926 11.7242L6.70243 11.2909C7.06155 10.9319 7.64304 10.9319 8.00205 11.2909L10.1618 13.4508L15.9979 7.6146C16.357 7.25558 16.9391 7.25558 17.2975 7.6146L17.7307 8.04788C18.0897 8.40689 18.0897 8.98894 17.7307 9.34739L10.595 16.4837Z"
                                        fill="#8AFAF3"
                                      />
                                    </svg>
                                  </button>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
            <div className="clear">
              <a href="#!">Clear all edit</a>
              <h4>
                <span>₹</span>1,999
              </h4>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
