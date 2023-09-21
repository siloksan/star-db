import React, {useEffect, useState} from 'react';

import './item-list.css'
import Spinner from "../spinner";
import ErrorIndicate from "../error-indicate";

const initialStateItemList = {
	itemList: [],
	loading: true,
	error: false
}

const ItemList = (props) => {

	const { updateSelectedId, getData } = props

	const [stateItemList, setStateItemList] = useState(initialStateItemList)

	const { itemList, error, loading } = stateItemList

	const renderItemList = itemList.slice(0, 7).map((item) => {
		const { id } = item

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

	const onError = () => {
		setStateItemList({...stateItemList, error: true })
	}
	const updatePeopleList = () => {
		getData()
			.then((itemList) => {
				setStateItemList({ itemList, error: false, loading: false } )
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