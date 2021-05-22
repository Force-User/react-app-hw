import styles from './header-nav.module.scss';
import { NavLink } from 'react-router-dom';

const HeaderNav = ({ isAuth }) => {
	return (
		isAuth && (
			<nav className={styles.content}>
				<ul className={styles.content_list}>
					<li className={styles.content_list__item}>
						<NavLink className={styles.content__link} to="/cards">
							Cards
						</NavLink>
					</li>
					<li className={styles.content_list__item}>
						<NavLink className={styles.content__link} to="/profile">
							Profile
						</NavLink>
					</li>
				</ul>
			</nav>
		)
	);
};

export default HeaderNav;
