import React, {createContext, useState} from 'react';
import Header from "../header";
import ErrorButtons from "../error-buttons";
import {ErrorBoundary} from 'react-error-boundary';
import ErrorIndicate from "../error-indicate";
import {
	PlanetBlock,
	StarshipBlock,
	PeopleBlock
} from "../sw-components";
import RandomPlanet from "../random-planet";
import attributes from "../../utils/detailsList";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";

export const AttributesContext = createContext(null)
export const SwapiServiceContext = createContext(null)

const App = () => {

	const [swapiService, setSwapiService] = useState(new SwapiService())

	const onServiceChange = () => {
		console.log('changed api')
		console.log(swapiService instanceof SwapiService)
		setSwapiService(() => {
			const Service = swapiService instanceof SwapiService
				? DummySwapiService : SwapiService
			return new Service()
		})
	}

	return (
		<ErrorBoundary FallbackComponent={ErrorIndicate}>
			<Header onServiceChange={onServiceChange}/>
			<div className="container">
				<SwapiServiceContext.Provider value={swapiService}>
					<AttributesContext.Provider value={attributes}>
						<RandomPlanet/>
						<ErrorButtons/>
						<PeopleBlock/>
						<StarshipBlock/>
						<PlanetBlock/>
					</AttributesContext.Provider>
				</SwapiServiceContext.Provider>
			</div>
		</ErrorBoundary>
	);
};

export default App;
