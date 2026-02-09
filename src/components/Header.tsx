import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="bg-green">
      <picture>
        <source
          media="(max-width: 450px)"
          srcSet={assets.headerMobile}
          sizes=""
        />
        <source
          media="(max-width: 1024px)"
          srcSet={assets.headerDesktop}
          sizes=""
        />
        <img className="w-full" src={assets.headerDesktop} alt="header-img" />
      </picture>
    </div>
  );
};

export default Header;
