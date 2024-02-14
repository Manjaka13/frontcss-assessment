import React from "react";
import {
	NAV_BOARD,
	NAV_BOARD_AGENT,
	NAV_LAST_SEARCH,
	NAV_TOP_SEARCH,
} from "../helpers/const";
import IconSearch from "../assets/icon-search.svg";
import IconStar from "../assets/icon-star.svg";
import IconClock from "../assets/icon-clock.svg";
import IconFolders from "../assets/icon-folders.svg";
import IconBoard from "../assets/icon-board.svg";
import IconLock from "../assets/icon-lock.png";
import { NavTitle } from "./NavTitle";
import { NavElement } from "./NavElement";

/**
 * Navigation component
 */

export const Nav = () => {
	const mappedTopSearch = NAV_TOP_SEARCH.map((item, key) => (
		<li className="search__item" key={key}>
			<NavElement icon={IconStar}>{item}</NavElement>
		</li>
	));

	const mappedLastSearch = NAV_LAST_SEARCH.map((item, key) => (
		<li className="search__item" key={key}>
			<NavElement icon={IconClock}>{item}</NavElement>
		</li>
	));

	const mappedBoard = NAV_BOARD.map((item, key) => (
		<li className="search__item" key={key}>
			<NavElement icon={IconFolders}>{item}</NavElement>
		</li>
	));

	const mappedBoardAgent = NAV_BOARD_AGENT.map((item, key) => (
		<li className="search__item" key={key}>
			<NavElement icon={IconLock}>{item}</NavElement>
		</li>
	));

	return (
		<div className="nav">
			<div className="nav__item">
				<NavTitle icon={IconSearch}>Search</NavTitle>
				<ul className="nav__list">
					{mappedTopSearch}
					{mappedLastSearch}
				</ul>
			</div>
			<div className="nav__item">
				<NavTitle icon={IconBoard} add>
					My Boards
				</NavTitle>
				<ul className="nav__list">
					{mappedBoard}
					{mappedBoardAgent}
				</ul>
			</div>
		</div>
	);
};
