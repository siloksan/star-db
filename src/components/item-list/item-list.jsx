import React, {useEffect, useState} from 'react';

import './item-list.css'
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicate from "../error-indicate";

const initialStateItemList = {
	peopleList: [],
	loading: true,
	error: false
}

const ItemList = ({ updatePersonId }) => {

	const swapiService = new SwapiService()

	const [stateItemList, setStateItemList] = useState(initialStateItemList)

	const { peopleList, error, loading } = stateItemList

	const renderItemList = peopleList.map(({ id, name }) => {
		return (
			<li key={id} className="list-group-item list-item" onClick={() => updatePersonId(id)}>
				{name}
			</li>
		)
	})

	const onError = () => {
		console.log('error')
		setStateItemList({...stateItemList, error: true })
	}
	const updatePeopleList = () => {
		swapiService
			.getAllPeople()
			.then((peopleList) => {
				setStateItemList({ peopleList, error: false, loading: false } )
			})
			.catch(onError)
	}

	useEffect(() => {
		updatePeopleList()
	}, [])


	const renderSpinner = loading && !error ? <Spinner /> : null
	const renderContent = !(loading || error) ? <ItemListView renderItemList={renderItemList}/> : null
	const renderError = error ? <ErrorIndicate /> : null

	return (
		<div className="card mb-3 list-items">
			{renderSpinner}
			{renderContent}
			{renderError}
		</div>
	);
};

export default ItemList;

const ItemListView = ({ renderItemList }) => {
	return (
		<ul className="list-group list-group-flush">
			{renderItemList}
		</ul>
	)
}