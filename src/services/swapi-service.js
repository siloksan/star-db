export default class SwapiService {

	_apiBase = 'https://swapi.dev/api'
	_imgBase = 'https://starwars-visualguide.com/assets/img/'

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
		const id = this._extractId(planet.url)
		return {
			id,
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter,
			image: this.getSubjectImage('planets', id)
		}
	}
	_convertDataPerson = (person) => {
		const id = this._extractId(person.url)
		return {
			id,
			name: person.name,
			birthYear: person.birth_year,
			eyeColor: person.eye_color,
			gender: person.gender,
			height: person.height,
			mass: person.mass,
			films: person.films,
			image: this.getSubjectImage('characters', id)
		}
	}

	_convertDataStarship = (starShip) => {
		const id = this._extractId(starShip.url)
		return {
			id,
			name: starShip.name,
			cargoCapacity: starShip.cargo_capacity,
			consumables: starShip.consumables,
			hyperdriveRating: starShip.hyperdrive_rating,
			model: starShip.model,
			image: this.getSubjectImage('starships', id)
		}
	}

	getSubjectImage = (folder, id) => {
		return `${this._imgBase}${folder}/${id}.jpg`
	}
}