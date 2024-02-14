import React from "react";
import Logo from "../assets/Resumizeme.svg";
import { Nav } from "./Nav";
import { NavAccount } from "./NavAccount";
import Avatar from "../assets/profile-bottom.png";

/**
 * Page sidebar
 */

export const Sidebar = () => (
	<div className="sidebar">
		<div className="sidebar__title">
			<img className="logo" src={Logo} alt="Logo" />
		</div>
		<Nav />
		<NavAccount avatar={Avatar}>Carla</NavAccount>
	</div>
);
