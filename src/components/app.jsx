import styles from "./app.module.scss";
import { Footer } from "./footer";
import { Header } from "./header";
import { Main } from "./main";
const App = ({ data }) => {
  return (
    <div className={styles.content}>
      <Header userData={data.user} />
      <Main avatar={data.avatar} />
      <Footer />
    </div>
  );
};

export default App;
