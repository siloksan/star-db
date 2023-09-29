import React, {useEffect} from 'react';
import { useNavigate} from "react-router-dom";
import memImg from "../../images/secret-mem.jpg"

const SecretPage = ({ isLogged }) => {

	const navigate = useNavigate()

	useEffect(() => {
		if (!isLogged) navigate("/login")
	}, [isLogged])

	if (isLogged) {
		return (
			<div  className="text-center">
				<h3>This is a secret page. Now you've found out the whole truth!</h3>
				<img src={memImg} alt="Mem: Люк, я твой папка"/>
			</div>
		)
	}
};

export default SecretPage;