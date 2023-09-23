import withDataComponent from "../hoc-helper";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";

// const swapiService = new SwapiService()

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

// const { getAllPeople, getAllStarships, getAllPlanets} = swapiService

const withChildComponent = (WrappedComponent, child) => {
	return (props) => {
		return (
			<WrappedComponent {...props}>
				{child}
			</WrappedComponent>
		)
	}
}

const renderPersonAttributes = (item) => `${item.name} (${item.gender}, ${item.birthYear})`
const renderStarshipAttributes = (item) => `${item.name} (model: ${item.model})`
const renderPlanetAttributes = (item) => `${item.name} (diameter: ${item.diameter})`

const PeopleList = withDataComponent(
	withChildComponent(ItemList,renderPersonAttributes),
	mapPersonMethodsToProps)
const StarshipsList = withDataComponent(
	withChildComponent(ItemList,renderStarshipAttributes),
	mapPlanetMethodsToProps)
const PlanetsList = withDataComponent(
	withChildComponent(ItemList,renderPlanetAttributes),
	mapStarshipMethodsToProps)

export {
	PeopleList,
	StarshipsList,
	PlanetsList
};