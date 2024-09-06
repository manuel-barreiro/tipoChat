import React from "react"

export const UserIcon = ({ color = "currentColor", ...props }) => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.4117 6.47587C14.4117 8.9234 12.4493 10.8859 10 10.8859C7.55162 10.8859 5.58839 8.9234 5.58839 6.47587C5.58839 4.02835 7.55162 2.06666 10 2.06666C12.4493 2.06666 14.4117 4.02835 14.4117 6.47587ZM10 18.7333C6.38535 18.7333 3.33337 18.1458 3.33337 15.8791C3.33337 13.6116 6.40453 13.0449 10 13.0449C13.6156 13.0449 16.6667 13.6324 16.6667 15.8991C16.6667 18.1667 13.5956 18.7333 10 18.7333Z"
      fill={color}
    />
  </svg>
)

export const EmailIcon = ({ color = "currentColor", ...props }) => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.01181 3.73149C3.17097 3.73149 1.67847 5.22399 1.67847 7.06482V13.7315C1.67847 15.5723 3.17097 17.0648 5.01181 17.0648H15.0118C16.8527 17.0648 18.3452 15.5723 18.3452 13.7315V7.06482C18.3452 5.22399 16.8527 3.73149 15.0118 3.73149H5.01181ZM5.01181 5.39816H15.0118C15.8518 5.39816 16.546 6.01483 16.661 6.82316C15.8627 7.56733 14.676 8.48065 13.8918 9.04399C12.0877 10.3398 10.5001 11.2315 10.0118 11.2315C9.52348 11.2315 7.93597 10.3407 6.1318 9.04399C5.34763 8.48065 4.57681 7.87149 3.99598 7.37732C3.74847 7.16649 3.56513 6.99649 3.42346 6.85649C3.53846 6.04816 4.1718 5.39816 5.01181 5.39816ZM3.35348 9.02649C5.46848 10.7373 8.56764 12.8881 10.0118 12.8981C10.9526 12.9048 12.5618 12.0065 14.2035 10.8723C15.0527 10.2848 15.9977 9.58732 16.6793 9.01482L16.6785 13.7315C16.6785 14.6523 15.9327 15.3981 15.0118 15.3981H5.01181C4.09097 15.3981 3.34514 14.6523 3.34514 13.7315L3.35348 9.02649Z"
      fill={color}
    />
  </svg>
)

export const PasswordIcon = ({ color = "currentColor", ...props }) => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.16935 13.1105C8.68975 13.4632 9.32398 13.6766 9.99886 13.6766C11.7877 13.6766 13.2432 12.208 13.2432 10.4031C13.2432 9.72211 13.0318 9.08218 12.6821 8.55711L11.7958 9.45137C11.9422 9.73031 12.0235 10.0585 12.0235 10.4031C12.0235 11.527 11.1128 12.4459 9.99886 12.4459C9.65735 12.4459 9.33211 12.3639 9.05565 12.2162L8.16935 13.1105ZM15.3573 5.85791C16.5363 6.94087 17.5364 8.40123 18.2845 10.1569C18.3496 10.3128 18.3496 10.4933 18.2845 10.641C16.5444 14.7267 13.4465 17.1716 9.99886 17.1716H9.99073C8.42142 17.1716 6.91716 16.6547 5.59178 15.7112L4.01433 17.3028C3.89237 17.4259 3.73787 17.4833 3.58338 17.4833C3.42889 17.4833 3.26627 17.4259 3.15243 17.3028C2.94915 17.0977 2.91663 16.7695 3.07925 16.5316L3.10364 16.4988L15.1296 4.36474C15.1459 4.34833 15.1621 4.33192 15.1703 4.31552L15.1703 4.31551C15.1865 4.2991 15.2028 4.2827 15.2109 4.26629L15.9753 3.49509C16.2192 3.25717 16.6014 3.25717 16.8372 3.49509C17.0811 3.73302 17.0811 4.12682 16.8372 4.36474L15.3573 5.85791ZM6.7486 10.4063C6.7486 10.6196 6.77299 10.8329 6.80551 11.0298L3.79699 14.0654C2.98387 13.1137 2.27646 11.9651 1.71541 10.6442C1.65036 10.4965 1.65036 10.316 1.71541 10.1601C3.45548 6.07442 6.55345 3.63776 9.99293 3.63776H10.0011C11.1638 3.63776 12.294 3.91671 13.3348 4.44178L10.619 7.18199C10.4239 7.14918 10.2125 7.12457 10.0011 7.12457C8.20407 7.12457 6.7486 8.59312 6.7486 10.4063Z"
      fill={color}
    />
  </svg>
)

export const CalendarIcon = ({ color = "currentColor", ...props }) => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6757 2.70716L13.6766 3.33185C15.9721 3.51176 17.4885 5.07598 17.4909 7.47478L17.5 14.4963C17.5033 17.1116 15.8602 18.7208 13.2265 18.725L6.79324 18.7333C4.17599 18.7366 2.51235 17.0891 2.50906 14.4663L2.50001 7.52725C2.49671 5.11263 3.95961 3.55257 6.25514 3.34185L6.25432 2.71716C6.2535 2.35068 6.52501 2.07498 6.88703 2.07498C7.24905 2.07415 7.52057 2.34901 7.52139 2.71549L7.52221 3.29854L12.4095 3.29187L12.4087 2.70883C12.4078 2.34235 12.6794 2.06749 13.0414 2.06665C13.3952 2.06582 13.6749 2.34068 13.6757 2.70716ZM3.7679 7.78462L16.2247 7.76796V7.47644C16.1893 5.68567 15.2908 4.74614 13.6782 4.60621L13.679 5.24756C13.679 5.60571 13.4001 5.88974 13.0463 5.88974C12.6843 5.89057 12.412 5.60738 12.412 5.24922L12.4111 4.57456L7.52386 4.58123L7.52468 5.25506C7.52468 5.61404 7.25399 5.89723 6.89197 5.89723C6.52995 5.89807 6.25761 5.61571 6.25761 5.25672L6.25679 4.61538C4.65238 4.77613 3.76461 5.71899 3.76708 7.52558L3.7679 7.78462ZM12.6999 11.5702V11.5794C12.7082 11.9625 13.0208 12.2532 13.4001 12.2449C13.7704 12.2357 14.0657 11.9184 14.0575 11.5352C14.0402 11.1688 13.7432 10.8697 13.3738 10.8706C12.9953 10.8789 12.6991 11.1871 12.6999 11.5702ZM13.3795 15.31C13.0011 15.3017 12.6958 14.986 12.695 14.6029C12.6868 14.2197 12.9904 13.9024 13.3688 13.8932H13.3771C13.7638 13.8932 14.0772 14.2089 14.0772 14.6004C14.0781 14.9918 13.7654 15.3092 13.3795 15.31ZM9.3101 11.5836C9.32655 11.9667 9.64003 12.2657 10.0185 12.2491C10.3888 12.2316 10.6841 11.9151 10.6677 11.5319C10.6586 11.1571 10.3542 10.8656 9.98395 10.8664C9.60547 10.8831 9.30928 11.2004 9.3101 11.5836ZM10.0218 15.2725C9.64332 15.2892 9.33067 14.9902 9.31339 14.607C9.31339 14.2239 9.60877 13.9074 9.98724 13.8899C10.3575 13.8891 10.6627 14.1806 10.671 14.5546C10.6882 14.9385 10.392 15.255 10.0218 15.2725ZM5.92027 11.6127C5.93673 11.9958 6.2502 12.2957 6.62868 12.2782C6.99893 12.2615 7.2943 11.9442 7.27703 11.5611C7.2688 11.1863 6.96437 10.8947 6.5933 10.8956C6.21483 10.9122 5.91945 11.2296 5.92027 11.6127ZM6.63197 15.2767C6.2535 15.2942 5.94084 14.9943 5.92356 14.6112C5.92274 14.2281 6.21894 13.9107 6.59741 13.8941C6.96766 13.8932 7.27291 14.1847 7.28114 14.5596C7.29842 14.9427 7.00304 15.26 6.63197 15.2767Z"
      fill={color}
    />
  </svg>
)