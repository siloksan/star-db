import React from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";
import SubjectPage from "../subject-page";
import ErrorButtons from "../error-buttons";
import {ErrorBoundary} from 'react-error-boundary';
import ErrorIndicate from "../error-indicate";
import SwapiService from "../../services/swapi-service";

const App = () => {

	const swapiService = new SwapiService()

	const {
		getAllPeople,
		getPerson,
		getAllPlanets,
		getPlanet,
		getAllStarships,
		getStarship,
		getSubjectImage
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
					getSubjectImage={getSubjectImage}
					renderItem={(item) => `${item.name} (${item.gender}, ${item.birthYear})`}
					folder="characters"/>
				<SubjectPage
					getAllData={getAllPlanets}
					getOne={getPlanet}
					getSubjectImage={getSubjectImage}
					renderItem={(item) => `${item.name} (diameter: ${item.diameter})`}
					folder="starships"/>
				<SubjectPage
					getAllData={getAllStarships}
					getOne={getStarship}
					getSubjectImage={getSubjectImage}
					renderItem={(item) => `${item.name} (model: ${item.model})`}
					folder="planets"/>
			</div>
		</ErrorBoundary>
	);
};

export default App;

