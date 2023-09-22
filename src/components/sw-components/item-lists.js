import React from 'react';
import withDataComponent from "../hoc-helper";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list/item-list";

const swapiService = new SwapiService()

const { getAllPeople, getAllStarships, getAllPlanets} = swapiService

const PeopleList = withDataComponent(ItemList, getAllPeople)
const StarshipsList = withDataComponent(ItemList, getAllPeople)
const PlanetsList = withDataComponent(ItemList, getAllPeople)

export {
	PeopleList,
	StarshipsList,
	PlanetsList
};