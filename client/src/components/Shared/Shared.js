import React from "react";

export default function Shared() {
  return (
    <div>
      <h2>Поделиться с друзьями:</h2>
      <ul class="about__list container">
        <li class="about__item">
          <a href="https://www.vk.com">
            <svg class="about__icon">
              <use href="../../assets/icons/sprite.svg#icon-spritevk"></use>
            </svg>
          </a>
        </li>
        <li class="about__item">
          <a href="https://www.facebook.com/">
            <svg class="about__icon">
              <use href="../../assets/icons/sprite.svg#icon-spritefacebook"></use>
            </svg>
          </a>
        </li>
        <li class="about__item">
          <a href="https://twitter.com/">
            <svg class="about__icon">
              <use href="../../assets/icons/sprite.svg#icon-spritetwitter"></use>
            </svg>
          </a>
        </li>
        <li class="about__item">
          <a href="https://www.ok.ru">
            <svg class="about__icon">
              <use href="../../assets/icons/sprite.svg#icon-spriteodnoklassniki"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}
