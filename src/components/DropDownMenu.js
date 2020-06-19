import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { ReactComponent as CogIcon } from '../icons/cog.svg';

function DropDownMenu() {
      const [activeMenu, setActiveMenu] = useState('main');
      const [menuHeight, setMenuHeight] = useState(null);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

    const DropDownItem = ({ children, goToMenu, leftIcon, rightIcon }) => { 
 return (
      <a href="#45tyyh" className="menu-item" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
        <span className="icon-button">{leftIcon}</span>
        {children}
        <span className="icon-right">{rightIcon}</span>
      </a>
    );
  }

  return (
     <div className="dropdown" style={{ height: menuHeight }}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
         onEnter={calcHeight}
        classNames="menu-primary"
        unmountOnExit>

        <div className="menu">
          <DropDownItem>My Profile</DropDownItem>
          <DropDownItem
            leftIcon={<ChevronIcon />}
            rightIcon={<CogIcon />}
            goToMenu="settings">
            Settings
          </DropDownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit>

        <div className="menu">
          <DropDownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Go back</h2>
          </DropDownItem>
        </div>

      </CSSTransition>

    </div>
  )

}

export default DropDownMenu
