import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {PeopleList, PersonDetails, PlanetBlock, PlanetDetails, StarshipBlock, StarshipDetails} from "./sw-components";
import Row from "./row";
import SwapiService from "../services/swapi-service";
import DummySwapiService from "../services/dummy-swapi-service";
import {ErrorBoundary} from "react-error-boundary";
import ErrorIndicate from "../../../react-redux-store/src/components/error-indicator";
import Header from "./header";
import RandomPlanet from "./random-planet";
import attributes from "../utils/detailsList";
import {SwapiServiceContext} from "./app";

const compose = (...fn) => (comp) => {
	return fn.reduceRight((prevFn, currentValue) => currentValue(fn), comp)
}

const add = (a) => a

const addB = (a, b) => a + b

compose(add, addB)((f, d) => f + d)

//==========================================================

const App = () => {

	return (
			<div className="container">
					<Routes>
						<Route path="/people/:id?"
						       element={<PeopleBlock detailList={attributes.detailsListPerson}/>}/>
					</Routes>
			</div>
	);
};

export const PeopleBlock = ({ detailList }) => {

	const navigate = useNavigate()

	const itemList = (
		<PeopleList updateSelectedId={(id) => navigate(id)} />
	)

	const subjectDetails = (
		<PersonDetails detailList={detailList}/>
	)

	return (
		<Row leftBlock={itemList} rightBlock={subjectDetails}/>
	)
}

//==========================================================