import React from 'react';
import './person-details.css'

const PersonDetails = () => {
	return (
		<div className="card mb-3 planet-card">
			<div className="row g-0">
				<div className="col-md-4 img-card-container">
					<img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" className="img-fluid rounded-start img-card" alt="planet.name"/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">R2-D2</h5>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">Gender</li>
							<li className="list-group-item">Age</li>
							<li className="list-group-item">Eye color</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PersonDetails;