import React from "react";

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
}) => (
	<div className="input">
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
	</div>
);
