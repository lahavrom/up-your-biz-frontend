import { Divider } from "monday-ui-react-core";
import moneySave from "../../../assets/save-money.gif";
import styles from "./piggyBank.module.css";

const PiggyBank = () => {
  return (
    <div className={styles.container}>
      <img src={moneySave} alt="moneySave" className={styles.moneySave} />

      <Divider direction={Divider.directions.HORIZONTAL} />
      <p className={styles.text}>Advanced analytics to help you save money</p>
    </div>
  );
};
export default PiggyBank;
