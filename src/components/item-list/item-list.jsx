import React from 'react';

import './item-list.css'
import PropTypes from "prop-types";

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

ItemList.defaultProps = {
	updateSelectedId: () => {}
}

ItemList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	updateSelectedId: PropTypes.func,
	children: PropTypes.func.isRequired
}

export default ItemList
