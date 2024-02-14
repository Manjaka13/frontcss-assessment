import React from "react";
import { FOOTER } from "../helpers/const";

/**
 * Footer component
 */

export const Footer = () => {
	const mappedLinks = FOOTER.map((item, key) => (
		<li className="item" key={key}>
			{item}
		</li>
	));

	return (
		<footer className="footer">
			<ul className="footer__list">{mappedLinks}</ul>
		</footer>
	);
};
