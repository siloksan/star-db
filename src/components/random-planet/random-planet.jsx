import React, {useEffect, useState, useContext} from 'react';
import {PlanetDetails} from "../sw-components";
import {AttributesContext} from "../app";
import PropTypes from "prop-types";

import './random-planet.css'

const RandomPlanet = (prop) => {

	const [id, setId] = useState(7)
	const { detailsListPlanet } = useContext(AttributesContext)

	const timer = prop.timer

	useEffect(() => {
		const id = Math.floor(Math.random() * 17) + 2
		const interval = setInterval(() => setId(id), timer)

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

RandomPlanet.defaultProps = {
	timer: 10000
}


RandomPlanet.propTypes = {
	timer: PropTypes.number
}

export default RandomPlanet;