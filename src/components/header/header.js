import React from 'react';

import './header.css'
import {NavLink} from "react-router-dom";

const Header = ({ onServiceChange }) => {
	return (
			<nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
				<div className="container">
					<NavLink className="navbar-brand nav-title" to="/">Star DB</NavLink>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
					        aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarColor02">
						<ul className="navbar-nav me-auto">
							<li className="nav-item">
								<NavLink  className="nav-link" to="/people/">People</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/planets/">Planets</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/starships/">Starships</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/secret">Secret</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/login">Login</NavLink>
							</li>
						</ul>
						<button
							className="btn btn-info header-btn"
							onClick={onServiceChange}>Change Service</button>
					</div>
				</div>
			</nav>
	);
};

export default Header;