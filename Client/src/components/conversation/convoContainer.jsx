import styles from "./convo.module.css";
import { useState, useEffect, useRef } from "react";
import socket from '../../Sockets/socket.js'

function convo() {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [username, setUsername] = useState(() => `User_${Math.floor(Math.random() * 1000)}`)

  useEffect(()=>{

    // Retrieve all messages and render it
    socket.on('all-message', (data)=>{

      if(data.length === 0){
        return
      }

      setMessages((prev)=> [...prev, data])
    })

    // Render all new messages
    socket.on('message-receive', (new_message)=>{
      setMessages(prev => [...prev, new_message])
    })

    return ()=>{
      socket.off('all-message');
      socket.off('message-receive');
    }
  }, [])


  const sendMessage = ()=>{

    socket.emit("message-send", {
      message: input,
      sender: username
    })
 
  }


  const name = "Israel";

  return (
    <main className={styles.Layout}>

      <h1 className="text-2xl font-semibold text-center border-b-1 border-[#a1a1a1aa] p-2 before:content-['Conversation_with']">
        &nbsp;{name}
      </h1>

      <div className={styles.chatContainer}>

        {
          messages.map((data, index)=>(

            <div className={data.sender === username? styles.currentUser : styles.otherUser} key ={index}>

              <p>
                {data.message}
              </p>

              {
                data.sender !== username
                &&
                <img
                  src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?ga=GA1.1.1391464815.1739253387&semt=ais_hybrid"
                  alt=""
                />
              }
            </div>

          ))
        }

      </div>

      <div className={styles.userInput}>
        <textarea type="text" placeholder="Aa" onChange={(e) => setInput(e.target.value)}/>
        <button onClick={sendMessage}>
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
