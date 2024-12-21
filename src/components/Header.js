import React from "react";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#main-image">Главная</a></li>
          <li><a href="#cars">Автомобили</a></li>
          <li><a href="#about">О нас</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
