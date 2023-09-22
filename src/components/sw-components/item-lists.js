import withDataComponent from "../hoc-helper";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";

const swapiService = new SwapiService()

const { getAllPeople, getAllStarships, getAllPlanets} = swapiService

const PeopleList = withDataComponent(ItemList, getAllPeople)
const StarshipsList = withDataComponent(ItemList, getAllStarships)
const PlanetsList = withDataComponent(ItemList, getAllPlanets)

export {
	PeopleList,
	StarshipsList,
	PlanetsList
};