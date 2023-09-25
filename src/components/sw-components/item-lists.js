import {
	compose,
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

const PeopleList = compose(
	withSwapiServiceComponent(mapPersonMethodsToProps),
	withDataComponent,
	withChildComponent(renderPersonAttributes)
)(ItemList)
const StarshipsList = compose(
	withSwapiServiceComponent(mapStarshipMethodsToProps),
	withDataComponent,
	withChildComponent(renderStarshipAttributes)
)(ItemList)
const PlanetsList = compose(
	withSwapiServiceComponent(mapPlanetMethodsToProps),
	withDataComponent,
	withChildComponent(renderPlanetAttributes)
)(ItemList)

export {
	PeopleList,
	StarshipsList,
	PlanetsList
};