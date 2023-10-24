import React from 'react';
import './Header.css';
import { HeaderLogo } from '../header-logo/HeaderLogo';
import { HeaderSearch } from '../header-search/HeaderSearch';
import { CartIcon } from '../Icons';
import { HeaderMenu } from '../header-menu/HeaderMenu';
import { HeaderAddress } from '../header-address/HeaderAddress';

interface Props {

}

export const Header: React.FC<Props> = () => {
  return (
    <header className='header'>
      <div className="header-row h-padding v-padding">
        <HeaderLogo />
        <HeaderSearch />
        <CartIcon />
        <HeaderMenu />
      </div>
      <div className="header-row v-padding">
        <HeaderAddress />
      </div>
    </header>
  );
};
