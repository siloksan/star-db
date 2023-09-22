import React from 'react';
import ItemList from "../item-list/item-list";
import SubjectDetails from "../subject-details";

import './subject-page.css'
import Row from "../row";

const SubjectPage = ({
	                     getAllData,
	                     getOne,
	                     renderItem,
	                     detailList,
	                     updateSelectedId,
	                     selectedId
                     }) => {



	const itemList = (
		<ItemList
			updateSelectedId={updateSelectedId}
			getData={getAllData}>
			{renderItem}
		</ItemList>
	)

	const subjectDetails = (
		<SubjectDetails selectedId={selectedId}
		                getOne={getOne}
		                detailList={detailList}/>

	)

	return (
		<Row leftBlock={itemList} rightBlock={subjectDetails}/>
	);
};

export default SubjectPage;