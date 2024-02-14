import React from "react";
import { Input } from "./Input";
import Picture from "../assets/picture.png";

/**
 * Personal form component
 */

export const PersonalForm = () => (
	<div className="personal-form">
		<p className="personal-form__title semi-bold">Personal Information</p>
		<div className="personal-form__content">
			<form className="personal-form__form">
				<div className="group">
					<Input
						name="first-name"
						label="First Name"
						defaultValue="Petter"
						placeholder="Enter your first name"
						type="text"
					/>
					<Input
						name="last-name"
						label="Last Name"
						defaultValue="Cetera"
						placeholder="Enter your last name"
						type="text"
					/>
				</div>
				<div className="group">
					<Input
						name="city"
						label="City"
						defaultValue="London"
						placeholder="Which city ?"
						type="text"
					/>
					<Input
						name="postal-code"
						label="Postal Code"
						defaultValue="E2 4XF"
						placeholder="Your postal code"
						type="text"
					/>
				</div>
				<div className="group">
					<Input
						name="address"
						label="Address"
						defaultValue="123 Example"
						placeholder="Your address"
						type="text"
					/>
				</div>
				<div className="group">
					<Input
						name="email"
						label="Email"
						defaultValue="petter@gmail.com"
						placeholder="Enter your email"
						type="email"
						check
					/>
					<Input
						name="phone"
						label="Phone"
						defaultValue="+44 22 233 344 44"
						placeholder="Phone number"
						type="text"
					/>
				</div>
				<div className="group">
					<Input
						name="password"
						label="Password"
						placeholder="Password"
						type="password"
					/>
				</div>
				<p className="info">
					Use this email to log in to your{" "}
					<span className="primary">resumedone.io</span> account and receive
					notifications.
				</p>
				<button className="submit" type="submit">
					Save
				</button>
			</form>
			<img className="personal-form__picture" src={Picture} alt="Profile pic" />
		</div>
		<div className="personal-form__check">
			<input type="checkbox" id="check" name="check" />
			<label className="label" for="check">
				Show my profile to serious employers on{" "}
				<span className="primary">hirethesbest.io</span> for free
			</label>
		</div>
	</div>
);
