import React from "react";
import NavLink from "../UI/NavLink/NavLink";
import Socials from "../UI/Socials/Socials";

const HeaderContacts = () => {
    return (
        <div className="header__contacts">
            <NavLink link="tel:+79262225850" text=" +7 926 222-58-50"/>
            <Socials />
        </div>
    );
};

export default HeaderContacts;
