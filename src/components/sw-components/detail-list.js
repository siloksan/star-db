import withDataComponent from "../hoc-helper";
import SwapiService from "../../services/swapi-service";
import SubjectDetails from "../subject-details";

const swapiService = new SwapiService()

const { getPerson , getStarship, getPlanet} = swapiService

const PersonDetails = withDataComponent(SubjectDetails, getPerson)
const StarshipDetails = withDataComponent(SubjectDetails, getStarship)
const PlanetDetails = withDataComponent(SubjectDetails, getPlanet)


export {
	PersonDetails,
	StarshipDetails,
	PlanetDetails,
};