import React from 'react';
import logo from "../assets/icons/Logo.png"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
        <h1><img src={logo} alt="" />YA BAO</h1>
        <sub>Дух китайской еды</sub>
      <p> Все права защищены © 2021</p>
    </footer>
  );
};

export default Footer;