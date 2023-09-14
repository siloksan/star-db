import React from 'react';

import './item-list.css'

const ItemList = () => {
	return (
		<div className="card mb-3 list-items">
			<ul className="list-group list-group-flush">
				<li className="list-group-item list-item">An item</li>
				<li className="list-group-item list-item">A second item</li>
				<li className="list-group-item list-item">A third item</li>
			</ul>
		</div>
	);
};

export default ItemList;