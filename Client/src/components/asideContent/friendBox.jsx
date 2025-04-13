import styles from "./friendBox.module.css";
import { useEffect, useState } from "react";

function chatBox() {
  const [friends, setFriends] = useState([]);
  
  useEffect(()=>{
    if (friends.length === 0) {
      (async () => {
        const response = await fetch('http://localhost:3000/friends');
        const data = await response.json();
        setFriends(data.list);
      })();
    }
  }, [friends.length]);

  return (
    <>
      <aside className={`${styles.asideContainer}`}>
        <h1 className={styles.status}>Online</h1>

        {
          friends.map((data, index)=>(

            <div className={styles.friends} key={index}>
              <img
                src="https://img.freepik.com/free-vector/creative-nerd-logo-template_23-2149218771.jpg?ga=GA1.1.1391464815.1739253387&semt=ais_hybrid"
                alt=""
                />
              <h1 className={styles.friendName}>{data.name}</h1>
            </div>

          ))
        }
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search friend" />
          <button>
            <img
              src="https://img.freepik.com/premium-vector/blue-magnifying-glass-is-shown-blue-circle_809378-238.jpg?ga=GA1.1.1391464815.1739253387&semt=ais_hybrid"
              alt=""
            />
          </button>
        </div>
      </aside>
    </>
  );
}
export default chatBox;
