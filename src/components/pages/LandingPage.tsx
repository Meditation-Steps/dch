import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
	return (
		<div className="container landing-container">
			<h1 className="landing-title">AM</h1>
			<img
				src="/images/img_01.jpg"
				alt="Dharma Wheel"
				className="landing-logo"
			/>
			<div className="language-selection">
				<Link to="/ru" className="language-button">
					Русский
				</Link>
				<Link to="/en" className="language-button">
					English
				</Link>
			</div>
		</div>
	);
}
