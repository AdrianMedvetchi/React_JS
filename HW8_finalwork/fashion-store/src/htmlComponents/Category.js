import React from 'react';
import '../CSS/Category.css';

function Category() {
  return (
    <div className="category center">
      <div className="cloths">
        <div className="category_for for_women">
          <img className="category_image" src="/img/Layer_43.svg" alt="women" />
          <svg class="background" width="360" height="260" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M360 0H0V260H360V0Z" fill="#211616" fill-opacity="0.7" /></svg>
          <h1 className="category_description">
            30% OFF <br /><span className="title">FOR WOMEN</span>
          </h1>
        </div>
        <div className="category_for for_men">
          <img className="category_image" src="/img/Rectangle_30.svg" alt="men" />
          <svg class="background" width="360" height="260" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M360 0H0V260H360V0Z" fill="#211616" fill-opacity="0.7" /></svg>
          <h1 className="category_description">
            HOT DEAL <br /><span className="title">FOR MEN</span>
          </h1>
        </div>
        <div className="category_for for_kids">
          <img className="category_image" src="/img/Rectangle_30_(1).svg" alt="kids" />
          <svg class="background" width="360" height="260" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M360 0H0V260H360V0Z" fill="#211616" fill-opacity="0.7" /></svg>
          <h1 className="category_description">
            NEW ARRIVALS <br /><span className="title">FOR KIDS</span>
          </h1>
        </div>
      </div>
      <div className="accesories">
        <div className="category_for">
          <img className="category_image big" src="/img/Rectangle_20.svg" alt="accessories" />
          <svg class="background big" width="1140" height="180" viewBox="0 0 1140 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="svg-path" d="M1140 0H0V180H1140V0Z" fill="#211616" fill-opacity="0.7" />
                </svg>
          <h1 className="category_description_accesories">
            LUXURIOUS & TRENDY <br /><span className="title">ACCESORIES</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Category;
