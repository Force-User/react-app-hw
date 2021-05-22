import { Route } from 'react-router';
import LoginContainer from '../login/';
import { CardsContainer } from './cards';
import styles from './main.module.scss';
import Profile from './profile';
const Main = ({ setIsAuth }) => {
	return (
		<main className={styles.content}>
			{/* <img src={avatar.image} alt={avatar.alt} className={styles.image} /> */}
			<Route path="/cards" component={CardsContainer} />
			<Route path="/profile" component={Profile} />
			<Route path="/login" render={() => <LoginContainer setIsAuth={setIsAuth} />} />
		</main>
	);
};
export default Main;
