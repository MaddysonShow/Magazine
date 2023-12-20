import React from "react";
import "./HeaderLogoContainer.scss";
import Logo from "../UI/Logo/Logo";
const HeaderLogoContainer = () => {
    return (
        <div className="logo-container">
            <Logo />
            <p className="logo-container__title">
                Производство <br /> муфельных печей в России
            </p>
        </div>
    );
};

export default HeaderLogoContainer;