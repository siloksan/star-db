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

const PersonDetails = withSwapiServiceComponent(mapPersonMethodsToProps)(withDataComponent(SubjectDetails))
const StarshipDetails = withSwapiServiceComponent(mapStarshipMethodsToProps)(withDataComponent(SubjectDetails))
const PlanetDetails = withSwapiServiceComponent(mapPlanetMethodsToProps)(withDataComponent(SubjectDetails))

export {
	PersonDetails,
	StarshipDetails,
	PlanetDetails,
};