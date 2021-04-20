import styles from "./card.module.scss";

const Card = (props) => {
  return (
    <li className={styles.item}>
      <img className={styles.image} src={props.image} alt="goods" />
      <button className={styles.cross} data-name="cross" data-id={props.id}></button>
      <div className={styles.description}>
        <h2 className={styles.title}>{props.title}</h2>
        <span className={styles.gender}>Gender: {props.gender}</span>
        <span className={styles.price}>Price: {props.price}</span>
      </div>
    </li>
  );
};
export default Card;
