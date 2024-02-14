import React from "react";
import IconCheck from "../assets/icon-check.svg";

/**
 * Input component
 */

export const Input = ({
	name,
	label,
	type,
	placeholder,
	defaultValue,
	required,
	disabled,
	check,
}) => (
	<div className={`input${check ? " input--check" : ""}`}>
		<label className="input__label semi-bold" for={name}>
			{label}
		</label>
		<input
			className="input__field"
			id={name}
			name={name}
			type={type || "text"}
			placeholder={placeholder}
			defaultValue={defaultValue}
			required={required}
			disabled={disabled}
		/>
		{check && <img className="input__check" src={IconCheck} alt="Check" />}
	</div>
);
