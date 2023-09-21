import React from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";
import SubjectPage from "../subject-page";
import ErrorButtons from "../error-buttons";
import {ErrorBoundary} from 'react-error-boundary';
import ErrorIndicate from "../error-indicate";
import SwapiService from "../../services/swapi-service";
import {detailsListPerson, detailsListPlanet, detailsListStarship} from "../../utils/detailsList";

const App = () => {

	const swapiService = new SwapiService()

	const {
		getAllPeople,
		getPerson,
		getAllPlanets,
		getPlanet,
		getAllStarships,
		getStarship,
	} = swapiService

	return (
		<ErrorBoundary FallbackComponent={ErrorIndicate}>
			<Header/>
			<div className="container">
				<RandomPlanet/>
				<ErrorButtons/>
				<SubjectPage
					getAllData={getAllPeople}
					getOne={getPerson}
					renderItem={(item) => `${item.name} (${item.gender}, ${item.birthYear})`}
					detailList={detailsListPerson}/>
				<SubjectPage
					getAllData={getAllPlanets}
					getOne={getPlanet}
					renderItem={(item) => `${item.name} (diameter: ${item.diameter})`}
					detailList={detailsListPlanet}/>
				<SubjectPage
					getAllData={getAllStarships}
					getOne={getStarship}
					renderItem={(item) => `${item.name} (model: ${item.model})`}
					detailList={detailsListStarship}/>
			</div>
		</ErrorBoundary>
	);
};

export default App;

