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
  isFieldEmpty,
}) => {
  return (
    <form className={styles.content} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Add Card</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.itemText}>Title card</span>
          <div className={styles.itemContent}>
            <input
              className={`${styles.itemContentInput} ${
                isFieldEmpty && !titleValue && styles.itemContentInputError
              }`}
              onChange={handleChangeTitle}
              value={titleValue}
              type="text"
            />
            <span
              className={`${styles.itemContentMessage} ${
                isFieldEmpty && !titleValue && styles.itemContentMessageError
              }`}
            >
              this field is required
            </span>
          </div>
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
          <div className={styles.itemContent}>
            <input
              className={`${styles.itemContentInput} ${
                isFieldEmpty && !priceValue && styles.itemContentInputError
              }`}
              onChange={handleChangePrice}
              value={priceValue}
              type="text"
            />
            <span
              className={`${styles.itemContentMessage} ${
                isFieldEmpty && !priceValue && styles.itemContentMessageError
              }`}
            >
              this field is required
            </span>
          </div>
        </li>
        <li className={styles.item}>
          <span className={styles.itemText}>Image URL</span>
          <div className={styles.itemContent}>
            <input
              className={`${styles.itemContentInput} ${
                isFieldEmpty && !imageValue && styles.itemContentInputError
              }`}
              onChange={handleChangeImage}
              value={imageValue}
              type="text"
            />
            <span
              className={`${styles.itemContentMessage} ${
                isFieldEmpty && !imageValue && styles.itemContentMessageError
              }`}
            >
              this field is required
            </span>
          </div>
        </li>
      </ul>
      <button className={styles.button}>submit</button>
    </form>
  );
};

export default CardsCreationForm;
