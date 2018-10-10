import React from 'react';

const MenuLink = ({ href, children }) => (
  <span className="menu-link">
    <a href={href}>{children}</a>
  </span>
);

const NavMenu = () => (
  <div className="contents-menu">
    <div className="menu-section">
      <h4>
        <a href="#getting-started">Getting Started</a>
      </h4>
      <MenuLink href="#install">Installation</MenuLink>
    </div>
    <div className="menu-section">
      <h4>
        <a href="#methods">Methods</a>
      </h4>
      <MenuLink href="#oembed">.oembed()</MenuLink>
      <MenuLink href="#text-replace">.textReplace()</MenuLink>
      <MenuLink href="#expand">.expand()</MenuLink>
    </div>
    <div className="menu-section">
      <h4>
        <a href="#options">Options</a>
      </h4>
      <MenuLink href="#option-width">width</MenuLink>
      <MenuLink href="#option-height">height</MenuLink>
    </div>
  </div>
);

export default NavMenu;