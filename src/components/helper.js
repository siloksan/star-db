const mapToProps = (service) => {
	return {
		getAnyData: service.getTheData
	};
};

class CustomService {

	_people = {
		id: 2,
		name: 'Frodo Baggins [TEST DATA]',
		gender: 'male',
		birthYear: 'long ago',
		eyeColor: 'dark brown',
		image: `https://placeimg.com/400/500/people`
	}

	getTheData = async () => {
		return this._people;
	};
}

const withData = (Wrapped, mapMethods) => {

	return () => {
		let state = {}

		const swapiService = new CustomService()

		const getData = mapMethods(swapiService)


		const update = () => {
			getData()
				.then((data) => {
					state = data
				})
		}

		return update()
	}
}