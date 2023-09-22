import React from 'react';
import Header from "../header";
// import RandomPlanet from "../random-planet";
import ErrorButtons from "../error-buttons";
import {ErrorBoundary} from 'react-error-boundary';
import ErrorIndicate from "../error-indicate";
import {PeopleBlock} from "../sw-components/";
import {PlanetBlock, StarshipBlock} from "../sw-components/subject-block";
import RandomPlanet from "../random-planet";

const App = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorIndicate}>
			<Header/>
			<div className="container">
				<RandomPlanet />
				<ErrorButtons />
				<PeopleBlock />
				<StarshipBlock />
				<PlanetBlock />
			</div>
		</ErrorBoundary>
	);
};

export default App;
