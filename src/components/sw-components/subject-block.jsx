import {PeopleList, PlanetsList, StarshipsList} from "./item-lists";
import {PersonDetails, PlanetDetails, StarshipDetails} from "./detail-list";
import {detailsListPerson, detailsListPlanet, detailsListStarship} from "../../utils/detailsList";
import Row from "../row";
import React, {useState} from "react";

export const PeopleBlock = () => {

	const [selectedId, setSelectedId] = useState(10)

	const updateSelectedId = (id) => {
		setSelectedId(id)
	}

	const itemList = (
		<PeopleList
			updateSelectedId={updateSelectedId}>
			{(item) => `${item.name} (${item.gender}, ${item.birthYear})`}
		</PeopleList>
	)

	const subjectDetails = (
		<PersonDetails selectedId={selectedId} detailList={detailsListPerson}/>
	)

	return (
		<Row leftBlock={itemList} rightBlock={subjectDetails}/>
	)
}

export const StarshipBlock = () => {

	const [selectedId, setSelectedId] = useState(10)

	const updateSelectedId = (id) => {
		setSelectedId(id)
	}

	const itemList = (
		<StarshipsList
			updateSelectedId={updateSelectedId}>
			{(item) => `${item.name} (model: ${item.model})`}
		</StarshipsList>
	)

	const subjectDetails = (
		<StarshipDetails selectedId={selectedId} detailList={detailsListStarship}/>
	)

	return (
		<Row leftBlock={itemList} rightBlock={subjectDetails}/>
	)
}

export const PlanetBlock = () => {

	const [selectedId, setSelectedId] = useState(10)

	const updateSelectedId = (id) => {
		setSelectedId(id)
	}

	const itemList = (
		<PlanetsList
			updateSelectedId={updateSelectedId}>
			{(item) => `${item.name} (diameter: ${item.diameter})`}
		</PlanetsList>
	)

	const subjectDetails = (
		<PlanetDetails selectedId={selectedId} detailList={detailsListPlanet}/>
	)

	return (
		<Row leftBlock={itemList} rightBlock={subjectDetails}/>
	)
}