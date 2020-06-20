import React from 'react'
import MobileMenu from './MobileMenu'
import MainMenu from './MainMenu'

const Nav = () => {
    return (
        <div>
            <MobileMenu/>
            <div id='page' style={{left:'250px'}}>
                <MainMenu/>
            </div>
        </div>
    )
}

export default Nav
