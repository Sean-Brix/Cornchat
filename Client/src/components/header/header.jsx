import { useContext } from "react";
import styles from "./header.module.css";
import { Apps } from "../../pages/cornChat/cornChat";

function Header() {
  const { show, setShow } = useContext(Apps);

  return (
    <header className={styles.Header}>
      <img
        onClick={() => setShow((prev) => !prev)}
        className={`${styles.menuIcon}`}
        src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png"
        alt=""
      />
      <h1>CORN </h1>
      <img
        className={styles.profile}
        src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?ga=GA1.1.1391464815.1739253387&semt=ais_hybrid"
        alt=""
      />
    </header>
  );
}

export default Header;
