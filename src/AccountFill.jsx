const AccountFill = ({ size, fill }) => {
  const tf = `scale(${size / 48})`;
  return (
    <svg
      transform={tf}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 7C23 10.866 19.866 14 16 14C12.134 14 9 10.866 9 7C9 3.13401 12.134 0 16 0C19.866 0 23 3.13401 23 7Z"
        fill={fill}
      />
      <path
        d="M0 29C0 21.8203 5.8203 16 13 16H19C26.1797 16 32 21.8203 32 29V31H0V29Z"
        fill={fill}
      />
    </svg>
  );
};

export default AccountFill;
