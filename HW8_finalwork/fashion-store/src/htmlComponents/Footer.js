import React from 'react';
import '../CSS/Footer.css';

function Footer() {
  return (
    <footer className="footer center">
      <section className="footer_bonuses">
        <div className="bonus">
          <img className="bonus_img" src="/img/Forma_1.svg" alt="freeDelivery" />
          <h2 className="bonus_name">Free Delivery</h2>
          <p className="bonus_description">Worldwide delivery on all orders. Authoritatively morph next-generation innovation with extensive models.</p>
        </div>
        <div className="bonus">
          <img className="bonus_img" src="/img/Forma_1_(1).svg" alt="sales&discounts" />
          <h2 className="bonus_name">Sales & Discounts</h2>
          <p className="bonus_description">Worldwide delivery on all orders. Authoritatively morph next-generation innovation with extensive models.</p>
        </div>
        <div className="bonus">
          <img className="bonus_img" src="/img/Forma_1_(2).svg" alt="qualityAssurance" />
          <h2 className="bonus_name">Quality Assurance</h2>
          <p className="bonus_description">Worldwide delivery on all orders. Authoritatively morph next-generation innovation with extensive models.</p>
        </div>
      </section>
      <section className="footer_subscribe">
        <div className="footer_motto">
          <img className="footer_img" src="/img/Intersect.png" alt="face" />
          <p className="motto">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p>
        </div>
        <div className="subscribe">
          <h2 className="subscribe_title">SUBSCRIBE <br /><span className="subscribe_description">FOR OUR NEWSLETTER AND PROMOTION</span></h2>
          <form className="subscribe_form">
            <input className="subscribe_input" type="text" placeholder="Enter your email" />
            <button className="subscribe_btn">Subscribe</button>
          </form>
        </div>
      </section>
      <section className="footer_bottom">
        <div className="copyrights">
          <p className="copyrights_description">© 2022 Brand. All Rights Reserved.</p>
        </div>
        <div className="socials">
          <img className="social" src="/img/facebook.svg" alt="facebook" />
          <img className="social" src="/img/instagram.svg" alt="instagram" />
          <img className="social" src="/img/pinterest.svg" alt="pinterest" />
          <img className="social" src="/img/twitter.svg" alt="twitter" />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
