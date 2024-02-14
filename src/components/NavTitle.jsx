import React from "react";
import Icon from "../assets/icon-add.svg";

/**
 * Navigation titles
 */

export const NavTitle = ({ icon, children, add }) => (
	<div className="nav-title">
		<div className="nav-title__group">
			<img className="icon" src={icon} alt="Icon" />
			<p className="title bold">{children}</p>
		</div>
		{add && <img className="nav-title__icon" src={Icon} alt="Icon" />}
	</div>
);
