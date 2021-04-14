import styles from "./header.module.scss";

const Header = ({ userData }) => {
  return (
    <header className={styles.content}>
      <span className={styles.fullName}>
        {userData.firstName} {userData.lastName}
      </span>
    </header>
  );
};
export default Header;
