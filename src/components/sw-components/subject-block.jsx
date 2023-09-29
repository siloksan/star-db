import {
	PeopleList,
	PlanetsList,
	StarshipsList
} from "./item-lists";

import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import Row from "../row";
import {PersonDetails} from "./detail-list";

export const PeopleBlock = ({ detailList }) => {

	const navigate = useNavigate()
	const { id } = useParams()

	const itemList = (
		<PeopleList updateSelectedId={(id) => navigate(id)} />
	)

	const subjectDetails = (
		<PersonDetails detailList={detailList} selectedId={id}/>
	)

	return (
		<Row leftBlock={itemList} rightBlock={subjectDetails}/>
	)
}
//============================================================//
export const StarshipBlock = () => {

	const navigate = useNavigate()

	return (
		<StarshipsList updateSelectedId={(id) => navigate(id)}/>
	)
}
//============================================================//
export const PlanetBlock = () => {

	const navigate = useNavigate()

	return (
		<PlanetsList updateSelectedId={(id) => navigate(id)}/>
	)
}