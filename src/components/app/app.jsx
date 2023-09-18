import React, {useState} from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";

const App = () => {

	const [personId, setPersonId] = useState(10)

	const updatePersonId = (id) => {
		setPersonId(id)
	}

	return (
		<div>
			<Header/>
			<div className="container">
				<RandomPlanet/>
				<PeoplePage personId={personId} updatePersonId={updatePersonId}/>
			</div>
		</div>
	);
};

export default App;