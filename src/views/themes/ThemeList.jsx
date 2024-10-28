import React, { useState, useEffect, useRef } from 'react';
import bag from "./../../assets/images/icons/bag.svg"
import education from "./../../assets/images/icons/education.svg"
import search from "./../../assets/images/icons/search.svg"
import right from "./../../assets/images/icons/right.svg"
import theme1 from "./../../assets/images/theme/theme1.png"
import theme2 from "./../../assets/images/theme/theme2.png"
import theme3 from "./../../assets/images/theme/theme3.png"
import theme4 from "./../../assets/images/theme/theme4.png"
import theme5 from "./../../assets/images/theme/theme5.png"

export const ThemeList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Themes');
  const dropdownRef = useRef(null);

  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState('Popular');
  const dropdownRef1 = useRef(null);

  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside1 = (event) => {
        if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
          setIsOpen1(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside1);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside1);
      };
    }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Set the selected option
    setIsOpen(false); // Close the dropdown after selection
  };
  const handleOptionClick1 = (option) => {
    setSelectedOption1(option); // Set the selected option
    setIsOpen1(false); // Close the dropdown after selection
  };

  const themes=[
    {
      "id": 1,
      "name": "Corporate",
      "img":theme1,
      "catagory":["Education","Business"]
    },
    {
      "id": 2,
      "name": "Beauty & Wellness",
      "img":theme2,
      "catagory":["Business"]
    },
    {
      "id": 3,
      "name": "Dentist",
      "img":theme3,
      "catagory":["Business"]
    },
    {
      "id": 4,
      "name": "Blog",
      "img":theme4,
      "catagory":["Blog"]
    },
    {
      "id": 5,
      "name": "Education",
      "img":theme5,
      "catagory":["Education","Blog"]
    },
    {
      "id": 6,
      "name": "Beauty & Wellness",
      "img":theme2,
      "catagory":["eCommerce","Restaurant"]
    },
    {
      "id": 7,
      "name": "Dentist",
      "img":theme3,
      "catagory":["eCommerce"]
    },
    {
      "id": 8,
      "name": "Blog",
      "img":theme4,
      "catagory":["Health","Restaurant"]
    },
    {
      "id": 9,
      "name": "Education",
      "img":theme5,
      "catagory":["Blog"]
    },
    {
      "id": 10,
      "name": "Health",
      "img":theme3,
      "catagory":["Health"]
    }
  ]
  const handleSearchChange = () =>{
    setSearchQuery(event.target.value);
  }

  const filteredThemes = themes.filter(theme=>{
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    return(
      theme.name.toLowerCase().includes(lowerCaseSearchQuery) || theme.catagory.some(cat=>cat.toLowerCase().includes(lowerCaseSearchQuery))
    );
  });

  return (
    <>
      <div className="section themelist-container pt-0">
        <div className="list-header">
          <div className="container">
            <div className="dropdown" ref={dropdownRef}>
              <button className="dropdown-btn" onClick={toggleDropdown}>
                {selectedOption} <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path d="M19.4114 8.86328H12.6622H6.58469C5.54469 8.86328 5.02469 10.1199 5.76135 10.8566L11.3731 16.4683C12.2722 17.3675 13.7347 17.3675 14.6339 16.4683L16.7681 14.3341L20.2456 10.8566C20.9714 10.1199 20.4514 8.86328 19.4114 8.86328Z" fill="#122C65"/>
                </svg></span>
              </button>
              {isOpen && (
                <div className="dropdown-content">
                  <div className="megamenu">
                    <div className="menu-column">
                      <ul>  
                        <li>
                          <a href="#!" className={selectedOption === 'Themes' ? 'active' : ''} onClick={() => handleOptionClick('Themes')}><img src={education}/> Themes</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Business' ? 'active' : ''} onClick={() => handleOptionClick('Business')}><img src={bag}/> Business</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Health' ? 'active' : ''} onClick={() => handleOptionClick('Health')}><img src={bag}/>Health</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Restaurant' ? 'active' : ''} onClick={() => handleOptionClick('Restaurant')}><img src={education}/>Restaurant</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'eCommerce' ? 'active' : ''} onClick={() => handleOptionClick('eCommerce')}><img src={bag}/>eCommerce</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Blog' ? 'active' : ''} onClick={() => handleOptionClick('Blog')}><img src={education}/> Blog</a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-column">
                      <ul>
                        <li>
                          <a href="#!" className={selectedOption === 'Business' ? 'active' : ''} onClick={() => handleOptionClick('Business')}><img src={bag}/> Business</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Education' ? 'active' : ''} onClick={() => handleOptionClick('Education')}><img src={education}/> Education</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Health' ? 'active' : ''} onClick={() => handleOptionClick('Health')}><img src={bag}/>Health</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Restaurant' ? 'active' : ''} onClick={() => handleOptionClick('Restaurant')}><img src={education}/>Restaurant</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'eCommerce' ? 'active' : ''} onClick={() => handleOptionClick('eCommerce')}><img src={bag}/>eCommerce</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Blog' ? 'active' : ''} onClick={() => handleOptionClick('Blog')}><img src={education}/> Blog</a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-column">
                      <ul>
                        <li>
                          <a href="#!" className={selectedOption === 'Business' ? 'active' : ''} onClick={() => handleOptionClick('Business')}><img src={bag}/> Business</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Education' ? 'active' : ''} onClick={() => handleOptionClick('Education')}><img src={education}/> Education</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Health' ? 'active' : ''} onClick={() => handleOptionClick('Health')}><img src={bag}/>Health</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Restaurant' ? 'active' : ''} onClick={() => handleOptionClick('Restaurant')}><img src={education}/>Restaurant</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'eCommerce' ? 'active' : ''} onClick={() => handleOptionClick('eCommerce')}><img src={bag}/>eCommerce</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Blog' ? 'active' : ''} onClick={() => handleOptionClick('Blog')}><img src={education}/> Blog</a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-column">
                      <ul>
                        <li>
                          <a href="#!" className={selectedOption === 'Business' ? 'active' : ''} onClick={() => handleOptionClick('Business')}><img src={bag}/> Business</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Education' ? 'active' : ''} onClick={() => handleOptionClick('Education')}><img src={education}/> Education</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Health' ? 'active' : ''} onClick={() => handleOptionClick('Health')}><img src={bag}/>Health</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Restaurant' ? 'active' : ''} onClick={() => handleOptionClick('Restaurant')}><img src={education}/>Restaurant</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'eCommerce' ? 'active' : ''} onClick={() => handleOptionClick('eCommerce')}><img src={bag}/>eCommerce</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Blog' ? 'active' : ''} onClick={() => handleOptionClick('Blog')}><img src={education}/> Blog</a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-column">
                      <ul>
                        <li>
                          <a href="#!" className={selectedOption === 'Business' ? 'active' : ''} onClick={() => handleOptionClick('Business')}><img src={bag}/> Business</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Education' ? 'active' : ''} onClick={() => handleOptionClick('Education')}><img src={education}/> Education</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Health' ? 'active' : ''} onClick={() => handleOptionClick('Health')}><img src={bag}/>Health</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Restaurant' ? 'active' : ''} onClick={() => handleOptionClick('Restaurant')}><img src={education}/>Restaurant</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'eCommerce' ? 'active' : ''} onClick={() => handleOptionClick('eCommerce')}><img src={bag}/>eCommerce</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Blog' ? 'active' : ''} onClick={() => handleOptionClick('Blog')}><img src={education}/> Blog</a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-column">
                      <ul>
                        <li>
                          <a href="#!" className={selectedOption === 'Business' ? 'active' : ''} onClick={() => handleOptionClick('Business')}><img src={bag}/> Business</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Education' ? 'active' : ''} onClick={() => handleOptionClick('Education')}><img src={education}/> Education</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Health' ? 'active' : ''} onClick={() => handleOptionClick('Health')}><img src={bag}/>Health</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Restaurant' ? 'active' : ''} onClick={() => handleOptionClick('Restaurant')}><img src={education}/>Restaurant</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'eCommerce' ? 'active' : ''} onClick={() => handleOptionClick('eCommerce')}><img src={bag}/>eCommerce</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Blog' ? 'active' : ''} onClick={() => handleOptionClick('Blog')}><img src={education}/> Blog</a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-column">
                      <ul>
                        <li>
                          <a href="#!" className={selectedOption === 'Business' ? 'active' : ''} onClick={() => handleOptionClick('Business')}><img src={bag}/> Business</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Education' ? 'active' : ''} onClick={() => handleOptionClick('Education')}><img src={education}/> Education</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Health' ? 'active' : ''} onClick={() => handleOptionClick('Health')}><img src={bag}/>Health</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Restaurant' ? 'active' : ''} onClick={() => handleOptionClick('Restaurant')}><img src={education}/>Restaurant</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'eCommerce' ? 'active' : ''} onClick={() => handleOptionClick('eCommerce')}><img src={bag}/>eCommerce</a>
                        </li>
                        <li>
                          <a href="#!" className={selectedOption === 'Blog' ? 'active' : ''} onClick={() => handleOptionClick('Blog')}><img src={education}/> Blog</a>
                        </li>
                      </ul>
                    </div>
                   
                    
                  </div>
                </div>
              )}
            </div>
            <div className="pagename">
              <ul>
                <li>Themes</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                <path d="M9.82431 6.00141C9.66381 5.99783 9.5062 6.04496 9.3734 6.13632C9.24059 6.22767 9.13918 6.35874 9.08327 6.51117C9.02736 6.6636 9.01972 6.82988 9.06142 6.98691C9.10312 7.14394 9.19209 7.28385 9.31595 7.3873L14.042 11.4886L9.31595 15.5884C9.23027 15.6522 9.15851 15.7332 9.10518 15.8264C9.05184 15.9195 9.01807 16.0229 9.00598 16.1299C8.9939 16.2369 9.00375 16.3453 9.03494 16.4483C9.06612 16.5513 9.11795 16.6466 9.1872 16.7284C9.25644 16.8101 9.3416 16.8764 9.43735 16.9233C9.53309 16.9702 9.63736 16.9965 9.74361 17.0006C9.84987 17.0048 9.95582 16.9867 10.0548 16.9475C10.1539 16.9082 10.2438 16.8487 10.3191 16.7726L15.73 12.083C15.8149 12.0095 15.8832 11.9183 15.93 11.8156C15.9767 11.7128 16.001 11.601 16.001 11.4878C16.001 11.3747 15.9767 11.2629 15.93 11.1601C15.8832 11.0573 15.8149 10.9661 15.73 10.8926L10.3191 6.19849C10.1824 6.07551 10.0071 6.00577 9.82431 6.00141Z" fill="#DCDCDC"/>
              </svg></li>
                <li className='active'>Blog</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="listbody">
          <div className="container">
              <div className="body-header">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="section_heading text-center">
                      <h2 className='heading'>Responsive Blog Website Templates</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="body-main">
                <div className="search-container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="search">
                        <input type="search" placeholder='Search templates...' value={searchQuery} onChange={handleSearchChange}/>
                        <div className="serchicon">
                          <img src={search} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="filter">
                        <div className="dropdown" ref={dropdownRef1}>
                          <button className="dropdown-btn" onClick={toggleDropdown1}>
                           <span className="btntext">
                           Sort by <span className="catagory">{selectedOption1}</span>
                            </span> <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                              <path d="M19.4114 8.86328H12.6622H6.58469C5.54469 8.86328 5.02469 10.1199 5.76135 10.8566L11.3731 16.4683C12.2722 17.3675 13.7347 17.3675 14.6339 16.4683L16.7681 14.3341L20.2456 10.8566C20.9714 10.1199 20.4514 8.86328 19.4114 8.86328Z" fill="#122C65"/>
                            </svg></span>
                          </button>
                          {isOpen1 && (
                            <div className="dropdown-content">
                              <div className="megamenu">
                                <div className="menu-column">
                                  <ul>
                                    <li>
                                      <a href="#!" className={selectedOption1 === 'Popular' ? 'active' : ''} onClick={() => handleOptionClick1('Popular')}> Popular <img src={right} alt="" /></a>
                                    </li>
                                    <li>
                                      <a href="#!" className={selectedOption1 === 'Newest' ? 'active' : ''} onClick={() => handleOptionClick1('Newest')}>Newest <img src={right}/></a>
                                    </li>
                                    <li>
                                      <a href="#!" className={selectedOption1 === 'Editors Choice' ? 'active' : ''} onClick={() => handleOptionClick1('Editors Choice')}>Editors Choice<img src={right}/></a>
                                    </li>
                                    
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="theme-container">
                  <div className="row">
                    {
                      filteredThemes.map((item)=>(
                        <div className={item.catagory.includes(selectedOption) || selectedOption === 'Themes' ? 'col-lg-4 ' : 'col-lg-4 d-none'}>
                          <a className='theme-box' href="#!">
                              <div className="themeimg">
                                <img src={item.img} alt="" />
                              </div>
                              <div className="themeheading">
                                <h3>{item.name}</h3>
                                <div className="arrow">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                    <path d="M36.6978 18.7308C36.6974 18.7308 36.697 18.7307 36.6966 18.7307L29.6257 18.7478C29.096 18.7491 28.6675 19.1795 28.6688 19.7093C28.6701 20.2391 29.1005 20.6675 29.6303 20.6662L34.3776 20.6547L20.0137 35.0186C19.6391 35.3932 19.6391 36.0005 20.0137 36.3751C20.3883 36.7496 20.9956 36.7496 21.3702 36.3751L35.734 22.0112L35.7226 26.7585C35.7213 27.2882 36.1497 27.7187 36.6795 27.7199C37.2093 27.7212 37.6397 27.2927 37.641 26.763L37.6581 19.6922C37.6581 19.6918 37.658 19.6914 37.6581 19.6909C37.6586 19.1602 37.2269 18.7302 36.6978 18.7308Z" fill="#42FFFF"/>
                                  </svg>
                                </div>
                              </div>
                              <div className="readmore">
                                <h5><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                  <path d="M10 13.125C5.875 13.125 5.875 6.875 10 6.875C14.0781 6.875 14.2544 13.125 10 13.125ZM10 8.125C7.5 8.125 7.5 11.875 10 11.875C12.5 11.875 12.5 8.125 10 8.125Z" fill="white"/>
                                  <path d="M9.99875 15.625C6.90563 15.625 3.94375 13.9819 1.87375 11.1162C1.63843 10.7916 1.51172 10.4009 1.51172 10C1.51172 9.59906 1.63843 9.20837 1.87375 8.88375C3.94375 6.01812 6.90563 4.375 9.99875 4.375C13.0919 4.375 16.0538 6.01812 18.1238 8.88375C18.3591 9.20837 18.4858 9.59906 18.4858 10C18.4858 10.4009 18.3591 10.7916 18.1238 11.1162C16.0538 13.9819 13.0919 15.625 9.99875 15.625ZM2.88438 10.3837C4.74563 12.9575 7.27188 14.375 9.99875 14.375C12.7256 14.375 15.2519 12.9575 17.1131 10.3837C17.1941 10.2721 17.2377 10.1376 17.2377 9.99969C17.2377 9.86174 17.1941 9.72732 17.1131 9.61563C15.2519 7.0425 12.7256 5.625 9.99875 5.625C7.27188 5.625 4.74563 7.0425 2.88438 9.61625C2.80341 9.72794 2.75982 9.86236 2.75982 10.0003C2.75982 10.1383 2.80341 10.2721 2.88438 10.3837Z" fill="white"/>
                                </svg>Preview</h5>
                              </div>
                          </a>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>  
    </>
  );
};
