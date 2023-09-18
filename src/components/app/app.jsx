import React, {useState} from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import ErrorButtons from "../error-buttons";
import {ErrorBoundary} from 'react-error-boundary';
import ErrorIndicate from "../error-indicate";

const App = () => {

	const [personId, setPersonId] = useState(10)

	const updateSelectedId = (id) => {
		setPersonId(id)
	}

	return (
		<ErrorBoundary FallbackComponent={ErrorIndicate}>
			<Header/>
			<div className="container">
				<RandomPlanet/>
				<ErrorButtons/>
				<PeoplePage personId={personId} updatePersonId={updateSelectedId}/>
			</div>
		</ErrorBoundary>
	);
};

export default App;

