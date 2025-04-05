import styles from "./signUp.module.css";
import { Link } from "react-router-dom";
function signUp() {
  return (
    <main className={styles.body}>
      <div className={styles.titleContainer}>
        <h1 className={styles.Title}>CORN&nbsp;</h1>
        <h6 className="text-center">INTER CONNECT</h6>
      </div>

      <div className={styles.signUpContainer}>
        <input
          type="text"
          placeholder="FULL NAME"
          className={styles.signupInput}
        />

        <input
          type="password"
          placeholder="PASSWORD"
          className={styles.signupInput}
        />
        <div className={styles.wrapper}>
          <input
            type="email"
            placeholder="EMAIL"
            className={styles.signupInput}
          />
          <button>SEND CODE</button>
        </div>
        <div className={styles.wrapper}>
          <input
            type="email"
            placeholder="4 DIGIT CODE"
            className={styles.signupInput}
          />
          <button>VERIFY</button>
        </div>

        <Link to="/" className={styles.signupButton}>
          <button>CREATE ACCOUNT</button>
        </Link>
        <div>
          <span>Already have an account? </span>
          <Link className="text-blue-500" to="/">
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
export default signUp;
