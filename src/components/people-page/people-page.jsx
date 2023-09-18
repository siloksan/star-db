import React from 'react';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details";

const id = '10'

const PeoplePage = ({ personId, updatePersonId}) => {

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