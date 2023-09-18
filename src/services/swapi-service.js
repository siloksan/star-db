export default class SwapiService {

	_apiBase = 'https://swapi.dev/api'

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`)
		}
		return await res.json()
	}

	getAllPeople = async () => {
		const res = await this.getResource(`/people/`)
		console.log(res.results);
		return res.results.map(this._convertDataPerson)
	}

	async getPerson(id) {
		const person = await this.getResource(`/people/${id}/`)
		return this._convertDataPerson(person)
	}

	async getAllPlanets() {
		const res = await this.getResource(`/planets/`)
		return res.results.map(this._convertDataPlanet)
	}

	async getPlanet(id) {
		const planet = await this.getResource(`/planets/${id}/`)
		return this._convertDataPlanet(planet)
	}

	async getAllStarships() {
		const res = await this.getResource(`/starships/`)
		return res.results
	}

	getStarship(id) {
		return this.getResource(`/starships/${id}/`)
	}

	_extractId(url) {
		const regExpId = /(\d+)\/$/
		return url.match(regExpId)[1]
	}

	_convertDataPlanet = (planet) => {
		return {
			id: this._extractId(planet.url),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter,
		}
	}
	_convertDataPerson = (person) => {
		return {
			id: this._extractId(person.url),
			name: person.name,
			birthYear: person.birth_year,
			eyeColor: person.eye_color,
			gender: person.gender,
			height: person.height,
			mass: person.mass,
			films: person.films,
		}
	}
}

const people = new SwapiService()

people.getAllPeople().then(res => console.log(res))