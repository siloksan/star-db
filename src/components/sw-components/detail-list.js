import withDataComponent from "../hoc-helper";
import SwapiService from "../../services/swapi-service";
import SubjectDetails from "../subject-details";

// const swapiService = new SwapiService()

const mapPersonMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getPerson
	};
};

const mapPlanetMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getPlanet
	};
};

const mapStarshipMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getStarship
	};
};

// const { getPerson , getStarship, getPlanet} = swapiService

const PersonDetails = withDataComponent(SubjectDetails, mapPersonMethodsToProps)
const StarshipDetails = withDataComponent(SubjectDetails, mapPlanetMethodsToProps)
const PlanetDetails = withDataComponent(SubjectDetails, mapStarshipMethodsToProps)


export {
	PersonDetails,
	StarshipDetails,
	PlanetDetails,
};