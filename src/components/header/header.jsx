import HeaderNav from './header-nav';
import styles from './header.module.scss';

const Header = ({ isAuth }) => {
	return (
			<header className={styles.content}>
				<div className={styles.content__wrapper} />
				<HeaderNav isAuth={isAuth}/>
			</header>
		
	);
};
export default Header;
