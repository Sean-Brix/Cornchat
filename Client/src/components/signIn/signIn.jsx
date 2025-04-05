import styles from "./signIn.module.css";
import { Link } from "react-router-dom";
import Header from "../header/header";
function signIn() {
  return (
    <main className={styles.body}>
      <div className={styles.titleContainer}>
        <h1 className={styles.Title}>CORN&nbsp;</h1>
        <h6 className="text-center">INTER CONNECT</h6>
      </div>

      <div className={styles.signInContainer}>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Link to="cornChat">
          <button>SIGN IN</button>
        </Link>
        <div>
          <span>Don't Have account? </span>
          <Link className="text-blue-500" to="/signUp">
            Sign up
          </Link>
        </div>
      </div>
    </main>
  );
}
export default signIn;
