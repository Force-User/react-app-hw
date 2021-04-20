import { CardsContainer } from "./cards";
import styles from "./main.module.scss";

const Main = ({ avatar }) => {
  return (
    <main className={styles.content}>
      <img src={avatar.image} alt={avatar.alt} className={styles.image} />
      <CardsContainer />
    </main>
  );
};
export default Main;
