import React from 'react';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details";

import './people-page.css'
import ErrorIndicate from "../error-indicate";
import {ErrorBoundary} from "react-error-boundary";

// const id = '10'

const PeoplePage = ({personId, updatePersonId}) => {

	return (
		<ErrorBoundary FallbackComponent={ErrorIndicate}>
			<div className="row mb2 people-page">
				<div className="col-md-4">
					<ItemList updatePersonId={updatePersonId}/>
				</div>
				<div className="col">
					<PersonDetails personId={personId}/>
				</div>
			</div>
		</ErrorBoundary>
	);
};

export default PeoplePage;