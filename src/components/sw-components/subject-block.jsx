import {
	PeopleList,
	PlanetsList,
	StarshipsList
} from "./item-lists";
import {
	PersonDetails,
	PlanetDetails,
	StarshipDetails
} from "./detail-list";
import Row from "../row";
import React, {useContext, useState} from "react";
import {AttributesContext} from "../app";

export const PeopleBlock = () => {

	const [selectedId, setSelectedId] = useState(10)
	const { detailsListPerson } = useContext(AttributesContext)

	const updateSelectedId = (id) => {
		setSelectedId(id)
	}

	const itemList = (
		<PeopleList updateSelectedId={updateSelectedId}/>
	)

	const subjectDetails = (
		<PersonDetails selectedId={selectedId} detailList={detailsListPerson}/>
	)

	return (
		<Row leftBlock={itemList} rightBlock={subjectDetails}/>
	)
}
//============================================================//
export const StarshipBlock = () => {

	const [selectedId, setSelectedId] = useState(10)
	const { detailsListStarship } = useContext(AttributesContext)

	const updateSelectedId = (id) => {
		setSelectedId(id)
	}

	const itemList = (
		<StarshipsList updateSelectedId={updateSelectedId}/>
	)

	const subjectDetails = (
		<StarshipDetails selectedId={selectedId} detailList={detailsListStarship}/>
	)

	return (
		<Row leftBlock={itemList} rightBlock={subjectDetails}/>
	)
}
//============================================================//
export const PlanetBlock = () => {

	const [selectedId, setSelectedId] = useState(10)
	const { detailsListPlanet } = useContext(AttributesContext)

	const updateSelectedId = (id) => {
		setSelectedId(id)
	}

	const itemList = (
		<PlanetsList updateSelectedId={updateSelectedId}/>
	)

	const subjectDetails = (
		<PlanetDetails selectedId={selectedId} detailList={detailsListPlanet}/>
	)

	return (
		<Row leftBlock={itemList} rightBlock={subjectDetails}/>
	)
}