import React, { useState, useContext } from 'react';
import img1 from '../images/menu-img1.jpg';
import img2 from '../images/menu-img2.jpg';
import { MobileMenuContext } from '../contexts/MobileMenuContext';

const MainMenu = () => {
  // Get mobile nav open state and state setter from context
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useContext(MobileMenuContext);
  const handleMobileMenuClick = () => setMobileMenuIsOpen(!mobileMenuIsOpen);

  // Set state for main nav show/hide trigger
  const [priMenuOpen, setPriMenuOpen] = useState(false);
  const handlePriMenuClick = () => setPriMenuOpen(!priMenuOpen);

  // Set state for secondary nav show/hide trigger
  const [secMenuOpen, setSecMenuOpen] = useState({
    firstOne: false,
    secondOne: false,
    thirdOne: false,
    fourthOne: false,
  });
  const handleSecMenuOpen = (e) => {
    setSecMenuOpen({
      [e.currentTarget.dataset.id]: true, // find a way to acquire who dispatched the function
    });
  };
  const handleSecMenuClose = (e) => {
    setSecMenuOpen({
      [e.currentTarget.dataset.id]: false, // find a way to acquire who dispatched the function
    });
  };

  // Keep secondary menu flyout from collapsing
  const keepSecMenuOpen = (specific) => {
    setSecMenuOpen({
      [specific]: true,
    });
  };

  const navStyle = mobileMenuIsOpen ? { left: '250px' } : { left: '0px' };

  return (
    <div id="page" style={navStyle}>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-4 col-xs-3">
              <div className="mm-toggle-wrap">
                <div className="mm-toggle" onClick={handleMobileMenuClick}>
                  <i className="fa fa-align-justify" />
                </div>
                <span className="mm-label hidden-xs">Categories</span>
              </div>
              <div className="mega-container visible-lg visible-md visible-sm">
                <div className="navleft-container">
                  <div className="mega-menu-title" onClick={handlePriMenuClick}>
                    <h3>shop by category</h3>
                  </div>
                  <div
                    className="mega-menu-category"
                    style={
                      priMenuOpen ? { display: 'block' } : { display: 'none' }
                    }
                  >
                    <ul className="nav">
                      <li
                        className={secMenuOpen.firstOne ? 'active' : ''}
                        data-id="firstOne"
                        onMouseEnter={handleSecMenuOpen}
                        onMouseLeave={handleSecMenuClose}
                      >
                        <a href="#234bcde1234abc">
                          <i className="icon fa fa-female fa-fw" />
                          {` Women`}
                        </a>
                        <div
                          className="wrap-popup"
                          onMouseEnter={() => keepSecMenuOpen('firstOne')}
                        >
                          <div className="popup">
                            <div className="row">
                              <div className="col-md-4 col-sm-6">
                                <h3>Clother</h3>
                                <ul className="nav">
                                  <li>
                                    <a href="shop_grid.html">Cocktail</a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">Day</a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">Evening</a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">Sports</a>
                                  </li>
                                </ul>
                                <br />
                                <h3>Dress and skirt</h3>
                                <ul className="nav">
                                  <li>
                                    <a href="shop_grid.html">blazers</a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">table</a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">coats</a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">Sports</a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">kids</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-4 col-sm-6 has-sep">
                                <h3>Shoes</h3>
                                <ul className="nav">
                                  <li>
                                    <a href="shop_grid.html">
                                      Tandoor & Grills
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">Baking Tools</a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">Retina Display </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">Washers</a>
                                  </li>
                                </ul>
                                <br />
                                <h3>Jewellery</h3>
                                <ul className="nav">
                                  <li>
                                    <a href="shop_grid.html">Toasters</a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">Water Purifiers</a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">Glasses</a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">Lunch Boxes</a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">Knives</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-4 has-sep hidden-sm">
                                <div className="custom-menu-right">
                                  <div className="box-banner media">
                                    <div className="add-desc">
                                      <h3>
                                        New Jeans
                                        <br />
                                        collection
                                      </h3>
                                      <div className="price-sale">2018</div>
                                      <a href="#234bcde1234abc">Shop Now</a>
                                    </div>
                                    <div className="add-right">
                                      <img src={img1} alt="" />
                                    </div>
                                  </div>
                                  <div className="box-banner media">
                                    <div className="add-desc">
                                      <h3>Save up to</h3>
                                      <div className="price-sale">
                                        70
                                        <sup>%</sup>
                                        <sub>off</sub>
                                      </div>
                                      <a href="#234bcde1234abc">Shopping Now</a>
                                    </div>
                                    <div className="add-right">
                                      <img src={img2} alt="" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        className={secMenuOpen.secondOne ? 'active' : ''}
                        data-id="secondOne"
                        onMouseEnter={handleSecMenuOpen}
                        onMouseLeave={handleSecMenuClose}
                      >
                        <a href="#234bcde">
                          <i className="icon fa fa-male fa-fw" />
                          {` Men`}
                        </a>
                        <div
                          className="wrap-popup"
                          onMouseEnter={() => keepSecMenuOpen('secondOne')}
                        >
                          <div className="popup">
                            <div className="row">
                              <div className="col-md-4 col-sm-6">
                                <ul className="nav">
                                  <li>
                                    <a href="shop_grid.html">
                                      <span>Sofas & Couches</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">
                                      <span>Study Tables</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">
                                      <span>Bean Bags</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">
                                      <span>Bedside Tables</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">
                                      <span>Sofa cum Beds</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">
                                      <span>Bookshelves </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">
                                      <span>T.V. & Entertainment Units</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">
                                      <span>Center Tables </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">
                                      <span>Cabinets</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-4 col-sm-6 has-sep">
                                <ul className="nav">
                                  <li>
                                    <a href="shop_grid.html">
                                      <span>Partitions</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">
                                      <span>High-speed</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">
                                      <span>Bean Bags </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">
                                      <span>Covers & Refills</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">
                                      <span>Footstools</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">
                                      <span>Inflatable Sofas</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">
                                      <span>Ottomans</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">
                                      <span>Cabinets</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">
                                      <span>Wall Shelves</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-4 has-sep hidden-sm">
                                <div className="custom-menu-right">
                                  <div className="box-banner menu-banner">
                                    <div className="add-right">
                                      <a href="#234bcde">
                                        <img
                                          src="images/menu-img4.jpg"
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nosub">
                        <a href="#14558">
                          <i className="icon fa fa-camera fa-fw" />

                          {' Electronics'}
                        </a>
                      </li>
                      <li
                        className={secMenuOpen.fourthOne ? 'active' : ''}
                        data-id="fourthOne"
                        onMouseEnter={handleSecMenuOpen}
                        onMouseLeave={handleSecMenuClose}
                      >
                        <a href="shop_grid.html">
                          <i className="icon fa fa-linux fa-fw" />

                          {' Kids'}
                        </a>
                        <div
                          className="wrap-popup column2"
                          onMouseEnter={() => keepSecMenuOpen('fourthOne')}
                        >
                          <div className="popup">
                            <div className="row">
                              <div className="col-sm-6">
                                <h3>Furniture</h3>
                                <ul className="nav">
                                  <li>
                                    <a href="shop_grid.html">
                                      {' Kids`&apos;` Beds'}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid-2.html">Wall Stickers</a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html"> Humidifiers </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html">Indoor Lighting</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-sm-6 has-sep">
                                <h3>New arrivals</h3>
                                <ul className="nav">
                                  <li>
                                    <a href="shop_grid.html"> Art Prints </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html"> Posters</a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html"> Paintings </a>
                                  </li>
                                  <li>
                                    <a href="shop_grid.html"> Drawings </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-sm-12">
                                <a className="ads1" href="#efgcgtre">
                                  <img
                                    className="img-responsive"
                                    src="images/menu-img3.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainMenu;
