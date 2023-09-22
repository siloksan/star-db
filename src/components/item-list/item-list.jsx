import React from 'react';

import './item-list.css'
import withDataComponent from "../hoc-helper";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService()

const { getAllPeople, getAllStarships, getAllPlanets} = swapiService

const ItemList = (props) => {

	const {data, updateSelectedId} = props

	const renderItemList = data.slice(2, 9).map((item) => {
		const {id} = item

		const label = props.children(item)
		return (
			<li key={id}
			    className="list-group-item list-item"
			    onClick={() => updateSelectedId(id)}
			>
				{label}
			</li>
		)
	})

	return (
		<div className="card mb-3 list-items">
			<ItemListView renderItemList={renderItemList}/>
		</div>
	);
};

const ItemListView = ({renderItemList}) => {
	return (
		<ul className="list-group list-group-flush">
			{renderItemList}
		</ul>
	)
}

export default withDataComponent(ItemList, getAllPeople)
