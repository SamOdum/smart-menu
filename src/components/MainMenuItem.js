import React from "react";

const menuData = {
  priCategoryId: 1,
  primaryCategory: "Women",
  priCategoryLink: "#pri_cat_link",
  priCategoryIcon: "fa-female",
  priCategoryChildren: [
    {
      secCategoryId: 1,
      secCategory: "Clothes",
      secCategoryChildren: [
        {
          secCategoryChildId: 1,
          secCategoryChild: "Cocktail",
          secCategoryChildLink: "shop_grid.html",
        },
        {
          secCategoryChildId: 2,
          secCategoryChild: "Day",
          secCategoryChildLink: "shop_grid.html",
        },
        {
          secCategoryChildId: 3,
          secCategoryChild: "Evening",
          secCategoryChildLink: "shop_grid.html",
        },
        {
          secCategoryChildId: 4,
          secCategoryChild: "Sports",
          secCategoryChildLink: "shop_grid.html",
        },
      ],
    },
    {
      secCategoryId: 2,
      secCategory: "Dress and Skirt",
      secCategoryChildren: [
        {
          secCategoryChildId: 1,
          secCategoryChild: "Blazers",
          secCategoryChildLink: "shop_grid.html",
        },
        {
          secCategoryChildId: 2,
          secCategoryChild: "Table",
          secCategoryChildLink: "shop_grid.html",
        },
        {
          secCategoryChildId: 3,
          secCategoryChild: "Coat",
          secCategoryChildLink: "shop_grid.html",
        },
        {
          secCategoryChildId: 4,
          secCategoryChild: "Kids",
          secCategoryChildLink: "shop_grid.html",
        },
      ],
    },
    {
      secCategoryId: 3,
      secCategory: "Shoes",
      secCategoryChildren: [
        {
          secCategoryChildId: 1,
          secCategoryChild: "Tandor & Grills",
          secCategoryChildLink: "shop_grid.html",
        },
        {
          secCategoryChildId: 2,
          secCategoryChild: "Baking Tools",
          secCategoryChildLink: "shop_grid.html",
        },
        {
          secCategoryChildId: 3,
          secCategoryChild: "Retina Display",
          secCategoryChildLink: "shop_grid.html",
        },
        {
          secCategoryChildId: 4,
          secCategoryChild: "Washers",
          secCategoryChildLink: "shop_grid.html",
        },
      ],
    },
    {
      secCategoryId: 4,
      secCategory: "Jewellery",
      secCategoryChildren: [
        {
          secCategoryChildId: 1,
          secCategoryChild: "Toasters",
          secCategoryChildLink: "shop_grid.html",
        },
        {
          secCategoryChildId: 2,
          secCategoryChild: "Water Purifiers",
          secCategoryChildLink: "shop_grid.html",
        },
        {
          secCategoryChildId: 3,
          secCategoryChild: "Glasses",
          secCategoryChildLink: "shop_grid.html",
        },
        {
          secCategoryChildId: 4,
          secCategoryChild: "Lunchboxes",
          secCategoryChildLink: "shop_grid.html",
        },
        {
          secCategoryChildId: 5,
          secCategoryChild: "Lunchboxes",
          secCategoryChildLink: "shop_grid.html",
        },
      ],
    },
  ],
};

const MainMenuItem = ({
  secMenuState,
  handleSecMenuShow,
  handleSecMenuHide,
  keepSecMenuOpen,
  closeSecMenu,
  // menuData,
}) => {
  return (
    <li
      className={secMenuState.firstOne ? "active" : ""}
      data-id={`primary_${menuData.priCategoryId}`}
      onMouseEnter={handleSecMenuShow}
      onMouseLeave={handleSecMenuHide}
    >
      <a href={menuData.priCategoryLink}>
        <i className={`icon fa ${menuData.priCategoryIcon} fa-fw`} />
        {` ${menuData.primaryCategory}`}
      </a>
      <div
        className="wrap-popup"
        onMouseEnter={() =>
          keepSecMenuOpen(`primary_${menuData.priCategoryId}`)
        }
        onMouseLeave={() => closeSecMenu(`primary_${menuData.priCategoryId}`)}
      >
        <div className="popup">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              {menuData.priCategoryChildren.map((priCategoryChildItem) => {
                return (
                  <div key={priCategoryChildItem.secCategoryId}>
                    <h3>{priCategoryChildItem.secCategory}</h3>
                    <ul className="nav">
                      {priCategoryChildItem.secCategoryChildren.map(
                        (secCategoryChildItem) => {
                          return (
                            <li key={secCategoryChildItem.secCategoryChildId}>
                              <a
                                href={secCategoryChildItem.secCategoryChildLink}
                              >
                                {secCategoryChildItem.secCategoryChild}
                              </a>
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                );
              })}
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
                      <img src="images/menu-img1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="box-banner media">
                    <div className="add-desc">
                      <h3>Save up to</h3>
                      <div className="price-sale">
                        70 <sup>%</sup>
                        <sub>off</sub>
                      </div>
                      <a href="#234bcde1234abc">Shopping Now</a>
                    </div>
                    <div className="add-right">
                      <img src="images/menu-img2.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MainMenuItem;
