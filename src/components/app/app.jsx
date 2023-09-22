import React, {useState} from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";
import SubjectPage from "../subject-page";
import ErrorButtons from "../error-buttons";
import {ErrorBoundary} from 'react-error-boundary';
import ErrorIndicate from "../error-indicate";
import SwapiService from "../../services/swapi-service";
import {detailsListPerson, detailsListPlanet, detailsListStarship} from "../../utils/detailsList";
import {PeopleList} from "../sw-components";

const App = () => {

	const swapiService = new SwapiService()

	const [selectedId, setSelectedId] = useState(10)

	const updateSelectedId = (id) => {
		setSelectedId(id)
	}

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
				{/*<PeopleList*/}
				{/*	updateSelectedId={updateSelectedId}*/}
				{/*	/>*/}

				<SubjectPage
					getAllData={getAllPeople}
					getOne={getPerson}
					renderItem={(item) => `${item.name} (${item.gender}, ${item.birthYear})`}
					detailList={detailsListPerson}
					selectedId={selectedId}
					updateSelectedId={updateSelectedId}
				/>
				<SubjectPage
					getAllData={getAllPlanets}
					getOne={getPlanet}
					renderItem={(item) => `${item.name} (diameter: ${item.diameter})`}
					detailList={detailsListPlanet}
					selectedId={selectedId}
					updateSelectedId={updateSelectedId}
				/>
				<SubjectPage
					getAllData={getAllStarships}
					getOne={getStarship}
					renderItem={(item) => `${item.name} (model: ${item.model})`}
					detailList={detailsListStarship}
					selectedId={selectedId}
					updateSelectedId={updateSelectedId}
				/>
			</div>
		</ErrorBoundary>
	);
};

export default App;

