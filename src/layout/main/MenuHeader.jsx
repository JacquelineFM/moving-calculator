// ----------------------------------------------------------------------

const MenuHeader = ({ sx = "" }) => {
  return (
    <>
      <a
        href="/#"
        className={`text-white hover:underline hover:underline-offset-8 hover:decoration-1 px-3 py-2 text-base font-normal leading-7 ${sx}`}
      >
        How We Work
      </a>
      <a
        href="/#"
        className={`text-white hover:underline hover:underline-offset-8 hover:decoration-1 px-3 py-2 text-base font-normal leading-7 ${sx}`}
      >
        Services
      </a>
      <a
        href="/#"
        className={`text-white hover:underline hover:underline-offset-8 hover:decoration-1 px-3 py-2 text-base font-normal leading-7 ${sx}`}
      >
        Free Quote
      </a>
      <a
        href="/#"
        className={`text-white hover:underline hover:underline-offset-8 hover:decoration-1 px-3 py-2 text-base font-normal leading-7 ${sx}`}
      >
        Contact
      </a>
    </>
  );
};

export default MenuHeader;
