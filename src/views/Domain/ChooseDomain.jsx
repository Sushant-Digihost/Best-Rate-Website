import { React, useState } from "react";
import search from "./../../assets/images/icons/search.svg";
import { useNavigate } from "react-router";

export const ChooseDomain = () => {
  const [buystatus, setbuystatus] = useState("buy");

  const [query, setquery] = useState("");
  const navigate = useNavigate();

  const buyevent = (status) => {
    setbuystatus(status);
  };

  // const handelkeypress = (event) => {
  //   if(event.key === "Enter" && query !== "") {
  //     navigate(`/search-domain`,{state:{searchQuery:query}})
  //   }
  // }
   const heandelsearch =()=>{
    if(query.trim() !== ""){
      navigate(`/search-domain`,{state:{searchQuery:query}})
    }
   }

   const handelkeydown =(event)=>{
    if(event.key ==="Enter"){
      heandelsearch();
    }
   }
  return (
    <section className="section choosedomain">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-10">
            <h2 className="heading">
              Do you already have a domain for your website?
            </h2>
          </div>
        </div>
        <div className="buyque">
          <div
            className={buystatus !== "buy" ? "buy active" : "buy"}
            onClick={() => buyevent("buy")}
          >
            <div className="buy-body">
              <div className="cardbtn">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6.12669 13.9784C5.97396 14.132 5.76558 14.2177 5.54913 14.2177C5.33267 14.2177 5.1243 14.132 4.97157 13.9784L0.359012 9.36506C-0.119671 8.88638 -0.119671 8.11016 0.359012 7.63238L0.936573 7.05467C1.4154 6.57598 2.19072 6.57598 2.6694 7.05467L5.54913 9.93454L13.3306 2.15296C13.8094 1.67427 14.5855 1.67427 15.0634 2.15296L15.641 2.73067C16.1196 3.20935 16.1196 3.98541 15.641 4.46335L6.12669 13.9784Z"
                      fill="#8AFAF3"
                    />
                  </svg>
                </span>
              </div>
              <h4>No, I want to buy.</h4>
            </div>
          </div>
          <div
            className={buystatus !== "have" ? "buy active" : "buy"}
            onClick={() => buyevent("have")}
          >
            <div className="buy-body">
              <div className="cardbtn">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6.12669 13.9784C5.97396 14.132 5.76558 14.2177 5.54913 14.2177C5.33267 14.2177 5.1243 14.132 4.97157 13.9784L0.359012 9.36506C-0.119671 8.88638 -0.119671 8.11016 0.359012 7.63238L0.936573 7.05467C1.4154 6.57598 2.19072 6.57598 2.6694 7.05467L5.54913 9.93454L13.3306 2.15296C13.8094 1.67427 14.5855 1.67427 15.0634 2.15296L15.641 2.73067C16.1196 3.20935 16.1196 3.98541 15.641 4.46335L6.12669 13.9784Z"
                      fill="#8AFAF3"
                    />
                  </svg>
                </span>
              </div>
              <h4>Yes, I already have.</h4>
            </div>
          </div>
        </div>
        <div className="search-container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="search">
                <input 
                type="search" 
                placeholder="simplyhappypets.in"
                value={query}
                onChange={(e)=>setquery(e.target.value)}
                onKeyDown={handelkeydown}
                />
                <div className="serchicon" onClick={heandelsearch}>
                  <img src={search} alt="search" />
                </div>
              </div>
              <h5 className="w-100 text-center mt-4">
                I already have a domain for my website
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
