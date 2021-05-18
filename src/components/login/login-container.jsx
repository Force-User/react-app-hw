import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setIsAuth } from '../../redux/actions/actionAuth';
import Login from './login';

const LoginContainer = () => {
	const credentialsDefaults = {
		login: false,
		passwords: false
	};
	const dispatch = useDispatch();
	const history = useHistory();
	const [ loginData, setLoginData ] = useState({
		login: '',
		password: ''
	});
	const [ isFill, setIsFill ] = useState({
		...credentialsDefaults
	});
	const [ isTouch, setIsTouch ] = useState({
		...credentialsDefaults
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
		const isAllFieldsFilled = Object.values(loginData).every((item) => item);
		if (isAllFieldsFilled) {
			history.push('/profile');
			dispatch(setIsAuth(true));
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
