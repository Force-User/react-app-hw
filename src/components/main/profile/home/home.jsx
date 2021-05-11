import styles from './home.module.scss';
import avatar from '../../../../assets/avatar.jpg';

const Home = (props) => {
	return (
		<section className={styles.home}>
			<div className={styles.home_info}>
				<img src={avatar} alt="" className={styles.home_info__avatar} />
				<span className={styles.home_info__fullname}>Jay Jonah Jameson</span>
				<span className={styles.home_info__position}>Owner of the Daily Bugle</span>
			</div>
		</section>
	);
};
export default Home;
