import React from "react";
import NavLink from "../UI/NavLink/NavLink";
import "./footer.scss";
import Socials from "../UI/Socials/Socials";
import '../../index.scss'

const Footer = () => {
  return (
    <footer className="footer containerF">
      <div className="footer__main">
        <div className="footer__section">
          {/*<div className="footer-item">*/}
          {/*  <div className="footer-item__title">О компании</div>*/}
          {/*  <ul className="footer-item__list">*/}
          {/*    <li>*/}
          {/*      <NavLink link="./" text="Партнёрская программа" />*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <NavLink link="./" text="Вакансии" />*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
          <div className="footer-item">
            <div className="footer-item__title">Меню</div>
            <div className="footer__list-line">
              <ul className="footer-item__list">
                <li>
                  <NavLink link="https://aquaman-msk.ru/" text="Наши партнеры" />
                </li>
                <li>
                  <NavLink link="./" text="Сертификаты" />
                </li>
              </ul>
              {/*<ul className="footer-item__list">*/}
              {/*  <li className="desktop">*/}
              {/*    <NavLink link="./" text="Кейсы" />*/}
              {/*  </li>*/}
              {/*  <li className="desktop">*/}
              {/*    <NavLink*/}
              {/*      link="./"*/}
              {/*      text="Благодарственные письма"*/}
              {/*      classes="desktop"*/}
              {/*    />*/}
              {/*  </li>*/}
              {/*  <li className="mobile">*/}
              {/*    <NavLink link="./" text="Благодарность клиентов" />*/}
              {/*  </li>*/}
              {/*  <li className="mobile">*/}
              {/*    <NavLink link="./" text="Кейсы" />*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <NavLink link="./" text="Сертификаты" />*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <NavLink link="./" text="Блог на Youtube" />*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <NavLink link="./" text="Вопрос / Ответ" />*/}
              {/*  </li>*/}
              {/*</ul>*/}
            </div>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-item__title">Контакты</div>

          <ul className="footer-item__list footer-item__list--contacts">
            <li>
              <NavLink link="tel:+79262225850" text=" +7 926 222-58-50" classes="tel"/>
            </li>
            {/*<li>*/}
            {/*  <Socials />*/}
            {/*</li>*/}
            <li>
              <NavLink
                link="https://yandex.ru/maps/213/moscow/house/vostryakovskiy_proyezd_23k3/Z04YcAJlSkABQFtvfXl2dHtqZA==/?ll=37.655924%2C55.575708&z=17.39"
                text="Москва, Востряковский проезд, дом 23 корпус 3"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        ©Aquaman 2023. Все права защищены.
        {/*<NavLink*/}
        {/*  link="./"*/}
        {/*  text="Политика конфиденциальности"*/}
        {/*  classes="footer__copyright-link"*/}
        {/*/>*/}
      </div>
    </footer>
  );
};

export default Footer;
