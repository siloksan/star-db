const compose = (...fn) => (comp) => {
	return fn.reduceRight((prevFn, currentValue) => currentValue(fn), comp)
}

const add = (a) => a

const addB = (a, b) => a + b

compose(add, addB)((f, d) => f + d)
