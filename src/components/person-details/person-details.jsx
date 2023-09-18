import React, {useEffect, useState} from 'react';
import './person-details.css'
import SwapiService from "../../services/swapi-service";

const initialPerson = {
	id: null,
	name: '',
	gender: '',
	birthYear: '',
	eyeColor: '',
}

const PersonDetails = ({ personId }) => {

	const swapiService = new SwapiService()

	const [person, setPerson] = useState(initialPerson)

	const { id, name, gender, birthYear, eyeColor } = person

	const updatePerson = (id) => {
		console.log('update')
		swapiService
			.getPerson(id)
			.then((person) => {
				setPerson(person)
			})
	}

	useEffect(() => {
		updatePerson(personId)
	}, [personId])

	return (
		<div className="card mb-3 planet-card">
			<div className="row g-0">
				<div className="col-md-4 img-card-container">
					<img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="img-fluid rounded-start img-card" alt="planet.name"/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">{gender}</li>
							<li className="list-group-item">{birthYear}</li>
							<li className="list-group-item">{eyeColor}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PersonDetails;