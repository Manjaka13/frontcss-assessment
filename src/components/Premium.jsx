import React from "react";
import IconPremium from "../assets/icon-premium.svg";

/**
 * Premium component
 */

export const Premium = () => (
	<div className="premium">
		<figure className="premium__image">
			<img className="image" src={IconPremium} alt="Career" />
		</figure>
		<div className="premium__content">
			<p className="title semi-bold">Premium Account</p>
			<p className="content">
				You have a premium account, granting you access to all the remarkable
				features offered by ResumeDone. With this privilege, you can indulge in the
				freedom of downloading an unlimited number of resumes and cover letters in
				both PDF and Word formats.
			</p>
		</div>
	</div>
);
