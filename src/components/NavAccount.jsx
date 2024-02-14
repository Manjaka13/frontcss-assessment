import React from "react";

import { ReactComponent as IconSettings } from "../assets/icon-settings.svg";

/**
 * Account profile in bottom of sidebar
 */

export const NavAccount = ({ avatar, children }) => (
	<div className="nav-account">
		<div className="nav-account__group">
			<img className="nav-account__image" src={avatar} alt="Avatar" />
			<p className="nav-account__name semi-bold">{children}</p>
		</div>
		<IconSettings className="nav-account__icon" />
	</div>
);
