import React, {useEffect, useState} from 'react';

import './random-planet.css'
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicate from "../error-indicate";

const initialState = {
	planet: {},
	loading: true,
	error: false
}

const RandomPlanet = () => {

	const swapiService = new SwapiService()

	const [state, setState] = useState(initialState)

	const {
		loading,
		error
	} = state

	const onError = () => {
		console.log('error')
		setState({...state, error: true })
	}

	const updatePlanet = () => {
		const id = Math.floor(Math.random() * 19) + 1
		swapiService
			.getPlanet(id)
			.then((planet) => {
				setState({ planet, loading: false, error: false })
			})
			.catch(onError)
	}

	useEffect(() => {
		console.log('effect')
		const interval = setInterval(() => updatePlanet(), 6000)

		return () => clearInterval(interval)
	}, [])

	const renderSpinner = loading && !error ? <Spinner /> : null
	const renderContent = !(loading || error) ? <PlanetView planet={state.planet}/> : null
	const renderError = error ? <ErrorIndicate /> : null

	return (
		<div className="card mb-3 planet-card">
			{renderSpinner}
			{renderContent}
			{renderError}
		</div>
	);
};

const PlanetView = ({ planet: { id, name, population, rotationPeriod,diameter } }) => {

	return (
		<div className="row g-0 justify-content-start">
			<div className="col-md-4 img-card-container">
				<img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
				     className="img-fluid rounded-start img-card" alt="planet.name"/>
			</div>
			<div className="col-md-8 ">
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">Population {population}</li>
						<li className="list-group-item">Rotation Period {rotationPeriod}</li>
						<li className="list-group-item">Diameter {diameter}</li>
					</ul>
				</div>
			</div>
		</div>
	)
}


export default RandomPlanet;