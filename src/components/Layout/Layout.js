import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";
import styles from "./layouts.module.css";

const Layout = (props) => (
  <>
    <Menu authorized={props.authorized} />
    <main className={styles.main}>
      <Outlet />
    </main>
  </>
);

export default Layout;
