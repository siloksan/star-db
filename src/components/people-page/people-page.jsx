import React from 'react';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details";

import './people-page.css'
import ErrorIndicate from "../error-indicate";
import {ErrorBoundary} from "react-error-boundary";

// const id = '10'

const Page = ({ selectedId, updateSelectedId}) => {

	return (
		<ErrorBoundary FallbackComponent={ErrorIndicate}>
			<div className="row mb2 people-page">
				<div className="col-md-4">
					<ItemList updateSelectedId={updateSelectedId}/>
				</div>
				<div className="col">
					<PersonDetails selectedId={selectedId}/>
				</div>
			</div>
		</ErrorBoundary>
	);
};

export default Page;