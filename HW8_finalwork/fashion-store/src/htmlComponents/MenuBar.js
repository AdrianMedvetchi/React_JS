import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/MenuBar.css'; 

function MenuBar({ cartItems }) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="menu_bar center">
      <div className="menu_home">
        <Link to="/"><img className="logo" src="/img/logo_home.svg" alt="home_logo" /></Link>
        <Link to="/catalog"><img className="menu_img" src="/img/search.svg" alt="catalog" /></Link>
      </div>
      <div className="menu_buttons">
        <div className="hover_container">
          <a className="hover_target" href="#"><img className="menu_img" src="/img/3_lines_dropdown.svg" alt="dropdown_menu" /></a>
          <div className="hidden_menu">
            <h1 className="title_menu">MENU</h1>
            <h2 className="cathegory_name">Man</h2>
            <div className="cathegory">
              <p className="subcathegories">Accesrories</p>
              <p className="subcathegories">Bags</p>
              <p className="subcathegories">Denim</p>
              <p className="subcathegories">T-shirts</p>
            </div>
            <h2 className="cathegory_name">Woman</h2>
            <div className="cathegory">
              <p className="subcathegories">Accesrories</p>
              <p className="subcathegories">Jackets & Coats</p>
              <p className="subcathegories">Polos</p>
              <p className="subcathegories">T-shirts</p>
            </div>
            <h2 className="cathegory_name">Kids</h2>
            <div className="cathegory">
              <p className="subcathegories">Accesrories</p>
              <p className="subcathegories">Jackets & Coats</p>
              <p className="subcathegories">Polos</p>
              <p className="subcathegories">T-shirts</p>
            </div>
          </div>
        </div>
        <a className="hidden" href="#"><img className="menu_img1 cart-image" src="/img/contacts.svg" alt="contacts" /></a>
        <Link to="/cart" className="hidden cart-icon"><img className="menu_img1" src="/img/telejka.svg" alt="cart" />{totalItems > 0 && <span className="cart-badge">{totalItems}</span>}</Link>
      </div>
    </div>
  );
}

export default MenuBar;
