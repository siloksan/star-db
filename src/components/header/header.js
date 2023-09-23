import React from 'react';

import './header.css'

const Header = ({ onServiceChange }) => {
	return (
			<nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
				<div className="container">
					<a className="navbar-brand nav-title" href="#">Star DB</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
					        aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarColor02">
						<ul className="navbar-nav me-auto">
							<li className="nav-item">
								<a className="nav-link" href="#">People</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Planets</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Starships</a>
							</li>
							<li className="nav-item">
								<button
									className="btn btn-info header-btn"
									onClick={onServiceChange}>Change Service</button>
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