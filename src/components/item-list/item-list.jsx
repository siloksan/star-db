import React, {useEffect, useState} from 'react';

import './item-list.css'
import SwapiService from "../../services/swapi-service";

// const initialStateItemList = {
// 	peopleList: null
// }

const ItemList = () => {

	const swapiService = new SwapiService()

	const [stateItemList, setStateItemList] = useState([])

	// const { peopleList } = stateItemList

	const renderItemList = stateItemList.map(({ id, name }) => {
		return (
			<li key={id} className="list-group-item list-item">
				{name}
			</li>
		)
	})

	const onError = () => {
		console.log('error');
	}
	const updatePeopleList = () => {
		console.log('update')
		swapiService
			.getAllPeople()
			.then((peopleList) => {
				setStateItemList(peopleList)
			})
			// .catch(onError)
	}

	useEffect(() => {
		updatePeopleList()
	}, [])

	console.log(stateItemList);

	return (
		<div className="card mb-3 list-items">
			<ul className="list-group list-group-flush">
				{renderItemList}
			</ul>
		</div>
	);
};

export default ItemList;