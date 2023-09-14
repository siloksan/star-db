import React from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details";

const App = () => {
	return (
		<div>
			<Header/>
			<div className="container">
				<RandomPlanet/>
				<ItemList />
				<PersonDetails />
			</div>
		</div>
	);
};

export default App;