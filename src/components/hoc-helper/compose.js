const compose = (...functions) => (Component) => {
	return functions.reduceRight((wrapped, fn) => fn(wrapped), Component)
}

export default compose