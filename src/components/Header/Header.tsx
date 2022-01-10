import * as React from "react";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__catalog">Каталог</div>
      <div className="header__right-block">
        <div className="header__comparison">Сравнение</div>
        <div className="header__account">Личный кабинет</div>
        <img
          src={require("../../images/icon.png")}
          alt="Иконка аккаунта"
          className="header__image"
        />
      </div>
    </header>
  );
};

export default Header;
