import {
	compose,
	withDataComponent,
	withSwapiServiceComponent
} from "../hoc-helper";
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

const PersonDetails = compose(
	withSwapiServiceComponent(mapPersonMethodsToProps),
	withDataComponent
)(SubjectDetails)
const StarshipDetails = compose(
	withSwapiServiceComponent(mapStarshipMethodsToProps),
	withDataComponent
)(SubjectDetails)
const PlanetDetails = compose(
	withSwapiServiceComponent(mapPlanetMethodsToProps),
	withDataComponent
)(SubjectDetails)

export {
	PersonDetails,
	StarshipDetails,
	PlanetDetails,
};