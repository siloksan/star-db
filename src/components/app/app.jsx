import React, {createContext, useState} from 'react';
import Header from "../header";
import {ErrorBoundary} from 'react-error-boundary';
import ErrorIndicate from "../error-indicate";
import {
	PlanetBlock,
	StarshipBlock,
	PeopleBlock,
	StarshipDetails,
	PlanetDetails
} from "../sw-components";
import RandomPlanet from "../random-planet";
import attributes from "../../utils/detailsList";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";

import './app.css'
import {Route, Routes} from "react-router-dom";
import {LoginPage, SecretPage} from "../pages";

export const SwapiServiceContext = createContext(null)

const App = () => {

	const [swapiService, setSwapiService] = useState(new DummySwapiService())
	const [isLogged, setIsLogged] = useState(false)

	const onLogin = ({ password, counter }) => {
		if (password === "password" || counter === 3) {
			setIsLogged(true)
		}
	}

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
						<RandomPlanet detailList={attributes.detailsListPlanet}/>
						<Routes>
							<Route path="/*" element={<Welcome/>}/>
							<Route path="/people/*"
							       element={<PeopleBlock detailList={attributes.detailsListPerson}/>}/>
							<Route path="/planets" element={<PlanetBlock/>}/>
							<Route path="/planets/:id"
							       element={<PlanetDetails detailList={attributes.detailsListPlanet}/>}/>
							<Route path="/starships" element={<StarshipBlock/>}/>
							<Route path="/starships/:id"
							       element={<StarshipDetails detailList={attributes.detailsListStarship}/>}/>
							<Route path="/login" element={<LoginPage onLogin={onLogin} isLogged={isLogged}/>}/>
							<Route path="/secret" element={<SecretPage isLogged={isLogged} />}/>
						</Routes>
				</SwapiServiceContext.Provider>
			</div>
		</ErrorBoundary>
	);
};

const Welcome = () => {
	return <h1 style={{textAlign: 'center', marginTop: 60}}>Welcome to the Start DB!</h1>
}

export default App;
