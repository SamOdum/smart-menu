import React, { useContext, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { MobileMenuContext } from '../contexts/MobileMenuContext';

const navDisplay = {
  show: {
    left: '0',
    width: ' 250px',
    height: '7377px',
    display: 'block',
    overflow: 'hidden',
  },
  hide: {
    left: '-250px',
    width: ' 250px',
    height: '7377px',
    display: 'none',
    overflow: 'hidden',
  },
};

const MobileMenu = () => {
  // Fetch mobile menu state from mobile menu context
  const [mobileMenuIsOpen] = useContext(MobileMenuContext);

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  // Manage display of mobile navbar based on mobileMenuIsOpen state
  const menuStyle = mobileMenuIsOpen ? navDisplay.show : navDisplay.hide;

  useEffect(() => {
    return mobileMenuIsOpen
      ? document.body.classList.add('mmPushBody')
      : document.body.classList.remove('mmPushBody');
  }, [mobileMenuIsOpen]);

  // Set state for secondary nav show/hide trigger
  const [mobileSecMenuOpen, setMobileSecMenuOpen] = useState({
    firstOne: false,
    secondOne: false,
    secondOneOne: false,
    thirdOne: false,
    fourthOne: false,
  });

  const handleMobileSecMenuOpen = (e) => {
    setMobileSecMenuOpen({
      ...mobileSecMenuOpen,
      [e]: !mobileSecMenuOpen[e], // find a way to acquire who dispatched the function
    });
  };

  return (
    <div id="mobile-menu" style={menuStyle}>
      <div id="mobile-search">
        <form>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              name="search"
            />
            <button className="btn-search" type="button">
              <i className="fa fa-search" />
            </button>
          </div>
        </form>
      </div>
      <ul className="mobile-menu">
        <li data-id="firstOne">
          <button
            type="button"
            aria-label="expand"
            onClick={() => handleMobileSecMenuOpen('firstOne')}
            className={
              mobileSecMenuOpen.firstOne
                ? 'expand fa fa-minus open'
                : 'expand fa fa-plus'
            }
            style={{ paddingBottom: '12px', paddingTop: '12px' }}
          />
          <a href="index.html" className="home1">
            Home
          </a>
          <ul
            style={
              mobileSecMenuOpen.firstOne
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            <li>
              <a href="index.html">
                <span>Home Version 1</span>
              </a>
            </li>
            <li>
              <a href="version2/index.html">
                <span>Home Version 2</span>
              </a>
            </li>
            <li>
              <a href="version3/index.html">
                <span>Home Version 3</span>
              </a>
            </li>
          </ul>
        </li>
        <li data-id="secondOne">
          <button
            type="button"
            aria-label="expand"
            onClick={() => handleMobileSecMenuOpen('secondOne')}
            className={
              mobileSecMenuOpen.secondOne
                ? 'expand fa fa-minus open'
                : 'expand fa fa-plus'
            }
            style={{ paddingBottom: '12px', paddingTop: '12px' }}
          />
          <a href="shop_grid.html">Pages</a>
          <ul
            style={
              mobileSecMenuOpen.secondOne
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            <li data-id="secondOneOne">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('secondOneOne')}
                className={
                  mobileSecMenuOpen.secondOneOne
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="#" className="">
                Shop Pages
              </a>
              <ul
                style={
                  mobileSecMenuOpen.secondOneOne
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <li>
                  <a href="shop_grid.html"> Shop grid </a>
                </li>
                <li>
                  <a href="shop_grid_right_sidebar.html">
                    Shop grid right sidebar
                  </a>
                </li>
                <li>
                  <a href="shop_list.html"> Shop list </a>
                </li>
                <li>
                  <a href="shop_list_right_sidebar.html">
                    Shop list right sidebar
                  </a>
                </li>
                <li>
                  <a href="shop_grid_full_width.html"> Shop Full width </a>
                </li>
              </ul>
            </li>
            <li data-id="secondOneTwo">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('secondOneTwo')}
                className={
                  mobileSecMenuOpen.secondOneTwo
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="#">Ecommerce Pages </a>
              <ul
                style={
                  mobileSecMenuOpen.secondOneTwo
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <li>
                  <a href="wishlist.html"> Wishlists </a>
                </li>
                <li>
                  <a href="checkout.html"> Checkout </a>
                </li>
                <li>
                  <a href="compare.html"> Compare </a>
                </li>
                <li>
                  <a href="shopping_cart.html"> Shopping cart </a>
                </li>
                <li>
                  <a href="quick_view.html"> Quick View </a>
                </li>
              </ul>
            </li>
            <li data-id="secondOneThree">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('secondOneThree')}
                className={
                  mobileSecMenuOpen.secondOneTwo
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="#">Static Pages </a>
              <ul
                style={
                  mobileSecMenuOpen.secondOneThree
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <li>
                  <a href="account_page.html"> Create Account Page </a>
                </li>
                <li>
                  <a href="about_us.html"> About Us </a>
                </li>
                <li>
                  <a href="contact_us.html"> Contact us </a>
                </li>
                <li>
                  <a href="404error.html"> Error 404 </a>
                </li>
                <li>
                  <a href="faq.html"> FAQ </a>
                </li>
              </ul>
            </li>
            <li data-id="secondOneFour">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('secondOneFour')}
                className={
                  mobileSecMenuOpen.secondOneFour
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="#">Product Categories </a>
              <ul
                style={
                  mobileSecMenuOpen.secondOneFour
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <li>
                  <a href="cat-3-col.html"> 3 Column Sidebar </a>
                </li>
                <li>
                  <a href="cat-4-col.html"> 4 Column Sidebar</a>
                </li>
                <li>
                  <a href="cat-4-col-full.html"> 4 Column Full width </a>
                </li>
                <li>
                  <a href="cat-6-col.html"> 6 Columns Full width</a>
                </li>
              </ul>
            </li>
            <li data-id="secondOneFive">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('secondOneFive')}
                className={
                  mobileSecMenuOpen.secondOneFive
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="#">Single Product Pages </a>
              <ul
                style={
                  mobileSecMenuOpen.secondOneFive
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <li>
                  <a href="single_product.html"> single product </a>
                </li>
                <li>
                  <a href="single_product_left_sidebar.html">
                    single product left sidebar
                  </a>
                </li>
                <li>
                  <a href="single_product_right_sidebar.html">
                    single product right sidebar
                  </a>
                </li>
                <li>
                  <a href="single_product_magnific_popup.html">
                    single product magnific popup
                  </a>
                </li>
              </ul>
            </li>
            <li data-id="secondOneSix">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('secondOneSix')}
                className={
                  mobileSecMenuOpen.secondOneSix
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="#"> Blog Pages </a>
              <ul
                style={
                  mobileSecMenuOpen.secondOneSix
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <li>
                  <a href="blog_right_sidebar.html">Blog – Right sidebar </a>
                </li>
                <li>
                  <a href="blog_left_sidebar.html">Blog – Left sidebar </a>
                </li>
                <li>
                  <a href="blog_full_width.html">Blog_ - Full width</a>
                </li>
                <li>
                  <a href="single_post.html">Single post </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="contact_us.html">Contact us</a>
        </li>
        <li>
          <a href="about_us.html">About us</a>
        </li>
        <li data-id="ThirdOne">
          <button
            type="button"
            aria-label="expand"
            onClick={() => handleMobileSecMenuOpen('ThirdOne')}
            className={
              mobileSecMenuOpen.ThirdOne
                ? 'expand fa fa-minus open'
                : 'expand fa fa-plus'
            }
            style={{ paddingBottom: '12px', paddingTop: '12px' }}
          />
          <a href="blog.html">Blog</a>
          <ul
            style={
              mobileSecMenuOpen.ThirdOne
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            <li>
              <a href="blog_right_sidebar.html">Blog – Right sidebar </a>
            </li>
            <li>
              <a href="blog_left_sidebar.html">Blog – Left sidebar </a>
            </li>
            <li>
              <a href="blog_full_width.html">Blog_ - Full width</a>
            </li>
            <li>
              <a href="single_post.html">Single post </a>
            </li>
          </ul>
        </li>
        <li data-id="fourthOne">
          <button
            type="button"
            aria-label="expand"
            onClick={() => handleMobileSecMenuOpen('fourthOne')}
            className={
              mobileSecMenuOpen.fourthOne
                ? 'expand fa fa-minus open'
                : 'expand fa fa-plus'
            }
            style={{ paddingBottom: '12px', paddingTop: '12px' }}
          />
          <a href="shop_grid.html">Home Appliances</a>
          <ul
            style={
              mobileSecMenuOpen.fourthOne
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            <li data-id="fourthOneOne">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('fourthOneOne')}
                className={
                  mobileSecMenuOpen.fourthOneOne
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="#" className="">
                Clother
              </a>
              <ul
                style={
                  mobileSecMenuOpen.fourthOneOne
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
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
                  <a href="shop_grid.html">Sundresses</a>
                </li>
              </ul>
            </li>
            <li data-id="fourthOneTwo">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('fourthOneTwo')}
                className={
                  mobileSecMenuOpen.fourthOneTwo
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="#">Lightings</a>
              <ul
                style={
                  mobileSecMenuOpen.fourthOneTwo
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <li>
                  <a href="shop_grid.html">Accessories</a>
                </li>
                <li>
                  <a href="shop_grid.html">Hats and Gloves</a>
                </li>
                <li>
                  <a href="shop_grid.html">Lifestyle</a>
                </li>
                <li>
                  <a href="shop_grid.html">Bras</a>
                </li>
              </ul>
            </li>
            <li data-id="fourthOneThree">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('fourthOneThree')}
                className={
                  mobileSecMenuOpen.fourthOneThree
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="#">Trends</a>
              <ul
                style={
                  mobileSecMenuOpen.fourthOneThree
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <li>
                  <a href="shop_grid.html">Flat Shoes</a>
                </li>
                <li>
                  <a href="shop_grid.html">Flat Sandals</a>
                </li>
                <li>
                  <a href="shop_grid.html">Boots</a>
                </li>
                <li>
                  <a href="shop_grid.html">Heels</a>
                </li>
              </ul>
            </li>
            <li data-id="fourthOneFour">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('fourthOneFour')}
                className={
                  mobileSecMenuOpen.fourthOneFour
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="#">Dress and skirt</a>
              <ul
                style={
                  mobileSecMenuOpen.fourthOneFour
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <li>
                  <a href="shop_grid.html">Bracelets</a>
                </li>
                <li>
                  <a href="shop_grid.html">Necklaces &amp; Pendent</a>
                </li>
                <li>
                  <a href="shop_grid.html">Pendants</a>
                </li>
                <li>
                  <a href="shop_grid.html">Pins &amp; Brooches</a>
                </li>
              </ul>
            </li>
            <li data-id="fourthOneFive">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('fourthOneFive')}
                className={
                  mobileSecMenuOpen.fourthOneFive
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="#">Shoes</a>
              <ul
                style={
                  mobileSecMenuOpen.fourthOneFive
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <li>
                  <a href="shop_grid.html">Casual Dresses</a>
                </li>
                <li>
                  <a href="shop_grid.html">Evening</a>
                </li>
                <li>
                  <a href="shop_grid.html">Designer</a>
                </li>
                <li>
                  <a href="shop_grid.html">Party</a>
                </li>
              </ul>
            </li>
            <li data-id="fourthOneSix">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('fourthOneSix')}
                className={
                  mobileSecMenuOpen.fourthOneSix
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="#">Nightstands</a>
              <ul
                style={
                  mobileSecMenuOpen.fourthOneSix
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <li>
                  <a href="shop_grid.html">Swimsuits</a>
                </li>
                <li>
                  <a href="shop_grid.html">Beach Clothing</a>
                </li>
                <li>
                  <a href="shop_grid.html">Clothing</a>
                </li>
                <li>
                  <a href="shop_grid.html">Bikinis</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li data-id="fifthOne">
          <button
            type="button"
            aria-label="expand"
            onClick={() => handleMobileSecMenuOpen('fifthOne')}
            className={
              mobileSecMenuOpen.fifthOne
                ? 'expand fa fa-minus open'
                : 'expand fa fa-plus'
            }
            style={{ paddingBottom: '12px', paddingTop: '12px' }}
          />
          <a href="shop_grid.html">Living Rooms</a>
          <ul
            style={
              mobileSecMenuOpen.fifthOne
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            <li data-id="fifthOneOne">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('fifthOneOne')}
                className={
                  mobileSecMenuOpen.fifthOneOne
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="#" className="">
                Sofas
              </a>
              <ul
                className="level1"
                style={
                  mobileSecMenuOpen.fifthOneOne
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <li className="level2">
                  <a href="shop_grid.html">Coats &amp; Jackets</a>
                </li>
                <li className="level2">
                  <a href="shop_grid.html">Raincoats</a>
                </li>
                <li className="level2">
                  <a href="shop_grid.html">Blazers</a>
                </li>
                <li className="level2">
                  <a href="shop_grid.html">Jackets</a>
                </li>
              </ul>
            </li>
            <li data-id="fifthOneTwo">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('fifthOneTwo')}
                className={
                  mobileSecMenuOpen.fifthOneTwo
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="#">Folding Chairs</a>
              <ul
                className="level1"
                style={
                  mobileSecMenuOpen.fifthOneTwo
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <li className="level2">
                  <a href="shop_grid.html">Casual Dresses</a>
                </li>
                <li className="level2">
                  <a href="shop_grid.html">Evening</a>
                </li>
                <li className="level2">
                  <a href="shop_grid.html">Designer</a>
                </li>
                <li className="level2">
                  <a href="shop_grid.html">Party</a>
                </li>
              </ul>
            </li>
            <li data-id="fifthOneThree">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('fifthOneThree')}
                className={
                  mobileSecMenuOpen.fifthOneThree
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="#" className="">
                Side Tables
              </a>
              <ul
                className="level1"
                style={
                  mobileSecMenuOpen.fifthOneThree
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <li className="level2">
                  <a href="shop_grid.html">Sport Shoes</a>
                </li>
                <li className="level2">
                  <a href="shop_grid.html">Casual Shoes</a>
                </li>
                <li className="level2">
                  <a href="shop_grid.html">Leather Shoes</a>
                </li>
                <li className="level2">
                  <a href="shop_grid.html">canvas shoes</a>
                </li>
              </ul>
            </li>
            <li data-id="fifthOneFour">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('fifthOneFour')}
                className={
                  mobileSecMenuOpen.fifthOneFour
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="#">Designer</a>
              <ul
                className="level1"
                style={
                  mobileSecMenuOpen.fifthOneFour
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <li className="level2">
                  <a href="shop_grid.html">Coats</a>
                </li>
                <a href="shop_grid.html">Formal Jackets</a>
                <li className="level2" />
                <li className="level2" />
                <a href="shop_grid.html">Leather Jackets</a>
                <li className="level2">
                  <a href="shop_grid.html">Blazers</a>
                </li>
              </ul>
            </li>
            <li data-id="fifthOneFive">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('fifthOneFive')}
                className={
                  mobileSecMenuOpen.fifthOneFive
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="#">Accesories</a>
              <ul
                className="level1"
                style={
                  mobileSecMenuOpen.fifthOneFive
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <li className="level2">
                  <a href="shop_grid.html">Backpacks</a>
                </li>
                <li className="level2">
                  <a href="shop_grid.html">Wallets</a>
                </li>
                <li className="level2">
                  <a href="shop_grid.html">Laptops Bags</a>
                </li>
                <li className="level2">
                  <a href="shop_grid.html">Belts</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li data-id="sixOne">
          <button
            type="button"
            aria-label="expand"
            onClick={() => handleMobileSecMenuOpen('sixOne')}
            className={
              mobileSecMenuOpen.sixOne
                ? 'expand fa fa-minus open'
                : 'expand fa fa-plus'
            }
            style={{ paddingBottom: '12px', paddingTop: '12px' }}
          />
          <a href="shop_grid.html">Electronics</a>
          <ul
            style={
              mobileSecMenuOpen.sixOne
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            <li data-id="sixOneOne">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('sixOneOne')}
                className={
                  mobileSecMenuOpen.sixOneOne
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="shop_grid.html">Wall Units</a>
              <ul
                style={
                  mobileSecMenuOpen.sixOneOne
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <li>
                  <a href="shop_grid.html">iPhone</a>
                </li>
                <li>
                  <a href="shop_grid.html">Samsung</a>
                </li>
                <li>
                  <a href="shop_grid.html">Nokia</a>
                </li>
                <li>
                  <a href="shop_grid.html">Sony</a>
                </li>
              </ul>
            </li>
            <li data-id="sixOneTwo">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('sixOneTwo')}
                className={
                  mobileSecMenuOpen.sixOneTwo
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="shop_grid.html" className="">
                Kids
              </a>
              <ul
                style={
                  mobileSecMenuOpen.sixOneTwo
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <li>
                  <a href="shop_grid.html">Audio</a>
                </li>
                <li>
                  <a href="shop_grid.html">Cameras</a>
                </li>
                <li>
                  <a href="shop_grid.html">Appling</a>
                </li>
                <li>
                  <a href="shop_grid.html">Car Music</a>
                </li>
              </ul>
            </li>
            <li data-id="sixOneThree">
              <button
                type="button"
                aria-label="expand"
                onClick={() => handleMobileSecMenuOpen('sixOneThree')}
                className={
                  mobileSecMenuOpen.sixOneThree
                    ? 'expand fa fa-minus open'
                    : 'expand fa fa-plus'
                }
                style={{ paddingBottom: '12px', paddingTop: '12px' }}
              />
              <a href="shop_grid.html">Fashion</a>
              <ul
                style={
                  mobileSecMenuOpen.sixOneThree
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <li>
                  <a href="shop_grid.html">Home &amp; Office</a>
                </li>
                <li>
                  <a href="shop_grid.html">TV &amp; Home Theater</a>
                </li>
                <li>
                  <a href="shop_grid.html">Phones &amp; Radio</a>
                </li>
                <li>
                  <a href="shop_grid.html">All Electronics</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
