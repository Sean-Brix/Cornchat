import styles from "./signIn.module.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/header";
import { useState } from "react";

function signIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const authenticate = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      window.location.reload();
      return;
    }

    navigate("/cornChat");
  };

  return (
    <main className={styles.body}>
      <div className={styles.titleContainer}>
        <h1 className={styles.Title}>TORN&nbsp;</h1>
        <h6 className="text-center">INTER CONNECT</h6>
      </div>

      <div className={styles.signInContainer}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={authenticate}>SIGN IN</button>

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
