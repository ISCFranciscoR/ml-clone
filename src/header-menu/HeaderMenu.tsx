import React from 'react';
import { MenuIcon } from '../Icons';

interface Props {

}

export const HeaderMenu: React.FC<Props> = () => {
  return (
    <nav className="header-menu d-flex align-items-center">
      <MenuIcon width={24} />
    </nav>
  );
};
