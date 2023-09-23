import React, {createContext} from 'react';
import Header from "../header";
import ErrorButtons from "../error-buttons";
import {ErrorBoundary} from 'react-error-boundary';
import ErrorIndicate from "../error-indicate";
import {PlanetBlock, StarshipBlock, PeopleBlock} from "../sw-components";
import RandomPlanet from "../random-planet";
import attributes from "../../utils/detailsList";
import SwapiService from "../../services/swapi-service";

export const AttributesContext = createContext(null)
export const SwapiServiceContext = createContext(null)

const App = () => {

	const swapiService = new SwapiService()

	const onServiceChange = () => {
		console.log('server is changed');
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
