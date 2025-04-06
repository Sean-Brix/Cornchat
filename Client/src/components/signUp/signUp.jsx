import styles from "./signUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function signUp() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');

  const navigate = useNavigate()

  const register = async (event) =>{
    event.preventDefault();

    const response = await fetch('http://localhost:3000/user/register', {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
        fullname: fullname
      })
    });

    const data = await response.json();

    if(!response.ok){
      alert(data.message);
      return;
    }

    navigate('/');

  }

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
          onChange={e => setFullname(e.target.value)}
        />

        <input
          type="password"
          placeholder="PASSWORD"
          className={styles.signupInput}
          onChange={e => setPassword(e.target.value)}
        />

        <div className={styles.wrapper}>

          <input
            type="text"
            placeholder="USERNAME"
            className={styles.signupInput}
            onChange={e => setUsername(e.target.value)}
          />

        </div>

        <button onClick={register}>CREATE ACCOUNT</button>

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
