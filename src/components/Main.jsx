import React from "react";
import { Premium } from "./Premium";
import { PersonalForm } from "./PersonalForm";
import { Delete } from "./Delete";

/**
 * Main content
 */

export const Main = () => (
	<div className="main">
		<Premium />
		<PersonalForm />
		<Delete />
		<p className="main__info">
			<span className="primary">Get in touch with our support team</span> if you
			have any question or want to leave some feedback. We’ll be happy to hear from
			you.
		</p>
	</div>
);
