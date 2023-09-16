import './header.scss';
export const Header = () => {

  return (
    <header className="header">
      <div className="container">
        <div className="row justify-content-between header__row">
          <div className="col header__column">
            <img
              src="/images/header_logo.png"
              alt=""
              className="header__logo"
            />
          </div>
          <div className="col header__column">
            <ul className="header__navigation">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop Online</a>
              </li>
              <li>
                <a href="#">What’s New</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
            </ul>
          </div>
          <div className="col header__column">
            <button className="header__login">Sign up</button>
            <button className="header__logout">Sign in</button>
          </div>
        </div>
      </div>
    </header>
  );
};
