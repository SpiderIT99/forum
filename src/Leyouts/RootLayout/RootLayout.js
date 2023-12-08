import { NavLink, Outlet } from "react-router-dom";
import styles from './RootLayout.module.css';

export default function RootLeyout() {
    return (
        <div className={styles.layout}>
            <div className={styles.navBar}>
                <NavLink to='/'>
                    <img alt="logo" />
                </NavLink>
                <nav>
                    <div className={styles.page}>
                        <NavLink to='/'>Home</NavLink>
                    </div>
                    <div className={styles.page}>
                        <NavLink to='/page2'>Page 2</NavLink>
                    </div>
                    <div className={styles.page}>
                        <NavLink to='/page3'>Page 3</NavLink>
                    </div>
                    <div className={`${styles.page} ${styles.login}`}>
                        <NavLink to="login">Login</NavLink>
                    </div>
                </nav>
            </div>
            <div className={styles.contentPage}>
                <Outlet />
            </div>
        </div>
    )
}