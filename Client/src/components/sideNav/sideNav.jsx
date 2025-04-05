import styles from "./sideNav.module.css";
import { Link } from "react-router-dom";
import { Apps } from "../../pages/cornChat/cornChat";
import { useContext } from "react";
function sideNav() {
  const { show, setShow } = useContext(Apps);
  return (
    <nav
      className={` transition-transform duration-500 ${
        !show
          ? "translate-0 absolute"
          : "translate-x-[-20rem] absolute md:translate-0"
      } ${styles.sideNav}`}
    >
      <h1 className={styles.Title}>CORN </h1>
      <Link to="/cornChat">
        <div className={styles.navLink}>
          <img
            className={styles.linkImg}
            src="https://img.freepik.com/free-vector/esquites-logo-design-template_23-2150057179.jpg?ga=GA1.1.1391464815.1739253387&semt=ais_hybrid"
            alt=""
          />
          <h1>HOME</h1>
        </div>
      </Link>
      <div className={styles.navLink}>
        <img
          className={styles.linkImg}
          src="https://img.freepik.com/free-photo/user-profile-sign-icon-front-side-with-white-background_187299-40018.jpg?ga=GA1.1.1391464815.1739253387&semt=ais_hybrid"
          alt=""
        />
        <h1>ADD FRIEND</h1>
      </div>
      <Link to="/globalChat">
        <div className={styles.navLink}>
          <img
            className={styles.linkImg}
            src="https://img.freepik.com/free-psd/phone-icon-design_23-2151311666.jpg?ga=GA1.1.1391464815.1739253387&semt=ais_hybrid"
            alt=""
          />
          <h1>GLOBAL CHAT</h1>
        </div>
      </Link>

      <div className={styles.friendsTab}>
        <img
          className={styles.linkImg}
          src="https://img.freepik.com/free-vector/hand-drawn-teamwork-icon_53876-113759.jpg?ga=GA1.1.1391464815.1739253387&semt=ais_hybrid"
          alt=""
        />
        <h1>FRIENDS</h1>
      </div>

      <Link to="/" className="mt-auto">
        <button className={styles.signOut}>Sign Out</button>
      </Link>
    </nav>
  );
}

export default sideNav;
