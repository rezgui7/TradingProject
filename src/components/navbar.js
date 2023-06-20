import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';








import './navbar.css';




function Navbar() {
    const [selectedLanguage, setSelectedLanguage] = useState('english');

    const changeLanguage = (language) => {
      setSelectedLanguage(language);
    };
    
    const [activeDropdown, setActiveDropdown] = useState('');
    const wrapperRef = useRef(null);
    const navLinksRef = useRef(null);
  
    const toggleDropdown = (dropdownId) => {
      setActiveDropdown(activeDropdown === dropdownId ? '' : dropdownId);
    };
  
    useEffect(() => {
      const handleResize = () => {
        if (window.matchMedia('(max-width: 960px)').matches) {
          const navLinksHeight = navLinksRef.current.offsetHeight;
          wrapperRef.current.style.height = activeDropdown ? 'auto' : `${navLinksHeight}px`;
        } else {
          wrapperRef.current.style.height = 'auto';
        }
      };
  
      handleResize(); // Initial call to handleResize
  

      window.addEventListener('resize', handleResize); // Event listener for resize
  
      return () => {
        window.removeEventListener('resize', handleResize); // Cleanup on component unmount
      };
    }, [activeDropdown]);
    // arrow 
   
  return (
    <div>
    <xnav className="xnavv">
        <div className="xwrapper">
          <ul className="xleft">
            <li><a href="#">traders</a></li>
            <li><a href="#">partners</a></li>
            <li><a href="#">insights</a></li>
          </ul>
          <ul className="xright">
          <li className="dropdown">
          <a href="#" id="selectedLanguage">
            {selectedLanguage}
          </a>
          <span className="arrow1"></span>
          <ul className="dropdown-menu" id="languageDropdown">
            <li>
              <a href="#" onClick={() => changeLanguage('english')}>
                english
              </a>
            </li>
            <li>
              <a href="#" onClick={() => changeLanguage('arabic')}>
                arabic
              </a>
            </li>
            <li>
              <a href="#" onClick={() => changeLanguage('french')}>
                french
              </a>
            </li>
            <li>
              <a href="#" onClick={() => changeLanguage('spanish')}>
                spanish
              </a>
            </li>
            <li>
              <a href="#" onClick={() => changeLanguage('chinese')}>
                chinese
              </a>
            </li>
          </ul>
        </li>
            <li><a href="#" className="highlight">trade now</a></li>
          </ul>
        </div>
      </xnav>
      
      
      
      
  <nav id="navbar">
        <div className="wrapper" ref={wrapperRef} >
            <div className="logo">
              <a href="#">NEWnew</a>
            </div>
            <input type="radio" name="slider" id="menu-btn"/>
      <input type="radio" name="slider" id="close-btn"/>
            <ul className="nav-links" ref={navLinksRef}>
            <label htmlFor="close-btn" className="btn close-btn">
            <FontAwesomeIcon icon={faTimes} />
          </label>
          


                <li>
                    <a href="#" class="first-navlink">
                    trade
                    <span className="arrow" id="arrow-trade"></span>
                    </a>
                    <div className="mega-box" id="mega-box-trade">
                        <div className="content">
                            <div className="row">
                                <header>Access to global market</header>
                                <p className="mega-text">Offered 80+ trading products, including 35+ Forex 
                                    currency pairs, gold, oil, stocks, indices and mainstream cryptocurrencies,
                                     etc.</p>
                            </div>
                           <div className="row">
                            <header>global market</header>
                            <ul className="mega-links">
                              <li><a href="#">forex</a></li>
                              <li><a href="#">Commodities</a></li>
                              <li><a href="#"> Indice</a></li>
                              <li><a href="#">Stocks</a></li>
                            </ul>
                          </div>
                          <div className="row">
                            <header>trading rules</header>
                            <ul className="mega-links">
                              <li><a href="#">Commodity</a></li>
                              <li><a href="#">Crypto</a></li>
                              <li><a href="#">Forex</a></li>
                              <li><a href="#">Index</a></li>
                              <li><a href="#"> Stock</a></li>
                            </ul>
                          </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#">
                    trading platform
                    <span className="arrow" id="arrow-platform"></span>
                    </a>
                    <div className="mega-box2" id="mega-box-platform">
                        <div className="content2">
                            <div className="row2">
                                <header>Trade Anywhere & Anywhere
                                </header>
                                <p className="mega-text2">We support a variety of download methods and devices, 
                                    including iOS, Android, Web and trading platforms</p>
                            </div>
                            <div className="image-section">
                                <div className="image-container">
                                    <a href="https://apps.apple.com/us/app/mtfe/id1607250171" target="_blank">
                                        <div className="image-box">
                                            <img src="ios.png" alt="App Store"/>
                                        </div>
                                        <p className="image-label">App Store</p>
                                    </a>
                                </div>
                                <div className="image-container">
                                    <a href="https://play.google.com/store/apps/details?id=io.mtfe.app" target="_blank">
                                        <div className="image-box">
                                            <img src="android.png" alt="android"/>
                                        </div>
                                        <p className="image-label">Android</p>

                                    </a>
                                    
                                </div>
                                <div className="image-container">
                                    <a href="https://play.google.com/store/apps/details?id=io.mtfe.app" target="_blank">
                                        <div className="image-box">
                                            <img src="scan.png" alt="scan"/>
                                        </div>
                                        <p className="image-label">Scan to Download</p>
                                    </a>
                              </div>
                        </div>
                    </div>
                </div>
                </li>
                <li>
                    <a href="#">market analysis
                    <span className="arrow" id="arrow-analysis"></span>
                    </a>
                    <div className="mega-box3" id="mega-box-analysis">
                        <div className="content3">
                            <div className="row3">
                                <header>Market News and Research</header>
                                <p className="mega-text3">Keep abreast of real time
                                     market views and opportunities,
                                      trading concepts and professional strategy references.</p>
                            </div>
                           <div className="row3">
                            <header>Market Analysis</header>
                            <ul className="mega-links3" >
                              <li><a href="#">trading analysis</a></li>
                            
                            </ul>
                          </div>
                          
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#">about us
                    <span className="arrow"></span>
                    </a>
                    <div className="mega-box3">
                        <div className="content3">
                            <div className="row3">
                                <header>about NEWnew</header>
                                <p className="mega-text3">We are a trustworthy online trading provider.
                                     Through our innovative platforms and applications,
                                      investors can trade the global products on financial markets even faster.
                                    .</p>
                            </div>
                           <div className="row3">
                            <header>company</header>
                            <ul className="mega-links3">
                              <li><a href="#">about us</a></li>
                            
                            </ul>
                          </div>
                          
                        </div>
                    </div>
                </li>
            </ul>
            <label htmlFor="menu-btn" className="btn menu-icon">
  <FontAwesomeIcon icon={faBars} />
</label>



        </div>
    </nav>
    </div>
  );
}

export default Navbar;
