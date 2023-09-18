import React, {useState} from 'react';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details";

const id = Math.floor(Math.random() * 19) + 1

const PeoplePage = () => {

	const [personId, setPersonId] = useState(id)

	const updatePersonId = (id) => {
		setPersonId(id)
	}

	return (
		<div className="row mb2">
			<div className="col-md-4">
				<ItemList updatePersonId={updatePersonId}/>
			</div>
			<div className="col">
				<PersonDetails personId={personId}/>
			</div>
		</div>
	);
};

export default PeoplePage;