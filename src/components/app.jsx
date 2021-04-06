import styles from "./app.module.scss";
import { Header } from "./header";
const App = ({data}) => {
  return <div className={styles.content}>
    <Header userData={data.user}/>
  </div>;
};

export default App;
