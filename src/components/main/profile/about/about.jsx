import styles from "./about.module.scss";

const About = (props) => {
  return (
    <section className={styles.about}>
      <div className={styles.about_wrapper}>
        <h2 className={styles.about__title}>About Me</h2>
        <p className={styles.about__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat modi
          deleniti amet tenetur totam impedit cum ullam quae, sequi enim non
          iste nemo eveniet vitae ab quasi nulla architecto cumque!
        </p>
      </div>
    </section>
  );
};

export default About;
