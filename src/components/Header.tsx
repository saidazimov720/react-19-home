import React from "react";
import logo from  '../assets/icons/Logo.png';
const Header = () =>{
return(
    <header className="header">
        <h1><img src={logo} alt="" /> YA BAO</h1>
        <sub>Дух китайской еды</sub>
        <nav>
        <a href="/">Паста</a>
        <a href="/">Супы</a>
        <a href="/">Салаты</a>
        <a href="/">Антипасти</a>
        <a href="/">Напитки</a>
        <a href="/">Десерты</a>
        <a href="/">Бакалея</a>
        <a href="/">Акции</a>
        <a href="/">Комбо</a>
        <a href="/">Контакты</a>
        <a href="/bonuses">Бонусы</a>
        <a href="/basket">Корзина</a>
        </nav>
    </header>
);
};
export default Header;