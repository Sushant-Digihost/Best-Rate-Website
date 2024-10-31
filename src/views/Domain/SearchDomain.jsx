import React,{useEffect,useState} from 'react'
import search from "./../../assets/images/icons/search.svg"

export const SearchDomain = () => {

    const domainlist=[
        {
            domain:"diigiihost.in",
            oldprize:3000,
            current:1199,
            features:[
                "Full new features access",
                "Website Designing",
                "Up to 5 Static Pages"
            ]

        },
        {
            domain:"diigiihost.com",
            oldprize:3000,
            current:1199,
            features:[
                "Full new features access",
                "Website Designing",
                "Up to 5 Static Pages"
            ]

        },  
        {
            domain:"diigiihost.org",
            oldprize:3000,
            current:1199,
            features:[
                "Full new features access",
                "Website Designing",
                "Up to 5 Static Pages"
            ]

        }
    ]
    const optiondomain=[
        {
            damain:"diigiihost.com",
            prize:1999
        },
        {
            damain:"diigiihost.net",
            prize:1999
        },
        {
            damain:"diigiihost.online",
            prize:1999
        },
        {
            damain:"diigihost.info",
            prize:1999
        },
        {
            damain:"diigiihost.org",
            prize:1999
        },
        {
            damain:"diigiihost.live",
            prize:1999
        },
    ]
    
    const [isvisible ,setisvisible]= useState(true);
    const [prevscrollpos,setprevscrollpos]=useState(0);

    useEffect(()=>{
        const handlescroll =()=>{
            const currentsrollpos = window.pageYOffset;
            const sectiontop = document.getElementsByClassName("sroll").offsetTop;


            if(currentsrollpos>prevscrollpos){
                setisvisible(false);
            } else{
                setisvisible(true);
            }

            if(currentsrollpos<= sectiontop){
                setisvisible(true);
            }

            setprevscrollpos(currentsrollpos);
        };

        window.addEventListener("scroll",handlescroll);

        return () =>{
            window.removeEventListener("scroll",handlescroll)
        };

    },[prevscrollpos]);

  return (
    <section className="section searchdomain">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h2 className='heading'>Register Your Domain</h2>
                </div>
            </div>
            <div className="search-container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="search">
                            <input type="search" placeholder='simplyhappypets.in'/>
                            <div className="serchicon">
                                <img src={search} alt="search" />   
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
            <div className="yourdomain">
                <span className='yourdomainstatus'>
                    Your domain name is available!
                </span>
                <hr />
                <div className="yourdomaincontainer">
                    <div className="domainhead">
                        <h4>diigiihost.in</h4>
                    </div>
                    <div className="domainprize">
                        <h4><span>₹</span>1,199/<span className='yr'>yr</span></h4>
                        <div className="premium-btn">
                            <a href="#!" className="button btn-2">Add To Cart</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="alsoget">
                <h5 className='alsoheading'>Also get</h5>

                <div className="row">
                    {
                        domainlist.map((data)=>{
                            const [name,extension] = data.domain.split(".");
                            return(
                                <div className="col-lg-4">
                                    <div className="domcon">
                                        <h3>{name}<span>.{extension}</span></h3>
                                        <div className="prize">
                                            <h4>
                                                <span className='old-prize'><del><span className="rup">₹</span>{data.oldprize}</del></span>
                                                <span className='currnt'><span className="rup">₹</span>{data.current}/<span className="year">yr</span></span>
                                            </h4>
                                            <span className="offer">
                                            for first year
                                            </span>
                                        </div>
                                        <div className="premium-btn">
                                            <a href="#!" className="button btn-2">Make It Yours</a>
                                        </div>
                                        <hr />
                                        <div className="features">
                                            <ul>
                                                {data.features.map((list)=>(
                                                    <li>
                                                    <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                <g clip-path="url(#clip0_1714_8900)">
                                                                    <path d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z" fill="#122C65"/>
                                                                    <path d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z" fill="#8AFAF3"/>
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_1714_8900">
                                                                    <rect width="18" height="18" fill="white"/>
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                    </span>{list}</li>
                                                ))}
                                                
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                   
                </div>
            </div>
            <div className="purchase">
                <h5 className="purchaseheading">
                    Also available for purchase
                </h5>
                <div className="avalibledomains">
                    {
                        optiondomain.map((domains)=>(
                            <div className="domlist">
                                <div className="domainhead">
                                    <h4>{domains.damain}</h4>
                                </div>
                                <div className="domainprize">
                                    <h4><span>₹</span>{domains.prize}/<span className='yr'>yr</span></h4>
                                    <div className="premium-btn">
                                        <a href="#!" className="button btn-2"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                            <path d="M10.832 14.3518C10.3833 14.3518 10.0195 14.7156 10.0195 15.1643C10.0195 15.613 10.3833 15.9768 10.832 15.9768H17.332C17.7807 15.9768 18.1445 15.613 18.1445 15.1643C18.1445 14.7156 17.7807 14.3518 17.332 14.3518H10.832Z" fill="#8AFAF3"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.87046 1.9672C1.76163 1.53186 1.3205 1.26718 0.885164 1.37601C0.44983 1.48484 0.18515 1.92598 0.293982 2.36132L1.43337 6.91887L2.49375 11.3433C2.94462 13.2245 3.29952 14.7053 3.72067 15.8557C4.15266 17.0357 4.68242 17.9518 5.53237 18.6543C5.60572 18.7149 5.68045 18.7738 5.7565 18.831C6.63775 19.4939 7.65208 19.7955 8.9003 19.9406C10.1171 20.0821 11.6398 20.0821 13.5744 20.082H14.2173C15.891 20.0821 17.2087 20.0821 18.2701 19.9747C19.3574 19.8648 20.252 19.6366 21.057 19.1325C21.4389 18.8934 21.7937 18.6136 22.1152 18.298C22.7929 17.6327 23.2234 16.8158 23.5837 15.7842C23.9354 14.777 24.2426 13.4956 24.6327 11.868L24.6553 11.7734C24.8905 10.792 25.0844 9.98313 25.1594 9.32784C25.2371 8.64773 25.2053 8.00015 24.8659 7.40888C24.7206 7.156 24.5391 6.9258 24.3271 6.72565C23.8312 6.2577 23.2088 6.07591 22.5293 5.99301C21.8746 5.91311 21.0428 5.91313 20.0336 5.91315H2.85696L1.87046 1.9672ZM4.06197 10.9143L3.25282 7.53815H19.9808C21.056 7.53815 21.7879 7.5396 22.3325 7.60604C22.8637 7.67085 23.0814 7.78453 23.2118 7.90747C23.3081 7.99845 23.3906 8.10308 23.4566 8.21803C23.5459 8.37338 23.6057 8.61166 23.5449 9.1433C23.4826 9.68835 23.3134 10.4004 23.0628 11.446C22.66 13.1263 22.3711 14.3277 22.0496 15.2483C21.7334 16.1536 21.4092 16.7139 20.9768 17.1384C20.7392 17.3717 20.4769 17.5785 20.1947 17.7552C19.6811 18.0768 19.0605 18.2614 18.1067 18.3579C17.1364 18.4561 15.9008 18.457 14.1729 18.457H13.6261C11.6285 18.457 10.2001 18.4558 9.08789 18.3265C7.99623 18.1996 7.29828 17.9573 6.73328 17.5324C6.67707 17.4901 6.62183 17.4465 6.56761 17.4018C6.02268 16.9513 5.62444 16.3291 5.24662 15.2971C4.8617 14.2456 4.52752 12.8568 4.06197 10.9143Z" fill="#8AFAF3"/>
                                            <path d="M11.3471 22.6872C11.3471 23.317 10.8365 23.8276 10.2068 23.8276C9.57696 23.8276 9.06641 23.317 9.06641 22.6872C9.06641 22.0575 9.57696 21.5469 10.2068 21.5469C10.8365 21.5469 11.3471 22.0575 11.3471 22.6872Z" fill="#8AFAF3"/>
                                            <path d="M18.187 22.6872C18.187 23.317 17.6764 23.8276 17.0467 23.8276C16.4168 23.8276 15.9062 23.317 15.9062 22.6872C15.9062 22.0575 16.4168 21.5469 17.0467 21.5469C17.6764 21.5469 18.187 22.0575 18.187 22.6872Z" fill="#8AFAF3"/>
                                        </svg></a>
                                    </div>
                                </div>
                                
                            </div>
                        ))
                    }
                    
                </div>
            </div>
            <div className={isvisible ? "sroll":"d-none"}>
                <h5><svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
                    <path d="M10.9998 0.823329C11.0034 0.662835 10.9563 0.505228 10.8649 0.372421C10.7735 0.239613 10.6425 0.138204 10.4901 0.0822921C10.3376 0.0263804 10.1713 0.0187443 10.0143 0.0604452C9.85728 0.102146 9.71737 0.191112 9.61392 0.314974L5.51265 5.04101L1.41282 0.314974C1.34903 0.229292 1.26805 0.157536 1.17486 0.104199C1.08168 0.0508615 0.978314 0.0170925 0.871299 0.005006C0.764282 -0.00708052 0.655914 0.00277616 0.552936 0.0339586C0.449957 0.0651411 0.354579 0.116977 0.272834 0.186222C0.191089 0.255466 0.12478 0.340627 0.0779181 0.436371C0.0310564 0.532115 0.00473595 0.636379 0.000582695 0.742635C-0.0035696 0.84889 0.0144844 0.954847 0.0537338 1.05387C0.0929832 1.15289 0.152519 1.24285 0.228617 1.31811L4.91825 6.72899C4.9917 6.81396 5.08287 6.8822 5.18562 6.92898C5.28838 6.97577 5.40022 7 5.51337 7C5.62653 7 5.73837 6.97577 5.84112 6.92898C5.94387 6.8822 6.03513 6.81396 6.10859 6.72899L10.8027 1.31811C10.9257 1.18142 10.9955 1.0061 10.9998 0.823329Z" fill="#122C65"/>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
                    <path d="M10.9998 0.823329C11.0034 0.662835 10.9563 0.505228 10.8649 0.372421C10.7735 0.239613 10.6425 0.138204 10.4901 0.0822921C10.3376 0.0263804 10.1713 0.0187443 10.0143 0.0604452C9.85728 0.102146 9.71737 0.191112 9.61392 0.314974L5.51265 5.04101L1.41282 0.314974C1.34903 0.229292 1.26805 0.157536 1.17486 0.104199C1.08168 0.0508615 0.978314 0.0170925 0.871299 0.005006C0.764282 -0.00708052 0.655914 0.00277616 0.552936 0.0339586C0.449957 0.0651411 0.354579 0.116977 0.272834 0.186222C0.191089 0.255466 0.12478 0.340627 0.0779181 0.436371C0.0310564 0.532115 0.00473595 0.636379 0.000582695 0.742635C-0.0035696 0.84889 0.0144844 0.954847 0.0537338 1.05387C0.0929832 1.15289 0.152519 1.24285 0.228617 1.31811L4.91825 6.72899C4.9917 6.81396 5.08287 6.8822 5.18562 6.92898C5.28838 6.97577 5.40022 7 5.51337 7C5.62653 7 5.73837 6.97577 5.84112 6.92898C5.94387 6.8822 6.03513 6.81396 6.10859 6.72899L10.8027 1.31811C10.9257 1.18142 10.9955 1.0061 10.9998 0.823329Z" fill="#122C65"/>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
                    <path d="M10.9998 0.823329C11.0034 0.662835 10.9563 0.505228 10.8649 0.372421C10.7735 0.239613 10.6425 0.138204 10.4901 0.0822921C10.3376 0.0263804 10.1713 0.0187443 10.0143 0.0604452C9.85728 0.102146 9.71737 0.191112 9.61392 0.314974L5.51265 5.04101L1.41282 0.314974C1.34903 0.229292 1.26805 0.157536 1.17486 0.104199C1.08168 0.0508615 0.978314 0.0170925 0.871299 0.005006C0.764282 -0.00708052 0.655914 0.00277616 0.552936 0.0339586C0.449957 0.0651411 0.354579 0.116977 0.272834 0.186222C0.191089 0.255466 0.12478 0.340627 0.0779181 0.436371C0.0310564 0.532115 0.00473595 0.636379 0.000582695 0.742635C-0.0035696 0.84889 0.0144844 0.954847 0.0537338 1.05387C0.0929832 1.15289 0.152519 1.24285 0.228617 1.31811L4.91825 6.72899C4.9917 6.81396 5.08287 6.8822 5.18562 6.92898C5.28838 6.97577 5.40022 7 5.51337 7C5.62653 7 5.73837 6.97577 5.84112 6.92898C5.94387 6.8822 6.03513 6.81396 6.10859 6.72899L10.8027 1.31811C10.9257 1.18142 10.9955 1.0061 10.9998 0.823329Z" fill="#122C65"/>
                    </svg><span>Scroll down</span>
                </h5>
            </div>
        </div>
    </section>
  )
}
