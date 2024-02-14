import React from "react";

/**
 * Delete account component
 */

export const Delete = () => (
	<div className="delete">
		<p className="delete__title semi-bold">Delete account</p>
		<p className="delete__info">
			If you delete your account you'll be permanently removing it from our systems
			- you can't undo it.
		</p>
		<p className="delete__confirm">Yes, Delete my account</p>
	</div>
);
