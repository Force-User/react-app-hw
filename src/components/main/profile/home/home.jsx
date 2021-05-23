import styles from './home.module.scss';
import avatar from '../../../../assets/avatar.jpg';

const Home = ({fullName,position}) => {
	return (
		<section className={styles.home}>
			<div className={styles.home_info}>
				<img src={avatar} alt="" className={styles.home_info__avatar} />
				<span className={styles.home_info__fullname}>{fullName}</span>
				<span className={styles.home_info__position}>{position}</span>
			</div>
		</section>
	);
};
export default Home;
