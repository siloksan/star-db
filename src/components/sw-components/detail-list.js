import {withDataComponent, withSwapiServiceComponent} from "../hoc-helper";
import SubjectDetails from "../subject-details";

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

const PersonDetails = withSwapiServiceComponent(withDataComponent(SubjectDetails), mapPersonMethodsToProps)
const StarshipDetails = withSwapiServiceComponent(withDataComponent(SubjectDetails), mapStarshipMethodsToProps)
const PlanetDetails = withSwapiServiceComponent(withDataComponent(SubjectDetails), mapPlanetMethodsToProps)

export {
	PersonDetails,
	StarshipDetails,
	PlanetDetails,
};