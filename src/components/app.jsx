import { useState } from 'react';
import { Redirect } from 'react-router';
import styles from './app.module.scss';
import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';
const App = ({ data }) => {
	const [ isAuth, setIsAuth ] = useState(false);

	return (
		<div className={styles.content}>
			{!isAuth && <Redirect to="/login" />}
			<Header userData={data.user} isAuth={isAuth} />
			<Main avatar={data.avatar} setIsAuth={setIsAuth} />
			<Footer isAuth={isAuth} />
		</div>
	);
};


export default App;
