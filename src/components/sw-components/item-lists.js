import {
	withDataComponent,
	withSwapiServiceComponent,
	withChildComponent
} from "../hoc-helper";
import ItemList from "../item-list";

const mapPersonMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllPeople
	};
};

const mapPlanetMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllPlanets
	};
};

const mapStarshipMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllStarships
	};
};

const renderPersonAttributes = (item) => `${item.name} (${item.gender}, ${item.birthYear})`
const renderStarshipAttributes = (item) => `${item.name} (model: ${item.model})`
const renderPlanetAttributes = (item) => `${item.name} (diameter: ${item.diameter})`

const PeopleList = withSwapiServiceComponent(withDataComponent(
	withChildComponent(ItemList,renderPersonAttributes)),
	mapPersonMethodsToProps)
const StarshipsList = withSwapiServiceComponent(withDataComponent(
		withChildComponent(ItemList,renderStarshipAttributes)),
	mapStarshipMethodsToProps)
const PlanetsList = withSwapiServiceComponent(withDataComponent(
		withChildComponent(ItemList,renderPlanetAttributes)),
	mapPlanetMethodsToProps)

export {
	PeopleList,
	StarshipsList,
	PlanetsList
};