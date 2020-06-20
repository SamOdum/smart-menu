import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MobileMenuContext = createContext();

/**
 * Renders a <MobileMenuProvider /> component
 * @param  {object} props
 * @param  {element|[element]} props.children - Components or elements wrapped
 */
const MobileMenuProvider = ({ children }) => {
  // Set state for tracking open status of mobile nav
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  return (
    <MobileMenuContext.Provider value={[mobileNavIsOpen, setMobileNavIsOpen]}>
      {children}
    </MobileMenuContext.Provider>
  );
};

MobileMenuProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MobileMenuProvider;
