import React from 'react';
import { GeolocationIcon, LeftChevronIcon } from '../Icons';

interface Props {

}

export const HeaderAddress: React.FC<Props> = () => {
  const addressAlias = 'Dolores Hidalgo, Gto';
  return (
    <div className='header-address d-flex align-items-center justify-content-space-between cursor-pointer'>
      <span className='alias-address'>
        <GeolocationIcon width={10} noPointer />
        Enviar a {addressAlias}
      </span>
      <LeftChevronIcon width={24} />
    </div>
  );
};
