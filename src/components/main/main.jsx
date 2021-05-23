import { Route } from 'react-router';
import LoginContainer from '../login/';
import { CardsContainer } from './cards';
import styles from './main.module.scss';
import ProfileContainer from './profile';

const Main = () => {
	return (
		<main className={styles.content}>
			{/* <img src={avatar.image} alt={avatar.alt} className={styles.image} /> */}
			<Route path="/cards" component={CardsContainer} />
			<Route path="/profile" component={ProfileContainer} />
			<Route path="/login" component={LoginContainer } />
		</main>
	);
};
export default Main;
