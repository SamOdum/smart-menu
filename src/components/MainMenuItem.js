import React from 'react';

const menuData = {
  priCategoryId: 1,
  primaryCategory: 'Women',
  priCategoryLink: '#pri_cat_link',
  priCategoryIcon: 'fa-female',
  priCategoryChildren: [
    {
      secCategoryId: 1,
      secCategory: 'Clothes',
      secCategoryChildren: [
        {
          secCategoryChildId: 1,
          secCategoryChild: 'Cocktail',
          secCategoryChildLink: 'shop_grid.html',
        },
        {
          secCategoryChildId: 2,
          secCategoryChild: 'Day',
          secCategoryChildLink: 'shop_grid.html',
        },
        {
          secCategoryChildId: 3,
          secCategoryChild: 'Evening',
          secCategoryChildLink: 'shop_grid.html',
        },
        {
          secCategoryChildId: 4,
          secCategoryChild: 'Sports',
          secCategoryChildLink: 'shop_grid.html',
        },
      ],
    },
    {
      secCategoryId: 2,
      secCategory: 'Dress and Skirt',
      secCategoryChildren: [
        {
          secCategoryChildId: 1,
          secCategoryChild: 'Blazers',
          secCategoryChildLink: 'shop_grid.html',
        },
        {
          secCategoryChildId: 2,
          secCategoryChild: 'Table',
          secCategoryChildLink: 'shop_grid.html',
        },
        {
          secCategoryChildId: 3,
          secCategoryChild: 'Coat',
          secCategoryChildLink: 'shop_grid.html',
        },
        {
          secCategoryChildId: 4,
          secCategoryChild: 'Kids',
          secCategoryChildLink: 'shop_grid.html',
        },
      ],
    },
    {
      secCategoryId: 3,
      secCategory: 'Shoes',
      secCategoryChildren: [
        {
          secCategoryChildId: 1,
          secCategoryChild: 'Tandor & Grills',
          secCategoryChildLink: 'shop_grid.html',
        },
        {
          secCategoryChildId: 2,
          secCategoryChild: 'Baking Tools',
          secCategoryChildLink: 'shop_grid.html',
        },
        {
          secCategoryChildId: 3,
          secCategoryChild: 'Retina Display',
          secCategoryChildLink: 'shop_grid.html',
        },
        {
          secCategoryChildId: 4,
          secCategoryChild: 'Washers',
          secCategoryChildLink: 'shop_grid.html',
        },
      ],
    },
    {
      secCategoryId: 4,
      secCategory: 'Jewellery',
      secCategoryChildren: [
        {
          secCategoryChildId: 1,
          secCategoryChild: 'Toasters',
          secCategoryChildLink: 'shop_grid.html',
        },
        {
          secCategoryChildId: 2,
          secCategoryChild: 'Water Purifiers',
          secCategoryChildLink: 'shop_grid.html',
        },
        {
          secCategoryChildId: 3,
          secCategoryChild: 'Glasses',
          secCategoryChildLink: 'shop_grid.html',
        },
        {
          secCategoryChildId: 4,
          secCategoryChild: 'Lunchboxes',
          secCategoryChildLink: 'shop_grid.html',
        },
        {
          secCategoryChildId: 5,
          secCategoryChild: 'Lunchboxes',
          secCategoryChildLink: 'shop_grid.html',
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
      className={secMenuState.firstOne ? 'active' : ''}
      data-id={`primary_${menuData.priCategoryId}`}
      onMouseEnter={handleSecMenuShow}
      onMouseLeave={handleSecMenuHide}
    >
      Redo this part from main
    </li>
  );
};

export default MainMenuItem;
