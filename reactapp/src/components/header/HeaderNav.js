import React from "react";
import NavLink from '../UI/NavLink/NavLink'

const HeaderNav = () => {
    return (
        <nav>
            <ul className={"nav"}>
                <li>
                    <NavLink link="./" text="Контакты" classes={"header__link"} />
                </li>
                <li>
                    <NavLink link="./" text="Наши пользователи" classes={"header__link"} />
                </li>
                <li className="desktop">
                    <NavLink
                        link="./"
                        text="Сертификаты"
                        classes={"header__link desktop"}
                    />
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNav;
