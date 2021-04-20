import styles from "./cards-creation-form.module.scss";

const CardsCreationForm = ({
  handleSubmit,
  handleChangeTitle,
  handleChangePrice,
  handleChangeGender,
  handleChangeImage,
  titleValue,
  genderValue,
  priceValue,
  imageValue,
}) => {
  return (
    <form className={styles.content} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Add Card</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.itemText}>Title card</span>
          <input
            className={styles.itemInput}
            onChange={handleChangeTitle}
            value={titleValue}
            type="text"
          />
        </li>

        <li className={styles.item}>
          <span className={styles.itemText}>Gender</span>
          <select
            className={styles.itemSelect}
            onChange={handleChangeGender}
            value={genderValue}
          >
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </li>
        <li className={styles.item}>
          <span className={styles.itemText}>Price</span>
          <input
            className={styles.itemInput}
            onChange={handleChangePrice}
            value={priceValue}
            type="text"
          />
        </li>
        <li className={styles.item}>
          <span className={styles.itemText}>Image URL</span>
          <input
            className={styles.itemInput}
            onChange={handleChangeImage}
            value={imageValue}
            type="text"
          />
        </li>
      </ul>
      <button className={styles.button}>submit</button>
    </form>
  );
};

export default CardsCreationForm;
