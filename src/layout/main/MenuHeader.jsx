// ----------------------------------------------------------------------

const MenuHeader = ({ navConfig, sx = "" }) => {
  return (
    <>
      {navConfig.map(([title, url], idx) => (
        <a key={idx} href={url} className={`link-menu-header ${sx}`}>
          {title}
        </a>
      ))}
    </>
  );
};

export default MenuHeader;
