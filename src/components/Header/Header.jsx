import * as Md from "react-icons/md";
import * as Ai from "react-icons/ai";
import Logo from "../../assets/img/Logo.svg";
import "./header.scss";
import { useState } from "react";
export const Header = () => {
  const [togget, setToggle] = useState(false);
  const [togget2, setToggle2] = useState(false);

  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="row header__row row--content-end">
            <div className="column  top__column top__email">
              <Md.MdEmail />
              <span>dinhhieu203765@gmail.com</span>
            </div>
            <div className="column top__column top__language">
              <span>US</span>
              <Md.MdKeyboardArrowDown />
            </div>
          </div>
        </div>
      </div>
      <div className="row header__row row--content-between container">
        <div className="column header__column">
          <div className="logo header__logo">
            <img src={Logo} className="logo__image" />
          </div>
        </div>

        <div className="column header__column">
          <button
            onClick={() => setToggle(!togget)}
            className={`icon header__button header__icon-${
              togget ? "close" : ""
            }`}
          >
            {togget ? <Ai.AiOutlineClose /> : <Md.MdMenu />}
            <span>Danh mục</span>
          </button>
        </div>

        <div className="column header__column">
          <div className="header__search">
            <input
              className="header__search-input"
              type="text"
              placeholder="Tìm kiếm sản phẩm "
            />
            <Ai.AiOutlineSearch />
          </div>
        </div>

        <div className="column header__column">
          <div className="icon header__icon-love">
            <Ai.AiOutlineHeart />
          </div>
        </div>

        <div className="column header__column">
          <div className="icon header__icon-cart">
            <Ai.AiOutlineShoppingCart />
          </div>
        </div>
        <div className="column header__column">
          <button
            onClick={() => setToggle2(!togget2)}
            className={`icon header__button header__icon-${
              togget2 ? "close" : ""}`}
          >
            Đi vào
          </button>
        </div>
      </div>
    </header>
  );
};
