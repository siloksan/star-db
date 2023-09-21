export default class SwapiService {

	_apiBase = 'https://swapi.dev/api'

	 getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`)
		}
		return await res.json()
	}

	getAllPeople = async () => {
		const res = await this.getResource(`/people/`)
		return res.results.map(this._convertDataPerson)
	}

	getPerson = async (id) => {
		const person = await this.getResource(`/people/${id}/`)
		console.log(person);
		return this._convertDataPerson(person)
	}

	getAllPlanets = async () => {
		const res = await this.getResource(`/planets/`)
		return res.results.map(this._convertDataPlanet)
	}

	getPlanet = async (id) => {
		const planet = await this.getResource(`/planets/${id}/`)
		return this._convertDataPlanet(planet)
	}

	getAllStarships = async () => {
		const res = await this.getResource(`/starships/`)
		return res.results.map(this._convertDataStarship)
	}

	getStarship = async (id) => {
		const starship = await this.getResource(`/starships/${id}/`)
		return this._convertDataStarship(starship)
	}

	_extractId = (url) => {
		const regExpId = /(\d+)\/$/
		return url.match(regExpId)[1]
	}

	_convertDataPlanet = (planet) => {
		return {
			id: this._extractId(planet.url),
			name: planet.name,
			population: planet.population,
			'rotation period': planet.rotation_period,
			diameter: planet.diameter,
		}
	}
	_convertDataPerson = (person) => {
		return {
			id: this._extractId(person.url),
			name: person.name,
			birthYear: person.birth_year,
			'eye color': person.eye_color,
			gender: person.gender,
			height: person.height,
			mass: person.mass,
			films: person.films,
		}
	}

	_convertDataStarship = (starShip) => {
		return {
			id: this._extractId(starShip.url),
			name: starShip.name,
			'cargo capacity': starShip.cargo_capacity,
			consumables: starShip.consumables,
			'hyperdrive rating': starShip.hyperdrive_rating,
			model: starShip.model,
		}
	}

	getSubjectImage = (folder, id) => {
		return `https://starwars-visualguide.com/assets/img/${folder}/${id}.jpg`
	}
}


// const person = new SwapiService()
//
// 	person.getPerson(5).then(res => console.log(res))