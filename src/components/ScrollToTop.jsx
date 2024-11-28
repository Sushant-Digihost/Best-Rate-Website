import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll to the top whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is past the first section (e.g., 100px)
      if (window.scrollY > document.querySelector(".hero").offsetHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <div className="top-button" onClick={scrollToTop}>
          <IoIosArrowUp />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
