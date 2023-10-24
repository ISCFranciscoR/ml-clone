import React from 'react';

interface Props {
  width?: number;
  noPointer?: boolean
}

export const SearchIcon: React.FC<Props> = ( { width = 18, noPointer = false } ) => {
  return (
    <span className={`icon ${noPointer ? 'no-pointer' : ''}`}><svg width={width} height={'auto'} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.0135 17.0561L16.1196 17.1621L16.2257 17.0561L16.7257 16.5561L16.8317 16.45L16.7257 16.3439L10.5741 10.1924C10.9454 9.7481 11.2484 9.21786 11.4846 8.60383C11.7411 7.93699 11.8696 7.25209 11.8696 6.54999C11.8696 4.97387 11.3211 3.63445 10.2256 2.54095C9.13019 1.44753 7.79046 0.899988 6.21553 0.899988C4.64052 0.899988 3.30205 1.44856 2.20933 2.54406L2.20933 2.54406C1.11672 3.63945 0.569604 4.97917 0.569604 6.55406C0.569604 8.12899 1.11716 9.46743 2.2107 10.5602C3.30423 11.6529 4.6436 12.2 6.2196 12.2C6.87171 12.2 7.53049 12.0798 8.19528 11.8412C8.81628 11.6182 9.37188 11.3058 9.86102 10.9035L16.0135 17.0561ZM9.52604 9.85642C8.63016 10.7523 7.53124 11.2 6.2196 11.2C4.90796 11.2 3.80905 10.7523 2.91317 9.85642C2.01729 8.96054 1.5696 7.86163 1.5696 6.54999C1.5696 5.23835 2.01729 4.13943 2.91317 3.24355C3.80905 2.34767 4.90796 1.89999 6.2196 1.89999C7.53124 1.89999 8.63016 2.34767 9.52604 3.24355C10.4219 4.13943 10.8696 5.23835 10.8696 6.54999C10.8696 7.86163 10.4219 8.96054 9.52604 9.85642Z" fill="#BFBFBF" stroke="#BFBFBF" strokeWidth="0.3" />
    </svg></span>
  );
};

export const CartIcon: React.FC<Props> = ( { width = 18, noPointer = false } ) => {
  return (
    <span className={`icon ${noPointer ? 'no-pointer' : ''}`}><svg xmlns="http://www.w3.org/2000/svg" width={width} height={'auto'} viewBox="0 0 18 20" fill="none">
      <path d="M5.53921 19.1C5.15588 19.1 4.83504 18.9708 4.57671 18.7125C4.31838 18.4542 4.18921 18.1333 4.18921 17.75C4.18921 17.3667 4.31838 17.0458 4.57671 16.7875C4.83504 16.5292 5.15588 16.4 5.53921 16.4C5.92254 16.4 6.24338 16.5292 6.50171 16.7875C6.76004 17.0458 6.88921 17.3667 6.88921 17.75C6.88921 18.1333 6.76004 18.4542 6.50171 18.7125C6.24338 18.9708 5.92254 19.1 5.53921 19.1ZM14.7392 19.1C14.3559 19.1 14.035 18.9708 13.7767 18.7125C13.5184 18.4542 13.3892 18.1333 13.3892 17.75C13.3892 17.3667 13.5184 17.0458 13.7767 16.7875C14.035 16.5292 14.3559 16.4 14.7392 16.4C15.1225 16.4 15.4434 16.5292 15.7017 16.7875C15.96 17.0458 16.0892 17.3667 16.0892 17.75C16.0892 18.1333 15.96 18.4542 15.7017 18.7125C15.4434 18.9708 15.1225 19.1 14.7392 19.1ZM3.93921 3.59999L6.68921 9.39999H13.2142C13.3642 9.39999 13.4975 9.36249 13.6142 9.28749C13.7309 9.21249 13.8309 9.10833 13.9142 8.97499L16.4892 4.29999C16.5892 4.11666 16.5975 3.95416 16.5142 3.81249C16.4309 3.67083 16.2892 3.59999 16.0892 3.59999H3.93921ZM3.58921 2.89999H16.0892C16.5392 2.89999 16.8767 3.07916 17.1017 3.43749C17.3267 3.79583 17.3392 4.16666 17.1392 4.54999L14.4892 9.39999C14.3559 9.61666 14.185 9.78749 13.9767 9.91249C13.7684 10.0375 13.5392 10.1 13.2892 10.1H6.23921L4.98921 12.4C4.85588 12.6 4.85171 12.8167 4.97671 13.05C5.10171 13.2833 5.28921 13.4 5.53921 13.4H16.0892V14.1H5.53921C5.00588 14.1 4.61004 13.8792 4.35171 13.4375C4.09338 12.9958 4.08921 12.55 4.33921 12.1L5.88921 9.34999L2.18921 1.59999H0.439209V0.899994H2.63921L3.58921 2.89999Z" fill="black" />
    </svg></span>
  );
};
export const MenuIcon: React.FC<Props> = ( { width = 18, noPointer = false } ) => {
  return (
    <span className={`icon ${noPointer ? 'no-pointer' : ''}`}><svg xmlns="http://www.w3.org/2000/svg" width={width} height={'auto'} viewBox="0 0 24 24" fill="none">
      <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="black" />
    </svg></span>
  );
};
export const GeolocationIcon: React.FC<Props> = ( { width = 18, noPointer = false } ) => {
  return (
    <span className={`icon ${noPointer ? 'no-pointer' : ''}`}><svg xmlns="http://www.w3.org/2000/svg" width={width} height={'auto'} viewBox="0 0 10 14" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.25092 9.05128C7.42674 10.3272 6.3431 11.5391 5 12.6868C3.6569 11.5391 2.57326 10.3272 1.74908 9.05128C0.924908 7.77534 0.51282 6.67949 0.51282 5.76374C0.51282 4.42064 0.937118 3.30953 1.78571 2.43041C2.63431 1.55128 3.70574 1.11172 5 1.11172C6.29426 1.11172 7.36569 1.55128 8.21429 2.43041C9.06288 3.30953 9.48718 4.42064 9.48718 5.76374C9.48718 6.67949 9.07509 7.77534 8.25092 9.05128ZM1.26374 9.24359C2.10623 10.5256 3.35165 11.9054 5 13.3828C6.64835 11.9054 7.89377 10.5256 8.73626 9.24359C9.57875 7.96154 10 6.80159 10 5.76374C10 4.29854 9.52076 3.07448 8.56227 2.09158C7.60378 1.10867 6.41636 0.617218 5 0.617218C3.58364 0.617218 2.39621 1.10867 1.43773 2.09158C0.479243 3.07448 0 4.29854 0 5.76374C0 6.80159 0.421245 7.96154 1.26374 9.24359ZM6.6978 5.52564C6.6978 6.46331 5.93767 7.22345 5 7.22345C4.06233 7.22345 3.3022 6.46331 3.3022 5.52564C3.3022 4.58797 4.06233 3.82784 5 3.82784C5.93767 3.82784 6.6978 4.58797 6.6978 5.52564ZM7.1978 5.52564C7.1978 6.73946 6.21381 7.72345 5 7.72345C3.78619 7.72345 2.8022 6.73946 2.8022 5.52564C2.8022 4.31183 3.78619 3.32784 5 3.32784C6.21381 3.32784 7.1978 4.31183 7.1978 5.52564Z" fill="#707070" />
    </svg></span>
  );
};
export const LeftChevronIcon: React.FC<Props> = ( { width = 18, noPointer = false } ) => {
  return (
    <span className={`icon ${noPointer ? 'no-pointer' : ''}`}><svg xmlns="http://www.w3.org/2000/svg" width={width} height={'auto'} viewBox="0 0 24 24" fill="none">
      <path d="M14.4999 12L9.3999 17.1L8.8999 16.6L13.4999 12L8.8999 7.40001L9.3999 6.90001L14.4999 12Z" fill="#707070" />
    </svg></span>
  );
};