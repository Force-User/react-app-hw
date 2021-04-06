import styles from "./main.module.scss";

const Main = ({ avatar }) => {
  console.log(avatar.image);
  return (
    <main className={styles.content}>
      <img src={avatar.image} alt={avatar.alt} className={styles.image} />
    </main>
  );
};
export default Main;
