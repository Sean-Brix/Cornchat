import styles from "./convo.module.css";
import { useState } from "react";
import io from 'socket.io-client';
const socket = io.connect("http://localhost:3000");

function convo() {

  const [message, setMessage] = useState('');

  const connect_socket = ()=>{
    socket.on('connection', ()=>{

      socket.emit('message', ()=>{
        console.log("message emitted");
      })

    })
  }

  const name = "Israel";

  return (
    <main className={styles.Layout}>
      <h1 className="text-2xl font-semibold text-center border-b-1 border-[#a1a1a1aa] p-2 before:content-['Conversation_with']">
        &nbsp;{name}
      </h1>
      <div className={styles.chatContainer}>
        <div className={styles.otherUser}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            accusantium sit doloribus veniam aliquid nemo ducimus corporis
            asperiores at saepe, sunt fuga esse. Enim accusamus tempora officia
            tenetur atque at.
          </p>
          <img
            src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?ga=GA1.1.1391464815.1739253387&semt=ais_hybrid"
            alt=""
          />
        </div>
        {/* CHAT CURRENT USER  */}
        <div className={styles.currentUser}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            accusantium sit doloribus veniam aliquid nemo ducimus corporis
            asperiores at saepe, sunt fuga esse. Enim accusamus tempora officia
            tenetur atque at.
          </p>
        </div>
        <div className={styles.currentUser}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            accusantium sit doloribus veniam aliquid nemo ducimus corporis
            asperiores at saepe, sunt fuga esse. Enim accusamus tempora officia
            tenetur atque at.
          </p>
        </div>

        <div className={styles.otherUser}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            accusantium sit doloribus veniam aliquid nemo ducimus corporis
            asperiores at saepe, sunt fuga esse. Enim accusamus tempora officia
            tenetur atque at.
          </p>
          <img
            src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?ga=GA1.1.1391464815.1739253387&semt=ais_hybrid"
            alt=""
          />
        </div>
      </div>

      <div className={styles.userInput}>
        <textarea type="text" placeholder="Aa" />
        <button>
          <img
            src="https://img.freepik.com/premium-vector/paper-plane-icon_609277-2356.jpg?ga=GA1.1.1391464815.1739253387&semt=ais_hybrid"
            alt=""
          />
        </button>
      </div>
    </main>
  );
}
export default convo;
