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
	</div>
);
