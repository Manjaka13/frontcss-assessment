import React from "react";
import { Premium } from "./Premium";
import { Input } from "./Input";

/**
 * Main content
 */

export const Main = () => (
	<div className="main">
		<Premium />
		<Input
			name="test"
			label="First Name"
			defaultValue="Petter"
			placeholder="Enter your name"
			type="text"
		/>
	</div>
);
