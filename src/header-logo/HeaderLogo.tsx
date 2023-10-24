import React from 'react';
import ML_Logo from './../assets/imgs/logo-ml.svg';


interface Props {

}

export const HeaderLogo: React.FC<Props> = () => {
  return (
    <img className="logo" src={ML_Logo} alt="Logo de Mercado Libre" />
  );
};
