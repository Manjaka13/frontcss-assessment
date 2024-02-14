import React from "react";

/**
 * Navigation titles
 */

export const NavTitle = ({ icon, children }) => (
	<div className="nav-title">
		<img className="nav-title__icon" src={icon} alt="Icon" />
		<p className="nav-title__title bold">{children}</p>
	</div>
);
