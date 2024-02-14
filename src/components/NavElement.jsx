import React from "react";

/**
 * An element in a nav dropdown
 */

export const NavElement = ({ icon, children }) => (
	<div className="nav-element">
		<img className="nav-element__icon" src={icon} alt="Icon" />
		<p className="nav-element__text">{children}</p>
	</div>
);
