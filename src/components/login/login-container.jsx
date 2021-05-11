import { useState } from 'react';
import { useHistory } from 'react-router';
import Login from './login';

const LoginContainer = ({ setIsAuth }) => {
	const history = useHistory();
	const [ loginData, setLoginData ] = useState({
		login: '',
		password: ''
	});
	const [ isFill, setIsFill ] = useState({
		login: false,
		passwords: false
	});
	const [ isTouch, setIsTouch ] = useState({
		login: false,
		password: false
	});

	const handleBlur = (e) => {
		!isTouch[e.target.dataset.name] && setIsTouch({ ...isTouch, [e.target.dataset.name]: true });
	};

	const handleChange = (e) => {
		const value = e.target.value;
		const fieldName = e.target.dataset.name;
		setLoginData({
			...loginData,
			[fieldName]: value
		});
		if (value) return setIsFill({ ...isFill, [fieldName]: true });
		setIsFill({ ...isFill, [fieldName]: false });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const isAllFiedlFill = Object.values(loginData).every((item) => item);
		if (isAllFiedlFill) {
			history.push('/profile');
			setIsAuth(true);
			return;
		}
		setIsTouch({ login: true, password: true });
	};

	return (
		<Login
			handleSubmit={handleSubmit}
			handleChange={handleChange}
			handleBlur={handleBlur}
			loginData={loginData}
			isFill={isFill}
			isTouch={isTouch}
		/>
	);
};

export default LoginContainer;
