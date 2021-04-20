import React from "react";
import { apiCall } from "../../../api/mockedAPI";
import { Card } from "./card";
import styles from "./cards.module.scss";

class CardsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }
  componentDidMount() {
    apiCall().then((data) => {
      this.setState({ cards: data });
    });
  }
  render() {
    const { cards } = this.state;
    if (!cards.length) {
      return (
        <section className={styles.content}>
          <p className={styles.noCards}>No cards yet</p>
        </section>
      );
    }
    return (
      <section className={styles.content}>
        <div className="wrapper">
          <h2 className={styles.title}>Armor</h2>
          <ul className={styles.list}>
            {cards.map((card) => {
              return (
                <Card
                  key={card.id}
                  title={card.title}
                  gender={card.gender}
                  image={card.imageUrl}
                  price={card.price}
                />
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default CardsContainer;
