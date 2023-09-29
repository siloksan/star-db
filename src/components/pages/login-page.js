import React, {useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom";

const LoginPage = ({onLogin, isLogged}) => {

	const [state, setState] = useState({password: '', counter: 0})

	const navigate = useNavigate()
	const { counter } = state

	const onPasswordChange = (e) => {
		setState({...state, password: e.target.value})
	}

	const onSubmit = (e) => {
		e.preventDefault()
		onLogin({...state, counter: state.counter++})
		setState({...state, password: ''})
	}

	useEffect(() => {
		if (isLogged) {
			navigate("/")
		}
	}, [isLogged])

	return (
		<form onSubmit={onSubmit} className="row">
			<label className="col-auto text-center align-self-center"
			       htmlFor="password">Password</label>
			<input
				value={state.password}
				type="password"
				className="col-auto"
				placeholder="enter your password"
				onChange={onPasswordChange}/>
			<button
				type="submit"
				className="col-auto btn btn-outline-primary">
				Confirm identity
			</button>
			{ counter >= 1 ? <p>Okay, try again, maybe it'll work.</p> : null}
		</form>
	);
};

export default LoginPage;