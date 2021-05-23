import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import styles from './app.module.scss';
import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';
const App = () => {
	const auth = useSelector((state) => state.auth);

	return (
		<div className={styles.content}>
			{!auth.isAuth && <Redirect to="/login" />}
			<Header isAuth={auth.isAuth} />
			<Main />
			<Footer isAuth={auth.isAuth} />
		</div>
	);
};

export default App;
