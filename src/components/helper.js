const mapToProps = (service) => {
	// console.log('service: ', service);
	return {
		getData: service.getTheData
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
	const swapiService = new CustomService()
	// console.log('mapMethods: ', mapMethods);
	const getData = mapMethods(swapiService)
	console.log('getData: ', getData);
	let state = {}
		getData()
			.then((data) => {
				// console.log('data: ', data);
				state = data
				// console.log('state: ', state);
			})

	return Wrapped(state)
}

const list = (prop) => prop

const listWithData = withData(list, mapToProps)

console.log('listWithData: ', listWithData.id);
