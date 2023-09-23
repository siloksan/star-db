import React, {useEffect, useState, useContext} from 'react';
import {PlanetDetails} from "../sw-components";
import {AttributesContext} from "../app/app";

import './random-planet.css'

const RandomPlanet = () => {

	const [id, setId] = useState(7)
	const { detailsListPlanet } = useContext(AttributesContext)

	useEffect(() => {
		const id = Math.floor(Math.random() * 17) + 2
		const interval = setInterval(() => setId(id), 10000)

		return () => clearInterval(interval)
	}, [id])

	return (
		<div className="card mb-3 item-card">
			<PlanetDetails
				detailList={detailsListPlanet}
				selectedId={id}/>
		</div>
	);
};

export default RandomPlanet;