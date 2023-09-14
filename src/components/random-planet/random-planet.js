import React from 'react';

import './random-planet.css'

const RandomPlanet = () => {
	return (
		<div className="card mb-3 planet-card">
			<div className="row g-0 justify-content-start">
				<div className="col-md-4 img-card-container">
					<img src="https://starwars-visualguide.com/assets/img/planets/10.jpg" className="img-fluid rounded-start img-card" alt="planet.name"/>
				</div>
				<div className="col-md-8 ">
					<div className="card-body">
						<h5 className="card-title">Planet Name</h5>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">Population 114555</li>
							<li className="list-group-item">Rotation Period 565</li>
							<li className="list-group-item">Diameter 445</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RandomPlanet;