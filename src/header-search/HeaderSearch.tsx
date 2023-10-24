import React from 'react';
import { SearchIcon } from '../Icons';

interface Props {

}

export const HeaderSearch: React.FC<Props> = () => {
  return (
    <div className='search-container'>
      <input className="search" type="text" placeholder='Estoy buscando...' />
      <SearchIcon />
    </div>
  );
};
