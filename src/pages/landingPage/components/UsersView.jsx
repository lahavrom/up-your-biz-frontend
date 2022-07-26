import { Divider } from "monday-ui-react-core";
import network from "../../../assets/network1.gif";
import { ABOUT_INFO } from "../../../helpers/constants";

import styles from "./usersView.module.css";

const UsersView = () => {
  return (
    <div className={styles.container}>
      <img src={network} alt="network" className={styles.network} />

      <Divider direction={Divider.directions.HORIZONTAL} />
      <p className={styles.text}>{ABOUT_INFO.USERS}</p>
    </div>
  );
};
export default UsersView;
